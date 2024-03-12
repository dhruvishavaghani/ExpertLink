package com.example.Backend.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String name;

    String email;

    String password;

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST} , fetch = FetchType.LAZY)
    Set<Services> services;
}
