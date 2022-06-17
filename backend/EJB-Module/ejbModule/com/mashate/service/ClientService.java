package com.mashate.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ejb.*;
import com.mashate.DAO.ClientManager;
import com.mashate.domain.Client;

/**
 * Session Bean implementation class ClientService
 */
@Stateless(name = "ClientS", mappedName = "CS")
@LocalBean
public class ClientService implements ClientServiceRemote, ClientServiceLocal {

    /**
     * Default constructor. 
     */
	@Inject
	private ClientManager manager;
    public ClientService() {
    }
	@Override
	public Client addClient(Client c) {
		manager.addClient(c);
		return c;
		
	}
	
	@Override
	public Client getClientById(int id) {
		return manager.getClientById(id);
	}
	
	@Override
	public Client getClientByLogin(String login) {
		return manager.getClientByLogin(login);
	}
	
	@Override
	public List<Client> getAllClient() {
		return manager.getAllClient();
	}
	@Override
	public Client UpdateClient(int id,String Nom, String Prenom, String Email, int Age, String Tel) {

		Client c = new Client();
		c.setId(id);
		c.setNom(Nom);
		c.setPrenom(Prenom);
		c.setEmail(Email);
		c.setAge(Age);
		c.setTel(Tel);
		manager.UpdateClient(c);
		return c;
		
	}
	@Override
	public Client deleteClient(int id) {
		Client c=manager.getClientById(id);		
		manager.deleteClient(id);
		return c;
		
	}

}
