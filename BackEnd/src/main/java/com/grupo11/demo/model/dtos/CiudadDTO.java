package com.grupo11.demo.model.dtos;

//import com.grupo11.demo.model.Producto;
import com.grupo11.demo.model.Producto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Getter
@NoArgsConstructor
public class CiudadDTO {

    private Integer id_ciudad;
    private String nombre;
    private String provincia;
    private String pais;
    private Set<Producto> productos = new HashSet<>();

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
