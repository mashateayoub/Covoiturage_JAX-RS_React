package com.mashate.DAO;

import java.util.List;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.mashate.domain.Annonce;
import com.mashate.domain.Conducteur;

public class AnnonceManager {
	
 @PersistenceContext(unitName = "EJB-Module")
 EntityManager em;
 
 public void addAnnonce(Annonce a) {
		em.persist(a);
	}
	public Annonce getAnnonceById(int id) {
		Annonce a = em.find(Annonce.class,id);
		return a;
	}
	public List<Annonce> getAllAnnonce() {
		Query Query = em.createQuery("SELECT a FROM annonce AS a");
		List<Annonce> liste = Query.getResultList();
		return liste;
	}
	public void UpdateAnnonce(Annonce a) {
		Annonce a1  = em.find(Annonce.class,a.getId_annonces());
		a1.setDate_depart(a.getDate_depart());
		a1.setNombre_places(a.getNombre_places());
		a1.setPrix(a.getPrix());
		a1.setVille_arrivee(a.getVille_arrivee());
		a1.setVille_depart(a.getVille_depart());
		a1.setTime(a.getTime());
		
		em.merge(a1);
	}
	public void deleteAnnonce(int id) {
		em.remove(getAnnonceById(id));
	}
}
