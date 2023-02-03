package com.progfit.progmind.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.progfit.progmind.models.User;


public interface UserRepository extends JpaRepository<User,Integer> {
  

  List<User> findByEmail(String email);

}


