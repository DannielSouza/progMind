package com.progmind.services;

import com.progmind.models.User;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

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
    message.put("userEmail", user.getEmail());
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
      message.put("userEmail", request.getEmail());
      return ResponseEntity.ok().body(message);
      
    } catch (Exception e) {
      message.put("error", "Usuário ou senha inválido.");
      return ResponseEntity.badRequest().body(message);
    }

  }




  /* CHECK IF THE USER'S TOKEN IS VALID */
  public ResponseEntity<Map<String, String>> checkToken(CheckValidRequest data){

    Map<String, String> message = new HashMap<>();
    Optional<User> user = repository.findByEmail(data.getUserEmail());
    
    try {
      jwtService.isTokenValid(data.getToken(), user.get());

      message.put("message", "Token correto.");
       return ResponseEntity.ok().body(message);

    } catch (Exception e) {
      message.put("error", "Token inválido.");
      return ResponseEntity.badRequest().body(message);
    }
    
  }
  
}
