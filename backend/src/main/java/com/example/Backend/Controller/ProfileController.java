package com.example.Backend.Controller;

import com.example.Backend.Model.Profile;
import com.example.Backend.Response.ProfileResponse;
import com.example.Backend.ServiceImpl.ProfileServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin("*")
@RequestMapping("/api")
public class ProfileController {

    @Autowired
    ProfileServiceImpl profileService;

    @GetMapping("/profile")
    public ResponseEntity<?> getProfiles(){

        List<ProfileResponse>profileResponses = new ArrayList<>();
        List<Profile>profiles = profileService.getAllProfiles();

//        System.out.println(profiles.getFirst().getUsers().getEmail());

        for(Profile p : profiles){
            ProfileResponse profileResponse = new ProfileResponse();
            profileResponse.setUid(p.getUsers().getId());
            profileResponse.setRole(p.getRole());
            profileResponse.setIntro(p.getIntro());
            profileResponse.setWorkAt(p.getWorkAt());
            profileResponse.setLastName(p.getLastName());
            profileResponse.setFirstName(p.getFirstName());
            profileResponses.add(profileResponse);
        }

        return ResponseEntity.ok(profileResponses);
    }
}
