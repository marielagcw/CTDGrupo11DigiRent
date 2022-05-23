package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Categoria;
import com.grupo11.demo.model.dtos.CategoriaDTO;
import com.grupo11.demo.repository.CategoriaRepository;
import com.grupo11.demo.service.ImplementacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

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
    public CategoriaDTO agregar(CategoriaDTO categoriaDTO) {
        Categoria categoriaEntity = mapper.convertValue(categoriaDTO, Categoria.class);
        return mapper.convertValue(repository.save(categoriaEntity), CategoriaDTO.class);

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
    public List<CategoriaDTO> listarTodas() {
        List<CategoriaDTO> categoriaDTOList = new ArrayList<>();
        for (Categoria categoria : repository.findAll()) {
            categoriaDTOList.add(mapper.convertValue(categoria, CategoriaDTO.class));
        }
        return categoriaDTOList;
    }

    @Override
    public CategoriaDTO editar(CategoriaDTO categoriaDTO) {
        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class);
        return mapper.convertValue(repository.save(categoria), CategoriaDTO.class);
    }

    @Override
    public void eliminar(Integer id) {
        Optional<Categoria> Categoria = repository.findById(id);
        if (Categoria.isPresent())
            repository.deleteById(id);
        else
            throw new NoSuchElementException();
    }
}
