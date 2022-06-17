package com.mashate.DAO;

import java.util.List;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.mashate.domain.Besoin_client;



public class Besoin_ClientManager {
	
	@PersistenceContext(unitName = "EJB-Module")
	 EntityManager em;
	 public void addBesoin_client(Besoin_client b) {
			em.persist(b);
		}
		public Besoin_client getBesoin_clientById(int id) {
			Besoin_client a = em.find(Besoin_client.class,id);
			return a;
		}
		public List<Besoin_client> getAllBesoin_client() {
			Query Query = em.createQuery("SELECT a FROM besoin_client AS a");
			List<Besoin_client> liste = Query.getResultList();
			return liste;
		}
		public void UpdateBesoin_client(Besoin_client b) {
			Besoin_client b1  = em.find(Besoin_client.class,b.getId_annonce());
			b1.setDate_depart(b.getDate_depart());
	        b1.setNbr_places(b.getNbr_places());
	        b1.setVille_arrivee(b.getVille_arrivee());
	        b1.setVille_depart(b.getVille_depart());
			
			em.merge(b1);
		}
		public void deleteBesoin_client(int id) {
			em.remove(getBesoin_clientById(id));
		}
	
}
