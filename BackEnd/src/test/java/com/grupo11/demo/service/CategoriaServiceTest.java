package com.grupo11.demo.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.dtos.CategoriaDTO;
import com.grupo11.demo.service.implementation.CategoriaService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CategoriaServiceTest {

    @Autowired
    private CategoriaService sujetoDePrueba;
    @Autowired
    private ObjectMapper mapper;

    @Test
    void agregarCategoriaYListarConBD(){
        //having o teniendo
        CategoriaDTO categoria1 = new CategoriaDTO();
        categoria1.setTitulo("Hotel");
        categoria1.setDescripcion("Casa de madera!");
        categoria1.setUrl_imagen("url nueva3");
        //when o cuando
        sujetoDePrueba.agregar(categoria1);
        CategoriaDTO categoria2 = mapper.convertValue(sujetoDePrueba.buscarPorId(6), CategoriaDTO.class);


        //then o entonces
        assertEquals(categoria1.getTitulo(),categoria2.getTitulo());
        assertEquals(categoria1.getDescripcion(),categoria2.getDescripcion());
        assertEquals(categoria1.getUrl_imagen(),categoria2.getUrl_imagen());
    }
    @Test
    void editarCategoriaEnDB(){

        //Having
        CategoriaDTO categoriaDTOOriginal = new CategoriaDTO();
        //al objeto vacio le asigno el ultimo objeto creado en BD
        for (CategoriaDTO categoria : sujetoDePrueba.listarTodas()) {
            categoriaDTOOriginal = mapper.convertValue(categoria,CategoriaDTO.class);
        }
        //When
        categoriaDTOOriginal.setDescripcion("Nueva descripción editada");
        sujetoDePrueba.editar(categoriaDTOOriginal);
        CategoriaDTO categoriaDTOEditada = new CategoriaDTO();
        for (CategoriaDTO categoria : sujetoDePrueba.listarTodas()) {
            categoriaDTOEditada = mapper.convertValue(categoria,CategoriaDTO.class);
        }
        //Then
        assertEquals(categoriaDTOEditada.getDescripcion(),"Nueva descripción editada");
        assertEquals(categoriaDTOEditada.getUrl_imagen(),categoriaDTOOriginal.getUrl_imagen());
    }

    @Test
    void eliminarCategoriaEnDB(){
        //Having
        CategoriaDTO categoriaDTOAEliminar = new CategoriaDTO();
        for (CategoriaDTO categoria : sujetoDePrueba.listarTodas()) {
            categoriaDTOAEliminar = mapper.convertValue(categoria,CategoriaDTO.class);
        }

        //When
        sujetoDePrueba.eliminar(categoriaDTOAEliminar.getId_categorias());
        CategoriaDTO categoriaDTOdistinto = new CategoriaDTO();
        for (CategoriaDTO categoria : sujetoDePrueba.listarTodas()) {
            categoriaDTOdistinto = mapper.convertValue(categoria,CategoriaDTO.class);
        }
        //Then
        assertNotEquals(categoriaDTOAEliminar.getId_categorias(),categoriaDTOdistinto.getId_categorias());
    }
}
