package com.heliton.controller;

// Java //
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import java.util.List;
// google - Json //
import com.google.gson.Gson;

// Token, Modelo e Servico //
import com.heliton.config.TokenWebService;
import com.heliton.service.UsuarioSer;
import com.heliton.model.Usuario;
//
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping({ "/api" })
public class UsuarioController {

    @Autowired
    private UsuarioSer userService;

    // get ALL //
    @GetMapping(produces = "application/json")
	@RequestMapping({ "/Usuario" })
    public List<Usuario> findAll() {
        // Valida Token (Setado somente no HomeController) //
        if (TokenWebService.getStatus() == false) {
            return null;
        }
        return userService.findAll();
    }

    // get Id //
    @GetMapping(produces = "application/json")
	@RequestMapping({ "/Usuario/Edit/{id}" })
    public Usuario findId(@ModelAttribute("usuario") Usuario usuario) {
        // Valida Token (Setado somente no HomeController) //
        if (TokenWebService.getStatus() == false) {
            return null;
        }
        return userService.findId(usuario.getId());
    }

    // add ou Update //
    @PostMapping(produces = "application/json")
    @RequestMapping({"/Usuario/Save/{usuario}"})
    public void save(@ModelAttribute("usuario") String usr) {
        // Valida Token (Setado somente no HomeController) //
        if (TokenWebService.getStatus() == false) {
            return;
        }        
        Gson g = new Gson();
        Usuario usuario = g.fromJson(usr, Usuario.class);
        userService.saveUser(usuario);
    }

    // delete //
    @DeleteMapping(produces = "application/json")
	@RequestMapping({ "/Usuario/Delete/{id}" })
    public void delete(@ModelAttribute("usuario") Usuario usuario) {
        // Valida Token (Setado somente no HomeController) //
        if (TokenWebService.getStatus() == false) {
            return;
        }        
        userService.deleteUser(usuario.getId());
    }
}