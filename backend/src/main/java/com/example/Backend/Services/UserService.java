package com.example.Backend.Services;

import com.example.Backend.Model.Users;

import java.util.List;

public interface UserService {

    List<Users> getUsers();

    Users getUserById(Long id);

    Users addUser(Users users);
}
