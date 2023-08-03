package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsersRepository extends JpaRepository<User, String> {

    @Query(nativeQuery = true, value = "select * from user where username = :name")
    List<User> findByName(User name);

    @Query(nativeQuery = true, value = "select * from user where username = :username and password = :password")
    List<User> findByNameAndPassword(String username, String password);
}
