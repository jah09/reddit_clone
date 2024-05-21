package com.clone.reddit.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    @GetMapping("/")
    public String getUsers() {
        // Your logic to retrieve users
        return "List of users";
    }

}
