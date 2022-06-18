package com.grupo11.demo.security.model.dtos;

public class RolDTO {

    private String id_roles;
    private String nombre;

    public RolDTO() {
    }

    public String getId_roles() {
        return id_roles;
    }

    public void setId_roles(String id_roles) {
        this.id_roles = id_roles;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
