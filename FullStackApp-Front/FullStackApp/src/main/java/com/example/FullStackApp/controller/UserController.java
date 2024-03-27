package com.example.FullStackApp.controller;


import com.example.FullStackApp.model.User;
import com.example.FullStackApp.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("api/v1/users")
@AllArgsConstructor
@CrossOrigin("*")
public class UserController {

    private final UserService userService;


    @GetMapping("/")
    public ResponseEntity<List<User>> getAllUsers() {

        return ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {

        return ok(userService.findById(id));

    }


    @PostMapping("/")
    public ResponseEntity<User> createUser(@RequestBody User user) {

        return new ResponseEntity<>(userService.createUser(user), CREATED);

    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUserById(@PathVariable Long id, @RequestBody User user) {

      return   ResponseEntity.ok( userService.updateUserById(id,user ));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {

        userService.deleteUserById(id);
        return  ResponseEntity.noContent().build();
    }
}
