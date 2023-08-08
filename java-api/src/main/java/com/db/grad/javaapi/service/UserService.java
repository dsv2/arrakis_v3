package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {
    private UsersRepository itsUsersRepo;

    @Autowired
    public UserService(UsersRepository userRepo )
    {
        itsUsersRepo = userRepo;
    }

    @Override
    public List<User> getAllUsers()
    {
        return itsUsersRepo.findAll();
    }

    @Override
    public User addUser(User theUser)
    {
        return itsUsersRepo.save( theUser );
    }

    @Override
    public long getNoOfUsers()
    {
        return itsUsersRepo.count();
    }

    @Override
    public User getUserByUsername(String usersName )
    {
        User userToFind = new User();
        userToFind.setUsername(usersName);
        List<User> users = itsUsersRepo.findByName(userToFind);
        User result = null;

        if( users.size() == 1)
            result = users.get(0);

        return result;
    }

    @Override
    public boolean verifyUser(String username, String password) {

        if ((itsUsersRepo.findByNameAndPassword(username, password)).isEmpty()) {

            return false;
        }else{
            return true;
        }
    }

    @Override
    public User updateUserDetails(User userToUpdate) {
        return itsUsersRepo.save(userToUpdate);
    }

}
