package com.example.Backend.Repository;

import com.example.Backend.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepo extends JpaRepository<Users,Long> {

    @Query("select u from Users u where u.email = ?1")
    Users findUsersByEmail(@Param("email")String email);
}
