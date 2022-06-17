package com.mashate.service;

import java.util.Date;
import java.util.List;
import javax.ejb.Local;
import com.mashate.domain.Besoin_client;

@Local
public interface Besoin_clientServiceLocal {

	public Besoin_client getBesoin_clientById(int id);
    public List<Besoin_client> getAllBesoin_client();
    public Besoin_client deleteBesoin_client(int id);
	public Besoin_client addBesoin_client(String Ville_depart, String Ville_arrivee, Date Date_depart, int nombre_places);
	public Besoin_client UpdateBesoin_client(int id, String Ville_depart, String Ville_arrivee,Date Date_depart,
			int nombre_places);
}
