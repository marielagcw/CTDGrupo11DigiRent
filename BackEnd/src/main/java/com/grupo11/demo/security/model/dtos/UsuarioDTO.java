package com.grupo11.demo.security.model.dtos;

import com.grupo11.demo.security.model.Rol;

public class UsuarioDTO {

    private Integer id_usuarios;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private String ciudad;
    private RolDTO roles;

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

    public RolDTO getRoles() {
        return roles;
    }

    public void setRoles(RolDTO roles) {
        this.roles = roles;
    }

}
