package com.example.FullStackApp.service;

import com.example.FullStackApp.model.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();
    User findById(Long name);
    User createUser(User user);
    User updateUserById(Long id, User user);
    void deleteUserById(Long id);

}
