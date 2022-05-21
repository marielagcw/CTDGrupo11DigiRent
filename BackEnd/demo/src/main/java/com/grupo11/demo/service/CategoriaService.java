package com.grupo11.demo.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Categoria;
import com.grupo11.demo.model.dtos.CategoriaDTO;
import com.grupo11.demo.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Service
public class CategoriaService implements ImplementacionService<CategoriaDTO> {

    private ObjectMapper mapper;
    private CategoriaRepository repository;

    @Autowired
    public CategoriaService(ObjectMapper mapper, CategoriaRepository repository) {
        this.mapper = mapper;
        this.repository = repository;
    }


    @Override
    public CategoriaDTO agregar(CategoriaDTO categoria) {
        Categoria categoria1 = mapper.convertValue(categoria, Categoria.class);
        return mapper.convertValue(repository.save(categoria1), CategoriaDTO.class);

    }

    @Override
    public List<CategoriaDTO> listarTodas() {
        List<CategoriaDTO> categoriaDTOList = new ArrayList<>();
        for (Categoria categoria : repository.findAll()) {
            categoriaDTOList.add(mapper.convertValue(categoria, CategoriaDTO.class));
        }
        return categoriaDTOList;
    }












    @Override
    public CategoriaDTO editar(Integer id) {
        return null;
    }

    @Override
    public void eliminar(Integer id) {

    }
}
