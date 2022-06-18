package com.grupo11.demo.security.Entities;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer roles_id_roles;
    @Column(name="nombre_roles")
    private String nombre;

    @OneToOne(mappedBy = "roles")
    private Usuario usuarios;

    public Integer getRoles_id_roles() {
        return roles_id_roles;
    }

    public void setRoles_id_roles(Integer roles_id_roles) {
        this.roles_id_roles = roles_id_roles;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}