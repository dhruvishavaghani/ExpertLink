package com.example.Backend.ServiceImpl;

import com.example.Backend.Model.Users;
import com.example.Backend.Repository.UsersRepo;
import com.example.Backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UsersRepo usersRepo;

    @Override
    public List<Users> getUsers() {
        return usersRepo.findAll();
    }

    @Override
    public Users getUserById(Long id) {
        return usersRepo.findById(id).orElseThrow();
    }

    @Override
    public Users addUser(Users users) {
        return usersRepo.save(users);
    }
}
