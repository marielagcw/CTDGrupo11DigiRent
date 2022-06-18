package com.grupo11.demo.security.Entities;

import javax.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_usuarios;
    @Column(name="nombre_usuario")
    private String nombre;
    @Column(name="apellido_usuario")
    private String apellido;
    @Column(name="email_usuario")
    private String email;
    @Column(name="contrasena_usuario")
    private String password;
    @Column(name="ciudad_usuario")
    private String ciudad;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "roles_id_roles", referencedColumnName = "roles_id_roles")
    private Rol roles;

    public Integer getId_usuarios() {
        return id_usuarios;
    }

    public void setId_usuarios(Integer id_usuarios) {
        this.id_usuarios = id_usuarios;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public Rol getRol() {
        return roles;
    }

    public void setRol(Rol roles) {
        this.roles = roles;
    }
}