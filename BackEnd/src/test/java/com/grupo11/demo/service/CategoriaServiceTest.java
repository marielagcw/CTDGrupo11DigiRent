package com.grupo11.demo.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.dtos.CategoriaDTO;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class CategoriaServiceTest {

    @Autowired
    private CategoriaService sujetoDePrueba;

    @Autowired
    private ObjectMapper mapper;


    @Test
    public void agregarCategoriaABD(){
        //having o teniendo
        CategoriaDTO categoria1 = new CategoriaDTO();
        categoria1.setTitulo("Cabania");
        categoria1.setDescripcion("ejemplo");
        categoria1.setUrlImangen("url");

        //when o cuando
        sujetoDePrueba.agregar(categoria1);
        CategoriaDTO categoria2 = new CategoriaDTO();
        for (CategoriaDTO categoria : sujetoDePrueba.listarTodas()) {
            categoria2.setTitulo(categoria.getTitulo());
            categoria2.setDescripcion(categoria.getDescripcion());
            categoria2.setUrlImangen(categoria.getUrlImangen());
        }

        //then o entonces
        assertEquals(categoria1.getTitulo(),categoria2.getTitulo());



    }
}
