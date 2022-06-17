package com.mashate.service;

import java.util.List;

import javax.ejb.Local;

import com.mashate.domain.User;

@Local
public interface UserServiceLocal {
	  public User getUserByid(String Login);
      public List<User> getAllUser();
      public User addUser (String Login ,String password, String Role);
      public User deleteUser(String id);
      public User UpdateUser(String Login, String password, String Role, int id);
}
