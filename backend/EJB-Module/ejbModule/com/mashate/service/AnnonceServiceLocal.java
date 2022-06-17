package com.mashate.service;

import java.util.Date;

import java.util.List;
import javax.ejb.Local;
import com.mashate.domain.Annonce;


@Local
public interface AnnonceServiceLocal {

	public Annonce getAnnonceById(int id);
    public List<Annonce> getAllAnnonce();
    public Annonce deleteAnnonce(int id);
	public Annonce addAnnonce(Annonce A);
	public Annonce UpdateAnnonce(Annonce A);
}
