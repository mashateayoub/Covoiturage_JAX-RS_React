package com.mashate.service;

import java.util.Date;
import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.mashate.DAO.Besoin_ClientManager;
import com.mashate.domain.Besoin_client;

/**
 * Session Bean implementation class Besoin_clientService
 */
@Stateless(mappedName = "BcS")
public class Besoin_clientService implements Besoin_clientServiceRemote, Besoin_clientServiceLocal {

    /**
     * Default constructor. 
     */
    public Besoin_clientService() {
        // TODO Auto-generated constructor stub
    }
    @Inject
    Besoin_ClientManager manager;
	@Override
	public Besoin_client getBesoin_clientById(int id) {
		// TODO Auto-generated method stub
		return manager.getBesoin_clientById(id);
	}

	@Override
	public List<Besoin_client> getAllBesoin_client() {
		// TODO Auto-generated method stub
		return manager.getAllBesoin_client();
	}

	@Override
	public Besoin_client addBesoin_client(String Ville_depart, String Ville_arrivee, Date Date_depart, int nombre_places) {
		Besoin_client bc = new Besoin_client();
		bc.setDate_depart((java.sql.Date)Date_depart);
		bc.setNbr_places(nombre_places);
		bc.setVille_arrivee(Ville_arrivee);
		bc.setVille_depart(Ville_depart);
		
		manager.addBesoin_client(bc);
		return bc;
		
	}

	@Override
	public Besoin_client UpdateBesoin_client(int id, String Ville_depart, String Ville_arrivee, Date Date_depart,
			int nombre_places) {
		// TODO Auto-generated method stub
		Besoin_client bc = new Besoin_client();
		bc.setDate_depart((java.sql.Date)Date_depart);
		bc.setNbr_places(nombre_places);
		bc.setVille_arrivee(Ville_arrivee);
		bc.setVille_depart(Ville_depart);
		bc.setId_annonce(nombre_places);
		manager.addBesoin_client(bc);
		return bc;
		

		
	}

	@Override
	public Besoin_client deleteBesoin_client(int id) {
		Besoin_client bc=manager.getBesoin_clientById(id);
		manager.deleteBesoin_client(id);
		return bc;
		
	}

}
