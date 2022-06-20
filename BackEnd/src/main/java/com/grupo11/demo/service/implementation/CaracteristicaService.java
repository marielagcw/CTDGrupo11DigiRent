package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Caracteristica;
import com.grupo11.demo.model.dtos.CaracteristicaDTO;
import com.grupo11.demo.repository.ICaracteristicaRepository;
import com.grupo11.demo.service.ICaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CaracteristicaService implements ICaracteristicaService {

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private ICaracteristicaRepository repository;

    // SAVE
    private CaracteristicaDTO guardarCaracteristica(CaracteristicaDTO caracteristicaDTO) {
        Caracteristica caracteristica = mapper.convertValue(caracteristicaDTO, Caracteristica.class);
        repository.save(caracteristica);
        caracteristicaDTO.setId(caracteristica.getId());
        return caracteristicaDTO;
    }

    // FIND ALL
    @Override
    public Set<CaracteristicaDTO> listarTodo() {
        List<Caracteristica> caracteristicas = repository.findAll();
        Set<CaracteristicaDTO> CaracteristicaDTOList = new HashSet<>();
        for (Caracteristica caracteristica : caracteristicas) {
            CaracteristicaDTOList.add(mapper.convertValue(caracteristica, CaracteristicaDTO.class));
        }
        return CaracteristicaDTOList;
    }

    // SAVE
    @Override
    public CaracteristicaDTO agregar(CaracteristicaDTO caracteristicaDTO) {
        return guardarCaracteristica(caracteristicaDTO);
    }

    // FIND BY ID
    @Override
    public CaracteristicaDTO buscarPorId(Integer id) {
        Optional<Caracteristica> caracteristica = repository.findById(id);
        CaracteristicaDTO caracteristicaDTO = null;

        if (caracteristica.isPresent()) {
            caracteristicaDTO = mapper.convertValue(caracteristica, CaracteristicaDTO.class);
        }
        return caracteristicaDTO;
    }

    // UPDATE
    @Override
    public CaracteristicaDTO actualizar(CaracteristicaDTO caracteristicaDTO) {
        Caracteristica caracteristica = mapper.convertValue(caracteristicaDTO, Caracteristica.class);
        repository.findById(caracteristica.getId()).orElseThrow(() -> {
            return new NoSuchElementException(); //TODO agregado buscar ID para verificar si existe o no, si no existe arroja excepción
        });
        return mapper.convertValue(repository.save(caracteristica), CaracteristicaDTO.class);
    }

    // DELETE
    @Override
    public void eliminar(Integer id) {
        repository.deleteById(id);
    }
}
