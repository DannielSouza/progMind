package com.progfit.progfit.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.progfit.progfit.models.User;
import com.progfit.progfit.repositories.UserRepository;

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
      message.put("error", "This user alreary exist");
      return ResponseEntity.badRequest().body(message);
    }

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    User newUser = new User(null, user.getName(), user.getEmail(), encoder.encode(user.getPassword()));
    repository.save(newUser);
    message.put("message", "User create sucefully.");

    return ResponseEntity.ok().body(message);
  }
  

  

}
