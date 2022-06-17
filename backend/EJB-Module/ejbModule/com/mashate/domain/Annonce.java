package com.mashate.domain;

import java.io.Serializable;

import java.lang.String;
import java.sql.Date;
import java.sql.Time;

import javax.persistence.*;

import org.jboss.resteasy.annotations.providers.jaxb.Formatted;

/**
 * Entity implementation class for Entity: Annonce
 *
 */
@Entity(name="annonce")
@Table(name="annonces")
public class Annonce implements Serializable {

	   
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_annonces;
	
	@Column(name="ville_depart")
	private String Ville_depart;
	
	@Column(name="ville_arrivee")
	private String Ville_arrivee;
	
	@Column(name="Date_depart")
	private Date Date_depart;
	
	@Column(name="time")
	private Time time;
	
	@Column(name="nombre_places")
	private int nombre_places;
	
	@Column(name="Prix")
	private double prix;
	
	

	@Column(name = "id", nullable = false)
    private int con;
	
	


	public int getCon() {
		return con;
	}

	public void setCon(int con) {
		this.con = con;
	}

	private static final long serialVersionUID = 1L;

	public Annonce() {
		super();
	}   
	
	public String getVille_arrivee() {
		return Ville_arrivee;
	}
	public void setVille_arrivee(String ville_arrivee) {
		Ville_arrivee = ville_arrivee;
	}
	public double getPrix() {
		return prix;
	}
	public void setPrix(double prix) {
		this.prix = prix;
	}
	
	public int getId_annonces() {
		return this.id_annonces;
	}

	public void setId_annonces(int id_annonces) {
		this.id_annonces = id_annonces;
	}   
	public String getVille_depart() {
		return this.Ville_depart;
	}

	public void setVille_depart(String Ville_depart) {
		this.Ville_depart = Ville_depart;
	}   
  
	public Date getDate_depart() {
		return this.Date_depart;
	}

	public void setDate_depart(Date Date_depart) {
		this.Date_depart = Date_depart;
	}   
   
	public int getNombre_places() {
		return this.nombre_places;
	}

	public void setNombre_places(int nombre_places) {
		this.nombre_places = nombre_places;
	}

	public Time getTime() {
		return time;
	}

	public void setTime(Time time) {
		this.time = time;
	}   
	
}
