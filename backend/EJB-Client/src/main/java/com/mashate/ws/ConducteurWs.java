package com.mashate.ws;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.mashate.domain.Conducteur;
import com.mashate.service.ConducteurServiceLocal;


@Path("/conducteurs")
@ApplicationPath("APIv1.0")
public class ConducteurWs extends Application {
	@Inject
	ConducteurServiceLocal service;
	
	//htpp://localhost:8080/Web-service/APIv1.0/conducteurs
	
//	good
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getConducteurById(@PathParam(value="id") int id){
		Conducteur p=service.getConducteurById(id);
		
		return Response.ok(p).build();
		
	}
//	good
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllConducteur() {
		List<Conducteur> u=service.getAllConducteur();
		return Response.ok(u).build();
	}

//	good
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addConducteur (Conducteur con) {
		Conducteur a=service.addConducteur(con);
		return Response.ok(a).build();
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Response UpdateConducteur(int id,String Nom ,String Prenom , String adresse , String Email, int Age ,String Tel,String sexe,String immatriculation,String marqueVoiture,int nbr_places) {
		Conducteur a =service.UpdateConducteur(id, Nom, Prenom, adresse, Email, Age, Tel, sexe, immatriculation, marqueVoiture, nbr_places);
		
		return Response.ok(a).build();
	}
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteConducteur(int id) {
		
		Conducteur a =service.deleteConducteur(id);
		return Response.ok(a).build();
		
		
	}
	
	

}
