package com.mashate.domain;

import java.io.Serializable;

import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: user
 *
 */
@Entity(name="user")
@Table(name="users")
public  class User implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name="login",unique=true)
	private String login;


	@Column(name="password")
	private String password;
	@Column(name="role")
	private String role;
	
	@Column(name = "id", nullable = false)
    private int con;
	
	public User() {
		super();
	}   

	public int getCon() {
		return con;
	}

	public void setCon(int con) {
		this.con = con;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
   
	public String getRole() {
		return this.role;
	}

	public void setRole(String role) {
		this.role = role;
	}
   
}
