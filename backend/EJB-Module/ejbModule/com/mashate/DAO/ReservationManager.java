package com.mashate.DAO;

import java.util.List;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.mashate.domain.Reservation;

public class ReservationManager {

 @PersistenceContext(unitName = "EJB-Module")
 EntityManager em;
 public void addReservation(Reservation a) {
		em.persist(a);
	}
	public Reservation getReservationById(int id) {
		Reservation a = em.find(Reservation.class,id);
		return a;
	}
	
	public Reservation getReservationByString(String resId) {
		Query Query = em.createQuery("SELECT a FROM Reservation AS a WHERE resId='"+resId+"'");
		Reservation c1 = (Reservation) Query.getSingleResult();
		return c1;
	}
	public List<Reservation> getAllReservation() {
		Query Query = em.createQuery("SELECT a FROM Reservation AS a");
		List<Reservation> liste = Query.getResultList();
		return liste;
	}
	public void UpdateReservation(Reservation a) {
		Reservation a1  = em.find(Reservation.class,a.getId());
		a1.setId(a.getId());
		a1.setId_annonces(a.getId_annonces());
		a1.setResId(a.getResId());
		a1.setUserlogin(a.getUserlogin());
		a1.setConfirmed(a.isConfirmed());
		
		em.merge(a1);
	}
	public void deleteReservation(int id) {
		em.remove(getReservationById(id));
	}
}
