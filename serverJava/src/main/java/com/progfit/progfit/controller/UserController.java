package com.progfit.progfit.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.progfit.progfit.models.User;
import com.progfit.progfit.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {
  
  @Autowired
  private UserService service;




  /* CREATE USER */
  @PostMapping(value = "/create")
  public ResponseEntity<Map<String, String>> createUser(@RequestBody @Valid User user){
    return service.createUser(user);
  }


  /* CHECKING USER'S CREATION ERROR */
  @ResponseStatus(code = HttpStatus.BAD_REQUEST)
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public Map<String, String> handleValidationException(MethodArgumentNotValidException ex){

    Map<String, String> errors = new HashMap<>();

    ex.getBindingResult().getAllErrors().forEach(error ->{
      String errorMessage = error.getDefaultMessage();
      errors.put("error", errorMessage);
    });

    return errors;
  }
}
