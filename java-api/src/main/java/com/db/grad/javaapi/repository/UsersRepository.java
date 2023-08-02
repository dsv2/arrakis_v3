package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<User, String> {
}
