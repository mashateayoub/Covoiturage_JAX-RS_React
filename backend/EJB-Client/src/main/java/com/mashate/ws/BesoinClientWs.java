package com.mashate.ws;

import java.util.Date;


import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.ApplicationPath;
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

import com.mashate.domain.Besoin_client;
import com.mashate.service.Besoin_clientServiceLocal;

@Path("/Besoinclients")
@ApplicationPath("APIv1.0")
public class BesoinClientWs  extends Application{
	@Inject
	Besoin_clientServiceLocal service;
	
	//htpp://localhost:8080/Web-service/APIv1.0/users
	@POST
	@Path("/{login}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getBesoinclient(@PathParam(value="login" )int id){
		Besoin_client p=service.getBesoin_clientById(id);
		
		return Response.ok(p).header("Access-Control-Allow-Origin", "*").build();
		
	}
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllBesoin() {
		List<Besoin_client> u=service.getAllBesoin_client();
		return Response.ok(u).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response addBesoin_client(String Ville_depart, String Ville_arrivee, Date Date_depart, int nombre_places) {
		
		Besoin_client a = service.addBesoin_client(Ville_depart, Ville_arrivee, Date_depart, nombre_places);
		return Response.ok(a).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateBesoin(int id, String Ville_depart, String Ville_arrivee,Date Date_depart,
			int nombre_places) {
		
		Besoin_client a =service.UpdateBesoin_client(id, Ville_depart, Ville_arrivee, Date_depart, nombre_places);
		
		return Response.ok(a).header("Access-Control-Allow-Origin", "*").build();
	}
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	public Response  deleteBesoin_client(int id) {
		
		Besoin_client a =service.deleteBesoin_client(id);
		return Response.ok(a).header("Access-Control-Allow-Origin", "*").build();
		
		
	}
	

}
