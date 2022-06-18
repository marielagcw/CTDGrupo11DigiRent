package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Ciudad;
import com.grupo11.demo.model.dtos.CiudadDTO;
import com.grupo11.demo.repository.ICiudadRepository;
import com.grupo11.demo.service.ICiudadService;
import org.springframework.beans.factory.annotation.Autowired;
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
        ciudadDTO.setId_ciudad(ciudad.getId_ciudad());
        return ciudadDTO;
    }

    // FIND ALL
    @Override
    public Set<CiudadDTO> listarTodas() {
        List<Ciudad> ciudades = repository.findAll();
        Set<CiudadDTO> CiudadDTOList = new HashSet<>();
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
        Optional<Ciudad> ciudad = repository.findById(id);
        CiudadDTO ciudadDTO = null;

        if (ciudad.isPresent()) {
            ciudadDTO = mapper.convertValue(ciudad, CiudadDTO.class);
        }
        return ciudadDTO;
    }

    // UPDATE
    @Override
    public CiudadDTO actualizar(CiudadDTO ciudadDTO) {
        Ciudad ciudad = mapper.convertValue(ciudadDTO, Ciudad.class);
        repository.findById(ciudad.getId_ciudad()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(repository.save(ciudad), CiudadDTO.class);
    }

    // DELETE
    @Override
    public void eliminar(Integer id) {
        repository.deleteById(id);
    }

}
