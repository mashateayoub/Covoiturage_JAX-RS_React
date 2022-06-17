package com.mashate.service;

import java.util.List;

import javax.ejb.Local;

import com.mashate.domain.Reservation;

@Local
public interface ReservationServiceLocal {
	public Reservation getReservationById(int id);
    public List<Reservation> getAllReservation();
    public void deleteReservation(int id);
	public void addReservation(Reservation A);
	public void UpdateReservation(Reservation A);
	public Reservation getReservationByString(String resId);

}
