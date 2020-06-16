package com.heliton.controller;

// Java //
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;

// Token //
import com.heliton.config.TokenWebService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class HomeController {

	// Ambientes Configurados (arquivo propriedade) //
    @Value("${spring.ambiente.desenvolvimento.url}")
	private String URL_SPRING; 
	@Value("${angular.ambiente.desenvolvimento.url}")
	private String URL_ANGULAR; 
    
    // Set status Token e Redireciona Home Angular //
    @GetMapping("/home")
    String index() {
        TokenWebService.setStatus(true);
        return URL_ANGULAR;
    }

    // Set status Token e Envia Model Spring URL //
    @GetMapping("/login")
    public String login(Model model) {
        TokenWebService.setStatus(false);
        String act = URL_SPRING;
        model.addAttribute("urlSpring", act);
        return "login";
    }

    @GetMapping("/logout")
    public String logout() {
        return "redirect:/login?logout";
    }
}