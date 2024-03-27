package com.example.FullStackApp.service;

import com.example.FullStackApp.model.User;
import com.example.FullStackApp.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;


    @Override
    public List<User> getAllUsers() {
        return  userRepository.findAll();
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUserById(Long id, User user) {

        User dbUser = userRepository.findById(id).get();

        dbUser.setName(user.getName());
        dbUser.setEmail(user.getEmail());
        dbUser.setPhone(user.getPhone());

        return userRepository.save(dbUser);
    }

    @Override
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}
