package com.grupo11.demo.security.model;

public class AuthenticationResponse {

    // ATTRIBUTES
    private final String jwt;

    // CONSTRUCTORS
    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }

    // GETTERS
    public String getJwt() {
        return jwt;
    }
}

