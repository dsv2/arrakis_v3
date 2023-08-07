package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Security;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface SecurityRepository extends JpaRepository<Security, Integer> {
    @Query(nativeQuery = true, value = "select * from security where maturity_date <= :selectedDate and maturity_date >= :fiveDaysBeforeDate")
    List<Security> findAllWithDateBefore(@Param("selectedDate") Date selectedDate, @Param("fiveDaysBeforeDate") LocalDate fiveDaysBeforeDate);

    @Query(nativeQuery = true, value = "select * from security where maturity_date <= :fiveDaysAfterDate and maturity_date > :selectedDate")
    List<Security> findAllWithDateAfter(@Param("selectedDate") Date selectedDate, @Param("fiveDaysAfterDate") LocalDate fiveDaysAfterDate);

    @Query(nativeQuery = true, value = "select * from security where maturity_date <= :fiveDaysAfterDate and maturity_date >= :fiveDaysBeforeDate")
    List<Security> findAllWithDateBeforeAndAfter(@Param("fiveDaysBeforeDate") LocalDate fiveDaysBeforeDate, @Param("fiveDaysAfterDate") LocalDate fiveDaysAfterDate);

}
