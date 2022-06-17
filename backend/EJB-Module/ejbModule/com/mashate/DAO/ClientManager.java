package com.mashate.DAO;

import java.util.ArrayList;
import java.util.List;

import javax.enterprise.inject.Produces;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.mashate.domain.Client;

public class ClientManager {
	@Produces
	@PersistenceContext(unitName="EJB-Module")
	EntityManager em;
		
	public void addClient(Client c1) {
		em.persist(c1.getUser());
		em.persist(c1);
	}
	public Client getClientById(int id) {
		Client c1 = em.find(Client.class,id);
		return c1;
	}
	public Client getClientByLogin(String login) {
		Query Query = em.createQuery("SELECT a FROM client AS a WHERE login='"+login+"'");
		Client c1 = (Client) Query.getSingleResult();
		return c1;
	}
	public List<Client> getAllClient() {
		Query Query = em.createQuery("SELECT a FROM client AS a");
		List<Client> liste = Query.getResultList();
		return liste;
	}
	public void UpdateClient(Client c) {
		Client c1 = em.find(Client.class,c.getId());
		c1.setNom(c.getNom());
		c1.setPrenom(c.getPrenom());
		c1.setEmail(c.getEmail());
		c1.setAge(c.getAge());
		c1.setTel(c.getTel());
		em.merge(c1);
	}
	public void deleteClient(int id) {
		em.remove(getClientById(id));
	}
	}
