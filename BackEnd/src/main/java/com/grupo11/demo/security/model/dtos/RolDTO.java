package com.grupo11.demo.security.model.dtos;

import java.util.HashSet;
import java.util.Set;

public class RolDTO {

    private Integer id_roles;
    private String nombre;
    private Set<UsuarioDTO> usuarios = new HashSet<>();

    public RolDTO() {
    }

    public Integer getId_roles() {
        return id_roles;
    }

    public void setId_roles(Integer id_roles) {
        this.id_roles = id_roles;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
