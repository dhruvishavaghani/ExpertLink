package com.example.Backend.Controller;

import com.example.Backend.Model.Users;
import com.example.Backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?>loginuser(@RequestBody Users users){

        Users user = new Users();
        System.out.println(user.getEmail());
        user.setEmail(users.getEmail());
        user.setName(users.getName());
        System.out.println(users.getPassword());
        user.setPassword(passwordEncoder.encode(users.getPassword()));
        userService.addUser(user);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/test")
    public ResponseEntity<?>test(){
        Users users = userService.getUserById(4L);
        System.out.println(passwordEncoder.matches("123", users.getPassword()));
        return ResponseEntity.ok("OK");
    }
}
