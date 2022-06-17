package com.mashate.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.mashate.DAO.ConducteurManager;
import com.mashate.domain.Conducteur;

/**
 * Session Bean implementation class ConducteurService
 */
@Stateless(mappedName = "CS")
public class ConducteurService implements ConducteurServiceRemote, ConducteurServiceLocal {

    /**
     * Default constructor. 
     */
	@Inject
	ConducteurManager manager;
	
    public ConducteurService() {
        // TODO Auto-generated constructor stub
    }

	@Override
	public Conducteur getConducteurById(int id) {
		// TODO Auto-generated method stub
		return manager.getConducteurById(id);
	}

	@Override
	public List<Conducteur> getAllConducteur() {
		// TODO Auto-generated method stub
		return manager.getAllConducteur();
	}

	@Override
	public Conducteur addConducteur(Conducteur con) {
		manager.addConducteur(con);
		return con;
		
	}

	@Override
	public Conducteur UpdateConducteur(int id, String Nom, String Prenom, String adresse, String Email, int Age, String Tel,
			String sexe, String immatriculation, String marqueVoiture, int nbr_places) {
		// TODO Auto-generated method stub
		Conducteur c = new Conducteur();
		c.setId(id);
		c.setNom(Nom);
		c.setPrenom(Prenom);
		c.setAdresse(adresse);
		c.setEmail(Email);
		c.setAge(Age);
		c.setTel(Tel);
		c.setSexe(sexe);
		c.setImmatriculation(immatriculation);
		c.setMarque(marqueVoiture);
		c.setNombre_places(nbr_places);
		manager.UpdateConducteur(c);
		return c;
		
	}

	@Override
	public Conducteur deleteConducteur(int id) {
		// TODO Auto-generated method stub
		Conducteur c=manager.getConducteurById(id);
		manager.deleteConducteur(id);
		return c;
		
	}

}
