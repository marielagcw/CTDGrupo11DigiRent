package com.grupo11.demo.model.dtos;

//import com.grupo11.demo.model.Producto;

import com.grupo11.demo.model.Producto;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ImagenDTO {

    private Integer id_imagen;
    private String titulo;
    private String url;
    private Producto producto; // TODO Modificado, antes había un set, pero la relación imagen producto es muchas a una, por lo tanto cada imagen tiene un solo producto.

    public void setId_imagen(Integer id_imagen) {
        this.id_imagen = id_imagen;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setProductos(Producto producto) {
        this.producto = producto;
    }
}
