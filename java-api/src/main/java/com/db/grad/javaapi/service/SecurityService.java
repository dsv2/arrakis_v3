package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class SecurityService {

    @Autowired
    private SecurityRepository securityRepository;

    public List<Security> getAllSecurityBonds() {
        return securityRepository.findAll();
    }

    public List<Security> getAllWithDateBefore(Date selectedDate) {
        LocalDate inputDate = selectedDate.toLocalDate();
        LocalDate fiveDaysBeforeDate = inputDate.minusDays(5);
        return securityRepository.findAllWithDateBefore(selectedDate, fiveDaysBeforeDate);
    }

    public List<Security> getAllWithDateAfter(Date selectedDate) {
        LocalDate inputDate = selectedDate.toLocalDate();
        LocalDate fiveDaysAfterDate = inputDate.plusDays(5);
        return securityRepository.findAllWithDateAfter(selectedDate, fiveDaysAfterDate);
    }

    public List<Security> getAllWithDateBeforeAndAfter(Date selectedDate) {
        LocalDate inputDate = selectedDate.toLocalDate();
        LocalDate fiveDaysBeforeDate = inputDate.minusDays(5);
        LocalDate fiveDaysAfterDate = inputDate.plusDays(5);
        return securityRepository.findAllWithDateBeforeAndAfter(fiveDaysBeforeDate, fiveDaysAfterDate);
    }
}
