package com.grupo11.demo.security.Entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Roles")
@Setter
@Getter
public class Rol {
    @Id
    private Integer id_rol;
    private String nombre;

}