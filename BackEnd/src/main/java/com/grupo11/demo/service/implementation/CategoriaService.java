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

    private CategoriaDTO guardarCategoria(CategoriaDTO categoriaDTO){
        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class);
        repository.save(categoria);
        categoriaDTO.setId_categoria(categoria.getId_categoria());
        return categoriaDTO;
    }

    @Override
    public Set<CategoriaDTO> listarTodas() {
        List<Categoria> categorias = repository.findAll();
        Set<CategoriaDTO> categoriaDTOList = new HashSet<>();
        for (Categoria categoria : categorias) {
            categoriaDTOList.add(mapper.convertValue(categoria, CategoriaDTO.class));
        }
        return categoriaDTOList;
    }

    @Override
    public CategoriaDTO agregar(CategoriaDTO categoriaDTO) {
        return guardarCategoria(categoriaDTO);
    }

    @Override
    public CategoriaDTO buscarPorId(Integer id) {
        Optional<Categoria> categoria = repository.findById(id);
        CategoriaDTO categoriaDTO = null;

        if (categoria.isPresent()) {
            categoriaDTO = mapper.convertValue(categoria, CategoriaDTO.class);
        }
        return categoriaDTO;
    }

    @Override
    public CategoriaDTO actualizar(CategoriaDTO categoriaDTO) {
        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class);
        repository.findById(categoria.getId_categoria()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(repository.save(categoria), CategoriaDTO.class);
    }

    @Override
    public void eliminar(Integer id) {
        repository.deleteById(id);
    }
}
