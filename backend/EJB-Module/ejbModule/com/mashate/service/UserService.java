package com.mashate.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.mashate.DAO.UserManager;
import com.mashate.domain.User;

/**
 * Session Bean implementation class UserService
 */
@Stateless(mappedName = "US")
public class UserService implements UserServiceRemote, UserServiceLocal {

    /**
     * Default constructor. 
     */
	@Inject
	UserManager manager;
    public UserService() {
        // TODO Auto-generated constructor stub
    }

	@Override
	public User getUserByid(String Login) {
		// TODO Auto-generated method stub
		return manager.getUserById(Login);
	}

	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return manager.getAllUser();
	}

	@Override
	public User addUser(String Login, String password, String Role) {
		// TODO Auto-generated method stub
		User u = new User();
		u.setLogin(Login);
		u.setPassword(password);
		u.setRole(Role);
		manager.addUser(u);
		return u;
		
	}

	@Override
	public User UpdateUser(String Login, String password, String Role, int id) {
		User u = new User();
		u.setLogin(Login);
		u.setPassword(password);
		u.setRole(Role);
		u.setCon(id);
		
		manager.UpdateUser(Login, password,  Role, id);
		return u;
		
	}

	@Override
	public User deleteUser(String  Login) {
		// TODO Auto-generated method stub
		User u= manager.getUserById(Login);
		manager.deleteUser(Login);
		return u;
		
	}






}
