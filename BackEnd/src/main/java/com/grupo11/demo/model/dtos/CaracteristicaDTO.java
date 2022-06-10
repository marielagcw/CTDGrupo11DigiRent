package com.grupo11.demo.model.dtos;

import com.grupo11.demo.model.Producto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.util.HashSet;
import java.util.Set;

@Getter
@NoArgsConstructor
public class CaracteristicaDTO {
    private Integer id_caracteristica;
    private String nombre;
    private Boolean estaDiponible;
    private Set<Producto> productos = new HashSet<>();

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEstaDiponible(Boolean estaDiponible) {
        this.estaDiponible = estaDiponible;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
