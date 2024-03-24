package com.example.Backend.Controller;

import com.example.Backend.Model.Profile;
import com.example.Backend.Model.Users;
import com.example.Backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@Controller
@CrossOrigin(origins = "http://localhost:5173/" , allowedHeaders = "*", allowCredentials = "true")
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/user")
    public ResponseEntity<?>loginuser(@RequestBody Users users){

        Users user = new Users();
        Profile profile = new Profile();
        profile.setFirstName(users.getName());
        user.setEmail(users.getEmail());
        user.setName(users.getName());
        user.setProfile(profile);
        user.setPassword(passwordEncoder.encode(users.getPassword()));
        userService.addUser(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/user/login")
    public ResponseEntity<?> isloginuser(@RequestBody Users users){

        Users user = userService.getUserByEmail(users.getEmail());
        if(user!=null)
            return ResponseEntity.ok(user);
        else
            return ResponseEntity.ok("ERROR");
    }

    @GetMapping("/test")
    public ResponseEntity<?>test(){
        Users users = userService.getUserById(4L);
        System.out.println(passwordEncoder.matches("123", users.getPassword()));
        return ResponseEntity.ok("OK");
    }
}
