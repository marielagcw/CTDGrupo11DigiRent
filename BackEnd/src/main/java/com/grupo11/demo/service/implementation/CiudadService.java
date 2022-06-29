package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Ciudad;
import com.grupo11.demo.model.dtos.CiudadDTO;
import com.grupo11.demo.repository.ICiudadRepository;
import com.grupo11.demo.service.ICiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CiudadService implements ICiudadService {

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private ICiudadRepository repository;

    // SAVE
    private CiudadDTO guardarCiudad(CiudadDTO ciudadDTO){
        Ciudad ciudad = mapper.convertValue(ciudadDTO, Ciudad.class);
        repository.save(ciudad);
        ciudadDTO.setId(ciudad.getId());
        return ciudadDTO;
    }

    // FIND ALL
    @Override
    public List<CiudadDTO> listarTodo(Pageable pageable) {
        Page<Ciudad> ciudades = repository.findAll(pageable);
        List<CiudadDTO> CiudadDTOList = new ArrayList<>();
        for (Ciudad ciudad : ciudades) {
            CiudadDTOList.add(mapper.convertValue(ciudad, CiudadDTO.class));
        }
        return CiudadDTOList;
    }

    // SAVE
    @Override
    public CiudadDTO agregar(CiudadDTO ciudadDTO) {
        return guardarCiudad(ciudadDTO);
    }

    // FIND BY ID
    @Override
    public CiudadDTO buscarPorId(Integer id) {
        Ciudad ciudad = repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format("El id no pudo ser encontrado", id)));
        return mapper.convertValue(ciudad, CiudadDTO.class);
    }

    // UPDATE
    @Override
    public CiudadDTO actualizar(CiudadDTO ciudadDTO) {
        Ciudad ciudad = mapper.convertValue(ciudadDTO, Ciudad.class);
        repository.findById(ciudad.getId()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(repository.save(ciudad), CiudadDTO.class);
    }

    // DELETE
    @Override
    public void eliminar(Integer id) {
        repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format("El id no pudo ser encontrado y no se pudo eliminar", id)));
        repository.deleteById(id);
    }

}
