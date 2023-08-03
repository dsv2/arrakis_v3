package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http:localhost:3000")
public class SecurityController {

    @Autowired
    SecurityService securityService;

    @GetMapping("/securities")
    public List<Security> getAllSecurities() {
        return securityService.getAllSecurityBonds();
    }
}
