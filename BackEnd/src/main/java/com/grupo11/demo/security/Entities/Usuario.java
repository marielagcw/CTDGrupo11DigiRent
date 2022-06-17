package com.grupo11.demo.security.Entities;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Users")
@Setter
@Getter
public class Usuario {
    @Id
    @GeneratedValue
    private Integer id_user;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private String ciudad;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_rol", referencedColumnName = "id_rol")
    private Rol rol;
}