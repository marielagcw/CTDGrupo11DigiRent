package com.grupo11.demo.security.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "roles")
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_roles;
    @Column(name="nombre_roles")
    private String nombre;

    @OneToMany(mappedBy = "roles")
    @JsonManagedReference
    private Set<Usuario> usuarios = new HashSet<>();

    public Integer getRoles_id_roles() {
        return id_roles;
    }

    public void setRoles_id_roles(Integer id_roles) {
        this.id_roles = id_roles;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}