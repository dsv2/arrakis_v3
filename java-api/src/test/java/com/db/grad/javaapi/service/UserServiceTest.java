package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.UsersRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UsersRepository usersRepository;

    @BeforeEach
    public void setUp() {

//        this.userService = new UserService(usersRepository);
    }
    @Test
    public void testGetAllUsers() {

        // arrange
        UserService cut = new UserService(usersRepository);
        User testUser = new User();
        testUser.setUsername("Lily");
        testUser.setPassword("password123");
        cut.addUser(testUser);

        boolean expectedResult = true;
        boolean actualResult = false;

        // act
        if (cut.getAllUsers() != null) {
            actualResult = true;
        } else {
            actualResult = false;
        }

        // assert
        assertEquals(expectedResult, actualResult);
    }
}
