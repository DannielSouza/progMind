package com.progfit.progmind;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class ProgmindApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProgmindApplication.class, args);
	}

}
