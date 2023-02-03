package com.progfit.progfit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class ProgfitApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProgfitApplication.class, args);
	}

}
