package com.db.grad.javaapi.service;
import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.model.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    public List<User> getAllUsers();

    public User addUser(User theUser);

    public long getNoOfUsers();

    public User getUserByUsername(String usersName );

    public boolean verifyUser(String username, String password);

    public User updateUserDetails(User userToUpdate);
}
