package com.example.Backend.Request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceRequest {

    Long id;

    String title;

    String description;

    String type;

    String duration;

    int amount;

    Long userId;
}
