package com.progfit.progmind.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.progfit.progmind.models.User;


public interface UserRepository extends JpaRepository<User,Integer> {
  

  Optional<User> findByEmail(String email);

}


