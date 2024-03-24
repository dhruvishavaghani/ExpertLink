package com.example.Backend.Response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProfileResponse {

    Long uid;

    String firstName;

    String lastName;

    String intro;

    String workAt;

    String role;
}
