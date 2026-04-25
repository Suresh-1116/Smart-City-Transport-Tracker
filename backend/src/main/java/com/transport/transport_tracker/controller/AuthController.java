package com.transport.transport_tracker.controller;

import com.transport.transport_tracker.model.User;
import com.transport.transport_tracker.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // Register API
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return authService.register(user);
    }

    // Login API
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return authService.login(user);
    }
}