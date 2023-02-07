package com.progmind.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.progmind.models.User;
import com.progmind.services.AuthenticationService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
  
  private final AuthenticationService authService;

  @CrossOrigin("http://localhost:3000")
  @PostMapping("/register")
  public ResponseEntity<Map<String, String>> register(@RequestBody @Valid User user){
    return authService.register(user);
  }


  @CrossOrigin("http://localhost:3000")
  @PostMapping("/login")
  public ResponseEntity<Map<String, String>> login(@RequestBody @Valid AuthenticationRequest request){
    return authService.authenticate(request);
  }



  @CrossOrigin("http://localhost:3000")
  @PostMapping("/check-token")
  public ResponseEntity<Map<String, String>> checkToken (@RequestBody @Valid CheckValidRequest token){

    return authService.checkToken(token);
  }




   /* CHECKING USER'S CREATION ERROR */
   @ResponseStatus(code = HttpStatus.FORBIDDEN)
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
