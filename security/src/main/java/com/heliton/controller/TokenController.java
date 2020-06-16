package com.heliton.controller;

// Java //
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

// Token //
import com.heliton.config.TokenWebService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping({ "/api" })
public class TokenController {

    @GetMapping(produces = "application/json")
    @RequestMapping({"/TokenAutoriza"})
    public boolean getTokenAutoriza(HttpServletResponse response) {

        // Setado somente no (HomeController) //
        if (TokenWebService.getStatus() == false) {
            return false;
        }

        // Usuario padrão Secutiry //
        String usrLogado = TokenWebService.getUsuarioSecurity();

        // Grava Token //
        TokenWebService.addAuthentication(response, usrLogado);

        // Ler Token //
        Authentication token;
        token = TokenWebService.getAuthentication(response);

        if (token == null) {
            return false;
        }

        return true;
    }
}