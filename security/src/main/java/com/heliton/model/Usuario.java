package com.heliton.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.MappedSuperclass;
import java.io.Serializable;

//@MappedSuperclass
//class BaseEntity {
//    @Id
//    private String id;
    //getters and setters.
//}

@Entity
@Table(name="usuario")
public class Usuario implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos //	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id")
	private long id;

	@Column(name = "nome")
	private String nome;

	@Column(name = "login")
	private String login;

	@Column(name = "senha")
	private String senha;

	// Metodos //
	public long getId() {
		return this.id;
	}
	public void setId(long id) {
		this.id = id;
	}
	//
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	//
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	//
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
}