package com.mashate.DAO;

import java.util.List;

import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.enterprise.inject.Produces;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.mashate.domain.User;

public class UserManager {
	
	@Produces
	@PersistenceContext(unitName="EJB-Module")
	EntityManager em;
	
	public void addUser(User u1) {
		em.persist(u1);
	}
	public User getUserById(String login) {
		User c1 = em.find(User.class,login);
		return c1;
	}
	public List<User> getAllUser() {
		Query Query = em.createQuery("SELECT a FROM user as a");
		List<User> liste = Query.getResultList();
		return liste;
	}
	public void UpdateUser(String login, String password, String role, int id) {
		User u = em.find(User.class,login);
		u.setLogin(login);
		u.setPassword(password);
		u.setRole(role);
		u.setCon(id);
		em.merge(u);
	}
	public void deleteUser(String id) {
		em.remove(getUserById(id));
	}
	}
