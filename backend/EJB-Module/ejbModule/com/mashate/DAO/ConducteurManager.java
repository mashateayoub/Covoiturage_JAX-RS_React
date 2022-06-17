package com.mashate.DAO;

import java.util.List;
import org.hibernate.*;
import javax.enterprise.inject.Produces;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.mashate.domain.Conducteur;
import com.mashate.domain.User;

public class ConducteurManager {
	@Produces
	@PersistenceContext(unitName="EJB-Module")
	EntityManager em;
		
	public void addConducteur(Conducteur c1) {
		em.persist(c1);
		
	}
	public Conducteur getConducteurById(int id) {
		Conducteur c1 = em.find(Conducteur.class,id);
		return c1;
	}
	public List<Conducteur> getAllConducteur() {
		Query Query = em.createQuery("SELECT a FROM conducteur AS a");
		List<Conducteur> liste = Query.getResultList();
		return liste;
	}
	public void UpdateConducteur(Conducteur c) {
		Conducteur c1 = em.find(Conducteur.class,c.getId());
		c1.setNom(c.getNom());
		c1.setPrenom(c.getPrenom());
		c1.setEmail(c.getEmail());
		c1.setAdresse(c.getAdresse());
		c1.setAge(c.getAge());
		c1.setTel(c.getTel());
		c1.setImmatriculation(c.getImmatriculation());
		c1.setSexe(c.getSexe());
		c1.setNombre_places(c.getNombre_places());
		c1.setMarque(c.getMarque());
		em.merge(c1);
	}
	public void deleteConducteur(int id) {
		em.remove(getConducteurById(id));
	}
}
