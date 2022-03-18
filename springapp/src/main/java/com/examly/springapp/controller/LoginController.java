package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.LoginModel;

@RestController
public class LoginController {
	
	@PostMapping("/login")
	public String checkUser(@RequestBody LoginModel login) {
		return login.toString();
	} 
}
