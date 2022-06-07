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
    ObjectMapper mapper;

    @Autowired
    ICaracteristicaRepository repository;

    @Override
    public CaracteristicaDTO agregar(CaracteristicaDTO caracteristicaDTO) {
        Caracteristica caracteristicaEntity = mapper.convertValue(caracteristicaDTO, Caracteristica.class);
        return mapper.convertValue(repository.save(caracteristicaEntity), CaracteristicaDTO.class);

    }

    @Override
    public CaracteristicaDTO buscarPorId(Integer id) {
        Optional<Caracteristica> caracteristica = repository.findById(id);
        CaracteristicaDTO caracteristicaDTO = null;

        if (caracteristica.isPresent()) {
            caracteristicaDTO = mapper.convertValue(caracteristica, CaracteristicaDTO.class);
        }
        return caracteristicaDTO;
    }

    @Override
    public Set<CaracteristicaDTO> listarTodas() {
        List<Caracteristica> caracteristicas = repository.findAll();
        Set<CaracteristicaDTO> CaracteristicaDTOList = new HashSet<>();
        for (Caracteristica caracteristica : caracteristicas) {
            CaracteristicaDTOList.add(mapper.convertValue(caracteristica, CaracteristicaDTO.class));
        }
        return CaracteristicaDTOList;
    }

    @Override
    public CaracteristicaDTO actualizar(CaracteristicaDTO caracteristicaDTO) {
        Caracteristica caracteristica = mapper.convertValue(caracteristicaDTO, Caracteristica.class);
        return mapper.convertValue(repository.save(caracteristica), CaracteristicaDTO.class);
    }

    @Override
    public void eliminar(Integer id) {
        Optional<Caracteristica> caracteristica = repository.findById(id);
        if (caracteristica.isPresent())
            repository.deleteById(id);
        else
            throw new NoSuchElementException();
    }
}
