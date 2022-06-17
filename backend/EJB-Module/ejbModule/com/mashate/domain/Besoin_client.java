package com.mashate.domain;



import java.io.Serializable;
import java.lang.String;
import java.sql.Date;

import javax.persistence.*;

/**
 * Entity implementation class for Entity: Besoin_client
 *
 */
@Entity(name="besoin_client")
@Table(name="besoins_clients")
public class Besoin_client implements Serializable {

	   
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_annonce")
	private int id_annonce;
	@Column(name="ville_depart" ,length=30 ,nullable = false)
	private String Ville_depart;
	@Column(name="ville_arrive" ,length=30 ,nullable = false)
	private String Ville_arrivee;
	@Column(name="date_depart" ,length=30 ,nullable = false)
	private Date date_depart;
	@Column(name="Nbr_places" ,length=30 ,nullable = false)
	private int nbr_places;
	private static final long serialVersionUID = 1L;

	public Besoin_client() {
		super();
	}   
	public int getId_annonce() {
		return this.id_annonce;
	}

	public void setId_annonce(int id_annonce) {
		this.id_annonce = id_annonce;
	}   
	public String getVille_depart() {
		return this.Ville_depart;
	}

	public void setVille_depart(String Ville_depart) {
		this.Ville_depart = Ville_depart;
	}   
	public String getVille_arrivee() {
		return this.Ville_arrivee;
	}

	public void setVille_arrivee(String Ville_arrivee) {
		this.Ville_arrivee = Ville_arrivee;
	}   
	public Date getDate_depart() {
		return this.date_depart;
	}

	public void setDate_depart(Date date_depart) {
		this.date_depart = date_depart;
	}   
	public int getNbr_places() {
		return this.nbr_places;
	}

	public void setNbr_places(int nbr_places) {
		this.nbr_places = nbr_places;
	}
   
}
