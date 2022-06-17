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
import com.mashate.domain.Client;
import com.mashate.domain.User;
import com.mashate.service.ClientServiceLocal;
import com.mashate.service.UserServiceLocal;


@Path("/clients")
@ApplicationPath("APIv1.0")
public class ClientWS extends Application{
	@Inject
	ClientServiceLocal service;
	
	@Inject
	UserServiceLocal usersev;
	
	//htpp://localhost:8080/Web-service/APIv1.0/clients
//	good
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getclient(@PathParam(value="id" )int id){
		Client p=service.getClientById(id);
		
		return Response.ok(p).build();
		
	}
//	good
	@GET
	@Path("/login={login}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getclientByLogin(@PathParam(value="login" )String login){
		Client p=service.getClientByLogin(login);
		
		return Response.ok(p).build();
		
	}
//	good
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllUser() {
		List<Client> u=service.getAllClient();
		return Response.ok(u).build();
	}
	
//	good
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addClient(Client client){
		Client a = service.addClient(client);
		return Response.ok(a).build();
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Response UpdateClient(int id,String Nom ,String Prenom , String Email, int Age ,String Tel) {
		Client a =service.UpdateClient(id, Nom, Prenom, Email, Age, Tel);
		return Response.ok(a).header("Access-Control-Allow-Origin", "*").build();
	}
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteClient(int id) {
		
		Client a =service.deleteClient(id);
		return Response.ok(a).header("Access-Control-Allow-Origin", "*").build();
		
		
	}

}
