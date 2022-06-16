package com.grupo11.demo.repository;

import com.grupo11.demo.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductoRepository  extends JpaRepository<Producto, Integer> {

    // Orden de la consulta: Clase que queremos obtener (Ej. clase Producto)  propiedad de esa clase por la cual queremos relacionar las tablas  (Ej. private Ciudad ciudades) y con notación de punto accedemos a la propiedad de esa clase por la cual queremos buscar (Ej. id_ciudad que es el nombre del id de la clase Ciudad)
    // Para relacionar el parámetro con lo que buscamos en la query usamos 2 puntos :id para buscar el id
    @Query("FROM Producto p WHERE p.ciudades.id_ciudad = :id ")
    List<Producto> findAllByCiudades(Integer id);

    @Query("FROM Producto p WHERE p.categorias.id_categoria = :id ")
    List<Producto> findAllByCategorias(Integer id);

}
