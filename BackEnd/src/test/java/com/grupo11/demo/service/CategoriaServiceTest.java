package com.grupo11.demo.service;

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

    @Test
    void agregarCategoriaABD(){
        //having o teniendo
        CategoriaDTO categoria1 = new CategoriaDTO();
        categoria1.setTitulo("Cabaña");
        categoria1.setDescripcion("Casa de madera");
        categoria1.setUrl_imagen("url nueva");

        //when o cuando
        sujetoDePrueba.agregar(categoria1);
        CategoriaDTO categoria2 = new CategoriaDTO();
        for (CategoriaDTO categoria : sujetoDePrueba.listarTodas()) {
            categoria2.setTitulo(categoria.getTitulo());
            categoria2.setDescripcion(categoria.getDescripcion());
            categoria2.setUrl_imagen(categoria.getUrl_imagen());
        }

        //then o entonces
        assertEquals(categoria1.getTitulo(),categoria2.getTitulo());
        assertEquals(categoria1.getDescripcion(),categoria2.getDescripcion());
        assertEquals(categoria1.getUrl_imagen(),categoria2.getUrl_imagen());



    }
}
