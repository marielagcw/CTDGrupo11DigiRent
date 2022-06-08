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
    private Producto producto;

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
