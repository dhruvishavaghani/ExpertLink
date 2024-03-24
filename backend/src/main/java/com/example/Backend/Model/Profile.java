package com.example.Backend.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String firstName;

    String lastName;

    String intro;

    String workAt;

    String role;

    @OneToMany(mappedBy = "profile1")
    Set<Socialmedia_link> socialmediaLinkSet;

    @OneToOne(mappedBy = "profile")
    Users users;
}
