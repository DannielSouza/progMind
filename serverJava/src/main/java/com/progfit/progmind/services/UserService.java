package com.progfit.progmind.services;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

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
  public Optional<User> checkExistingUser(String email){
    Optional<User> usersExisting = repository.findByEmail(email);
    return usersExisting;
  }
  

  /* CREATE A NEW USER AFTER CHECK IF THE USER DOESN'T EXIST */
  public ResponseEntity<Map<String, String>> createUser(User user){

    Map<String, String> message = new HashMap<>();

    Optional<User> usersExisting = checkExistingUser(user.getEmail());
    if(!usersExisting.isEmpty()){
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
