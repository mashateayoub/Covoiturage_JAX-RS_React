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
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import java.sql.Time;
import java.util.Date;

import com.mashate.domain.Annonce;
import com.mashate.service.AnnonceServiceLocal;

@Path("/annonces")
@ApplicationPath("APIv1.0")
public class AnnonceWS extends Application {
	
	@Inject
	AnnonceServiceLocal service;
	
	//htpp://localhost:8080/Web-service/APIv1.0/annonces
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAnnoncebyid(@PathParam(value="id" )int id){
		Annonce p=service.getAnnonceById(id);
		
		return Response.ok(p).header("Access-Control-Allow-Origin", "*").build();
		
	}
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllAnnonce() {
		List<Annonce> u=service.getAllAnnonce();
		return Response.ok(u).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addAnnonce(Annonce A, @QueryParam("mili") double mili) {
		Time t= new Time((long) mili);
		A.setTime(t);
		Annonce a = service.addAnnonce(A);
		return Response.ok(a).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON) 
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateAnnoce(Annonce A, @QueryParam("mili") double mili) {
		A.setTime(new Time((long) mili));
		Annonce a = service.UpdateAnnonce(A);
		
		return Response.ok(a).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response DeleteAnnonce(@PathParam(value="id" ) int id) {
		
		Annonce a=service.deleteAnnonce(id);
		return Response.ok(a).header("Access-Control-Allow-Origin", "*").build();
		
		
	}
	

}
