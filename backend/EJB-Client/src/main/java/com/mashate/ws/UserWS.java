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

import com.mashate.domain.User;
import com.mashate.service.UserServiceLocal;

@Path("/users")
@ApplicationPath("APIv1.0")
public class UserWS extends Application{
	@Inject
	UserServiceLocal service;
	
// good
	@GET
	@Path("/{login}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUser(@PathParam(value="login" )String login){
		User p=service.getUserByid(login);
		
		return Response.ok(p).build();
		
	}
//	good
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllUser() {
		List<User> u=service.getAllUser();
		return Response.ok(u).build();
	}
	
//	good
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addUser(User user) {
		
		User a = service.addUser(user.getLogin(), user.getPassword(), user.getRole());
		return Response.ok(a).build();
	}
	
//	good
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateUser(User u) {
		User a =service.UpdateUser(u.getLogin(), u.getPassword(), u.getRole(), u.getCon());
		return Response.ok(a).build();
	}
	
	
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	public Response DeleteUser(String login) {
		
		User a =service.deleteUser(login);
		return Response.ok(a).header("Access-Control-Allow-Origin", "*").build();
		
		
	}
	
	

}
