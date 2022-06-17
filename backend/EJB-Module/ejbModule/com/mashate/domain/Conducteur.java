package com.mashate.domain;

import java.io.Serializable;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Conducteur
 *
 */


@Entity(name="conducteur")
@Table(name="conducteurs")
public class Conducteur implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_conducteur")
	private int id;
	
	@Column(name = "nom", length = 30, nullable = false)
	private String Nom;
	@Column(name = "Prenom", length = 30, nullable = false)
	private String Prenom;
	@Column(name = "adresse", length = 200, nullable = false)
	private String Adresse;
	@Column(name = "Tel", length = 30, nullable = false)
	private String Tel;
	@Column(name = "Email", length = 40, nullable = false)
	private String Email;
	@Column(name = "sexe", length = 10, nullable = false)
	private String Sexe;
	@Column(name = "age", nullable = false)
	private int age;
	@Column(name = "immatriculation", length = 30, nullable = false)
	private String immatriculation;
	
	@Column(name = "marque", length = 15, nullable = false)
	private String marque;
	
	@Column(name = "nbr_places", nullable = false)
	private int Nombre_places;
	
	@Column(name = "userlogin",unique = true, nullable = false)
	private String userlogin;
	
	private static final long serialVersionUID = 1L;

	public Conducteur() {
		super();
	}   

	
	public String getUserlogin() {
		return userlogin;
	}


	public void setUserlogin(String userlogin) {
		this.userlogin = userlogin;
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
	public String getAdresse() {
		return this.Adresse;
	}

	public void setAdresse(String Adresse) {
		this.Adresse = Adresse;
	}   
	public String getTel() {
		return this.Tel;
	}

	public void setTel(String Tel) {
		this.Tel = Tel;
	}   
	public String getEmail() {
		return this.Email;
	}

	public void setEmail(String Email) {
		this.Email = Email;
	}   
	public String getSexe() {
		return this.Sexe;
	}

	public void setSexe(String Sexe) {
		this.Sexe = Sexe;
	}   
	public int getAge() {
		return this.age;
	}

	public void setAge(int age) {
		this.age = age;
	}   
	public String getImmatriculation() {
		return this.immatriculation;
	}

	public void setImmatriculation(String immatriculation) {
		this.immatriculation = immatriculation;
	}   
	public String getMarque() {
		return this.marque;
	}

	public void setMarque(String marque) {
		this.marque = marque;
	}   
	public int getNombre_places() {
		return this.Nombre_places;
	}

	public void setNombre_places(int Nombre_places) {
		this.Nombre_places = Nombre_places;
	}
   
}
