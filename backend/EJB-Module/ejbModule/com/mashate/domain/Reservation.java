package com.mashate.domain;

import java.io.Serializable;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Rservation
 *
 */
@Entity(name="Reservation")
@Table(name="reservations")

public class Reservation implements Serializable {

	   
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="resId", unique = true, nullable = false)
	private String resId;
	
	@Column(name="confirmed",  nullable = false)
	private boolean	confirmed;
	


	@Column(name = "userlogin", nullable = false)
	private String userlogin;
	
	@Column(name = "id_annonce",nullable = false)
	private int id_annonces;
	
	private static final long serialVersionUID = 1L;

	public Reservation() {
		super();
	}   
	public String getResId() {
		return resId;
	}
	public void setResId(String resId) {
		this.resId = resId;
	}
	public String getUserlogin() {
		return userlogin;
	}
	public void setUserlogin(String userlogin) {
		this.userlogin = userlogin;
	}
	public int getId_annonces() {
		return id_annonces;
	}
	public void setId_annonces(int id_annonces) {
		this.id_annonces = id_annonces;
	}
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}
	public boolean isConfirmed() {
		return confirmed;
	}
	public void setConfirmed(boolean confirmed) {
		this.confirmed = confirmed;
	}
	
   
}
