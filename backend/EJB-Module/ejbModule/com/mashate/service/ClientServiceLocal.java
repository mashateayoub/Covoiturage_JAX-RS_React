package com.mashate.service;

import java.util.List;

import javax.ejb.Local;

import com.mashate.domain.Client;

@Local
public interface ClientServiceLocal {

	  public Client getClientById(int id);
      public List<Client> getAllClient();
      public Client addClient (Client c);
      public Client UpdateClient(int id,String Nom ,String Prenom , String Email, int Age ,String Tel);
      public Client deleteClient(int id);
      public Client getClientByLogin(String login);
    
}
