package com.mashate.service;

import java.util.List;

import javax.ejb.Local;

import com.mashate.domain.Conducteur;

@Local
public interface ConducteurServiceLocal {
	 public Conducteur getConducteurById(int id);
     public List<Conducteur> getAllConducteur();
     public Conducteur UpdateConducteur(int id,String Nom ,String Prenom , String adresse , String Email, int Age ,String Tel,String sexe,String immatriculation,String marqueVoiture,int nbr_places);
     public Conducteur deleteConducteur(int id);
     public Conducteur addConducteur(Conducteur con);
}
