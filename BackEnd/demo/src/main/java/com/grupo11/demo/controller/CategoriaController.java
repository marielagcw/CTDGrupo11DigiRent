package com.grupo11.demo.controller;

import com.grupo11.demo.model.Categoria;
import com.grupo11.demo.model.dtos.CategoriaDTO;
import com.grupo11.demo.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    @Autowired
    private CategoriaService categoriaService;

    @PostMapping
    public CategoriaDTO guardar(@RequestBody CategoriaDTO categoria){
        return categoriaService.agregar(categoria);
    }

    @GetMapping
    public List<CategoriaDTO> listarTodos() {
        return categoriaService.listarTodas();
    }



}
