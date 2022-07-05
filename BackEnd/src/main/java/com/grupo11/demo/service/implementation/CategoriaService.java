package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Categoria;
import com.grupo11.demo.model.dtos.CategoriaDTO;
import com.grupo11.demo.repository.ICategoriaRepository;
import com.grupo11.demo.service.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CategoriaService implements ICategoriaService {

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private ICategoriaRepository repository;

    // SAVE
    private CategoriaDTO guardarCategoria(CategoriaDTO categoriaDTO){
        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class);
        repository.save(categoria);
        categoriaDTO.setId(categoria.getId());
        return categoriaDTO;
    }

    // FIND ALL
    @Override
    public Set<CategoriaDTO> listarTodo() {
        List<Categoria> categorias = repository.findAll();
        Set<CategoriaDTO> categoriaDTOList = new HashSet<>();
        for (Categoria categoria : categorias) {
            categoriaDTOList.add(mapper.convertValue(categoria, CategoriaDTO.class));
        }
        return categoriaDTOList;
    }

    // SAVE
    @Override
    public CategoriaDTO agregar(CategoriaDTO categoriaDTO) {
        return guardarCategoria(categoriaDTO);
    }

    // FIND BY ID
    @Override
    public CategoriaDTO buscarPorId(Integer id) {
        Categoria categoria = repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format("El id no pudo ser encontrado", id)));
        return mapper.convertValue(categoria, CategoriaDTO.class);
    }

    // UPDATE
    @Override
    public CategoriaDTO actualizar(CategoriaDTO categoriaDTO) {
        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class);
        repository.findById(categoria.getId()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(repository.save(categoria), CategoriaDTO.class);
    }

    // DELETE
    @Override
    public void eliminar(Integer id) {
        repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format("El id no pudo ser encontrado y no se pudo eliminar", id)));
        repository.deleteById(id);
    }
}
