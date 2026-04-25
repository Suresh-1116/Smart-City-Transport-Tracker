package com.transport.transport_tracker.service;

import com.transport.transport_tracker.JwtUtil;
import com.transport.transport_tracker.model.User;
import com.transport.transport_tracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Register new user
    public String register(User user) {
        // Check if email already exists
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already registered!";
        }
        // Encrypt password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        // Set default role as COMMUTER
        user.setRole(User.Role.COMMUTER);
        // Save to database
        userRepository.save(user);
        return "User registered successfully!";
    }

    // Login user
    public String login(User user) {
        // Find user by email
        User existingUser = userRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found!"));
        // Check password
        if (!passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            return "Invalid password!";
        }
        // Generate and return JWT token
        return jwtUtil.generateToken(existingUser.getEmail(), existingUser.getRole().name());
    }
}