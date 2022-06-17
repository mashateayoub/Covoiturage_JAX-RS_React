package com.mashate.service;

import java.sql.Date;



import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.mashate.DAO.AnnonceManager;
import com.mashate.domain.Annonce;

/**
 * Session Bean implementation class AnnonceService
 */
@Stateless(mappedName = "AS")
public class AnnonceService implements AnnonceServiceRemote, AnnonceServiceLocal {

    /**
     * Default constructor. 
     */
    @Inject
    AnnonceManager manager;
    public AnnonceService() {
        // TODO Auto-generated constructor stub
    
    }

	@Override
	public Annonce getAnnonceById(int id) {
		// TODO Auto-generated method stub
		return manager.getAnnonceById(id);
	}

	@Override
	public List<Annonce> getAllAnnonce() {
		// TODO Auto-generated method stub
		return manager.getAllAnnonce();
	}


	@Override
	public Annonce deleteAnnonce(int id) {
		Annonce  a = manager.getAnnonceById(id);
		manager.deleteAnnonce(id);
		return a;
		
	}

	@Override
	public Annonce addAnnonce(Annonce A) {
		// TODO Auto-generated method stub
		Annonce a = new Annonce();
		a=A;
		manager.addAnnonce(a);
		return a;
		
	}

	@Override
	public Annonce UpdateAnnonce(Annonce A) {
		// TODO Auto-generated method stub
		Annonce a = new Annonce();
		a=A;
		manager.UpdateAnnonce(A);
		return a;
	}

}
