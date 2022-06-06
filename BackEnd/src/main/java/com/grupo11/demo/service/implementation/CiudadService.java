package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Ciudad;
import com.grupo11.demo.model.dtos.CiudadDTO;
import com.grupo11.demo.repository.ICiudadRepository;
import com.grupo11.demo.service.ICiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class CiudadService implements ICiudadService {

    private ObjectMapper mapper;
    private ICiudadRepository repository;

    @Autowired
    public CiudadService(ObjectMapper mapper, ICiudadRepository repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

    @Override
    public CiudadDTO agregar(CiudadDTO ciudadDTO) {
        Ciudad ciudadEntity = mapper.convertValue(ciudadDTO, Ciudad.class);
        return mapper.convertValue(repository.save(ciudadEntity), CiudadDTO.class);

    }

    @Override
    public CiudadDTO buscarPorId(Integer id) {
        Optional<Ciudad> ciudad = repository.findById(id);
        CiudadDTO ciudadDTO = null;

        if (ciudad.isPresent()) {
            ciudadDTO = mapper.convertValue(ciudad, CiudadDTO.class);
        }
        return ciudadDTO;
    }

    @Override
    public List<CiudadDTO> listarTodas() {
        List<CiudadDTO> CiudadDTOList = new ArrayList<>();
        for (Ciudad ciudad : repository.findAll()) {
            CiudadDTOList.add(mapper.convertValue(ciudad, CiudadDTO.class));
        }
        return CiudadDTOList;
    }

    @Override
    public CiudadDTO editar(CiudadDTO ciudadDTO) {
        Ciudad ciudad = mapper.convertValue(ciudadDTO, Ciudad.class);
        return mapper.convertValue(repository.save(ciudad), CiudadDTO.class);
    }

    @Override
    public void eliminar(Integer id) {
        Optional<Ciudad> ciudad = repository.findById(id);
        if (ciudad.isPresent())
            repository.deleteById(id);
        else
            throw new NoSuchElementException();
    }

}
