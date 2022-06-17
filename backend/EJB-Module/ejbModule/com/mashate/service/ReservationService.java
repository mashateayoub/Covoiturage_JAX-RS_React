package com.mashate.service;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;

import com.mashate.DAO.AnnonceManager;
import com.mashate.DAO.ReservationManager;
import com.mashate.domain.Reservation;

/**
 * Session Bean implementation class ReservationService
 */
@Stateless(mappedName = "AS")
public class ReservationService implements ReservationServiceRemote, ReservationServiceLocal {

    /**
     * Default constructor. 
     */
	@Inject
    ReservationManager manager;
    public ReservationService() {
        // TODO Auto-generated constructor stub
    }
	@Override
	public Reservation getReservationById(int id) {
		return manager.getReservationById(id);
	}
	@Override
	public List<Reservation> getAllReservation() {
		return manager.getAllReservation();
	}
	@Override
	public void deleteReservation(int id) {
		manager.deleteReservation(id);;
	}
	@Override
	public void addReservation(Reservation A) {
		// TODO Auto-generated method stub
		manager.addReservation(A);
	}
	@Override
	public void UpdateReservation(Reservation A) {
		// TODO Auto-generated method stub
		manager.UpdateReservation(A);
	}
	@Override
	public Reservation getReservationByString(String resId) {
		// TODO Auto-generated method stub
		return manager.getReservationByString(resId);
	}

}
