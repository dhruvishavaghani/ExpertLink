package com.example.Backend.ServiceImpl;

import com.example.Backend.Model.Profile;
import com.example.Backend.Repository.ProfileRepo;
import com.example.Backend.Services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    ProfileRepo profileRepo;

    @Override
    public List<Profile> getAllProfiles() {
        List<Profile>profiles = profileRepo.findAll();
        return profiles;
    }
}
