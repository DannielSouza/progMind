package com.progmind.services;

import com.progmind.models.Payload;
import com.progmind.models.User;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.progmind.JWTconfig.JwtService;
import com.progmind.controller.AuthenticationRequest;
import com.progmind.controller.CheckValidRequest;
import com.progmind.repositories.UserRepository;


@Service
public class AuthenticationService {

  
  @Autowired
  private UserRepository repository;
  @Autowired
  private AuthenticationManager authenticationManager;
  @Autowired
  private JwtService jwtService;


  /* CHECK IF THE USER ALREARY EXIST IN THE DB  */
  public Optional<User> checkExistingUser(String email){
    Optional<User> usersExisting = repository.findByEmail(email);
    return usersExisting;
  }



  /* REGISTER USER AFTER CHECK IF THE USER IS ALREARY EXIST */
  public ResponseEntity<Map<String, String>> register(User user){

    Map<String, String> message = new HashMap<>();
    Optional<User> usersExisting = checkExistingUser(user.getEmail());

    if(!usersExisting.isEmpty()){
      message.put("error", "Este e-mail já está sendo usado.");
      return ResponseEntity.badRequest().body(message);
    }
    
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    User newUser = new User(null, user.getName(), user.getEmail(), encoder.encode(user.getPassword()));
    repository.save(newUser);
    var jwtToken = jwtService.generateToken(newUser);

    message.put("token", jwtToken);
    message.put("userEmail", newUser.getEmail());
    message.put("userName", newUser.getName());
    return ResponseEntity.ok().body(message);

  }



  /* LOGIN USER */
  public ResponseEntity<Map<String, String>> authenticate(AuthenticationRequest request){

    Map<String, String> message = new HashMap<>();
    Optional<User> user = repository.findByEmail(request.getEmail());

    try {

      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
      var jwtToken = jwtService.generateToken(user.get());

      message.put("token", jwtToken);
      message.put("userEmail", user.get().getEmail());
      message.put("userName",  user.get().getName());
      return ResponseEntity.ok().body(message);
      
    } catch (Exception e) {
      message.put("error", "Usuário ou senha inválido.");
      return ResponseEntity.badRequest().body(message);
    }

  }




  /* CHECK IF THE USER'S TOKEN IS VALID */
  public ResponseEntity<Map<String, String>> checkToken(CheckValidRequest token){

    Map<String, String> message = new HashMap<>();
    
    String[] chunks = token.getToken().split("\\.");

    Base64.Decoder decoder = Base64.getUrlDecoder();
    String payload = new String(decoder.decode(chunks[1]));

    Gson g = new Gson();  
    Payload payloadJSON =g.fromJson(payload, Payload.class);

    Optional<User> user;

    try{
      user = repository.findByEmail(payloadJSON.getSub());
      user.get().getEmail();

    }catch (Exception e){
      message.put("error", "Token inválido.");
      return ResponseEntity.badRequest().body(message);
    }

    try{
      payloadJSON = g.fromJson(payload, Payload.class);
    
      if(user.get().getEmail() != payloadJSON.getSub()){
        message.put("message", "Token valido.");
        message.put("userEmail", user.get().getEmail());
        message.put("userName", user.get().getName());
        message.put("token", token.getToken());
        return ResponseEntity.ok().body(message);
      }

      message.put("error", "Token inválido.");
      return ResponseEntity.badRequest().body(message);
      
    } catch (Exception e) {
      message.put("error", "Token inválido.");
      return ResponseEntity.badRequest().body(message);
    }

  }
  
}
