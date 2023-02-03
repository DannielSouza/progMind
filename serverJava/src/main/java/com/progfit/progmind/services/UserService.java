package com.progfit.progmind.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.progfit.progmind.models.User;
import com.progfit.progmind.repositories.UserRepository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService {
  
  @Autowired
  private UserRepository repository;


  

  /* CHECK IF THE USER ALREARY EXIST */
  public List<User> checkExistingUser(String email){
    List<User> usersExisting = repository.findByEmail(email);
    return usersExisting;
  }
  

  /* CREATE A NEW USER AFTER CHECK IF THE USER DOESN'T EXIST */
  public ResponseEntity<Map<String, String>> createUser(User user){

    Map<String, String> message = new HashMap<>();

    List<User> usersExisting = checkExistingUser(user.getEmail());
    if(usersExisting.size() >= 1){
      message.put("error", "O usuário já existe.");
      return ResponseEntity.badRequest().body(message);
    }

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    User newUser = new User(null, user.getName(), user.getEmail(), encoder.encode(user.getPassword()));
    repository.save(newUser);
    message.put("message", "Usuário criado com sucesso.");

    return ResponseEntity.ok().body(message);
  }
  

  

}
