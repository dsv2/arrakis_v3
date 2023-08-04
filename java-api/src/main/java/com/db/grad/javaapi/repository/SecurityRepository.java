package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Security;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface SecurityRepository extends JpaRepository<Security, Integer> {
    List<Security> findAllWithDateAfter(@Param("fiveDaysAgoDate") Date fiveDaysAgoDate);

}
