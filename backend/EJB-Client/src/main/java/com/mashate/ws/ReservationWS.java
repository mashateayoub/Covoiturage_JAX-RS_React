
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

import com.mashate.domain.Reservation;
import com.mashate.service.ReservationServiceLocal;

@Path("/reservations")
@ApplicationPath("APIv1.0")
public class ReservationWS extends Application {
	
	@Inject
	ReservationServiceLocal service;
	
	//htpp://localhost:8080/Web-service/APIv1.0/Reservations
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getReservationbyid(@PathParam(value="id" )int id){
		Reservation p=service.getReservationById(id);
		
		return Response.ok(p).header("Access-Control-Allow-Origin", "*").build();
		
	}
	
	@GET
	@Path("?resId={id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getReservationbyResId(@PathParam(value="id" )String ResId){
		Reservation p=service.getReservationByString(ResId);
		return Response.ok(p).header("Access-Control-Allow-Origin", "*").build();
		
	}
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllReservation() {
		List<Reservation> u=service.getAllReservation();
		return Response.ok(u).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addReservation(Reservation A) {
		service.addReservation(A);
		return Response.ok(A.getResId()).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON) 
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateAnnoce(Reservation A) {
		service.UpdateReservation(A);
		
		return Response.ok("reservation updated !").header("Access-Control-Allow-Origin", "*").build();
	}
	
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response DeleteReservation(@PathParam(value="id" ) int id) {
		service.deleteReservation(id);
		return Response.ok("Reservation deleted !").header("Access-Control-Allow-Origin", "*").build();
		
		
	}
	

}
