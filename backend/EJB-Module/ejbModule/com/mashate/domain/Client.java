package com.mashate.domain;



import java.io.Serializable;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Client
 *
 */
@Entity(name="client")
@Table(name="clients")
public class Client implements Serializable {

	   
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_client")
	private int id;
	@Column(name="Nom" ,length=30 ,nullable = false)
	private String Nom;
	@Column(name="Prenom" ,length=30 ,nullable = false)
	private String Prenom;
	@Column(name="Age" ,length=30 ,nullable = false)
	private int Age;
	@Column(name="Email" ,length=30 ,nullable = false)
	private String Email;
	@Column(name="Tel" ,length=30 ,nullable = false)
	private String Tel;
	
	@OneToOne
	@JoinColumn(name = "login", referencedColumnName = "login")
	private User user;
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}

	private static final long serialVersionUID = 1L;

	public Client() {
		super();
	}   
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}   
	public String getNom() {
		return this.Nom;
	}

	public void setNom(String Nom) {
		this.Nom = Nom;
	}   
	public String getPrenom() {
		return this.Prenom;
	}

	public void setPrenom(String Prenom) {
		this.Prenom = Prenom;
	}   
	public int getAge() {
		return this.Age;
	}

	public void setAge(int Age) {
		this.Age = Age;
	}   
	public String getEmail() {
		return this.Email;
	}

	public void setEmail(String Email) {
		this.Email = Email;
	}   
	public String getTel() {
		return this.Tel;
	}

	public void setTel(String Tel) {
		this.Tel = Tel;
	}
   
}
