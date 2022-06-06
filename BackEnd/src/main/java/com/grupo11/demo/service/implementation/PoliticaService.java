package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Politica;
import com.grupo11.demo.model.dtos.PoliticaDTO;
import com.grupo11.demo.repository.IPoliticaRepository;
import com.grupo11.demo.service.IPoliticaService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

public class PoliticaService implements IPoliticaService {

    private ObjectMapper mapper;
    private IPoliticaRepository repository;

    @Autowired
    public PoliticaService(ObjectMapper mapper, IPoliticaRepository repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

    @Override
    public PoliticaDTO agregar(PoliticaDTO politicaDTO) {
        Politica politicaEntity = mapper.convertValue(politicaDTO, Politica.class);
        return mapper.convertValue(repository.save(politicaEntity), PoliticaDTO.class);

    }

    @Override
    public PoliticaDTO buscarPorId(Integer id) {
        Optional<Politica> politica = repository.findById(id);
        PoliticaDTO politicaDTO = null;

        if (politica.isPresent()) {
            politicaDTO = mapper.convertValue(politica, PoliticaDTO.class);
        }
        return politicaDTO;
    }

    @Override
    public List<PoliticaDTO> listarTodas() {
        List<PoliticaDTO> politicaDTOList = new ArrayList<>();
        for (Politica politica : repository.findAll()) {
            politicaDTOList.add(mapper.convertValue(politica, PoliticaDTO.class));
        }
        return politicaDTOList;
    }

    @Override
    public PoliticaDTO editar(PoliticaDTO politicaDTO) {
        Politica politica = mapper.convertValue(politicaDTO, Politica.class);
        return mapper.convertValue(repository.save(politica), PoliticaDTO.class);
    }

    @Override
    public void eliminar(Integer id) {
        Optional<Politica> Politica = repository.findById(id);
        if (Politica.isPresent())
            repository.deleteById(id);
        else
            throw new NoSuchElementException();
    }

}
