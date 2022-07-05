package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Politica;
import com.grupo11.demo.model.dtos.PoliticaDTO;
import com.grupo11.demo.repository.IPoliticaRepository;
import com.grupo11.demo.service.IPoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PoliticaService implements IPoliticaService {

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private IPoliticaRepository repository;

    // SAVE
    private PoliticaDTO guardarPolitica(PoliticaDTO politicaDTO){
        Politica politica = mapper.convertValue(politicaDTO, Politica.class);
        repository.save(politica);
        politicaDTO.setId(politica.getId());
        return politicaDTO;
    }

    // FIND ALL
    @Override
    public Set<PoliticaDTO> listarTodo() {
        List<Politica> politicas = repository.findAll();
        Set<PoliticaDTO> politicaDTOList = new HashSet<>();
        for (Politica politica : repository.findAll()) {
            politicaDTOList.add(mapper.convertValue(politica, PoliticaDTO.class));
        }
        return politicaDTOList;
    }

    // SAVE
    @Override
    public PoliticaDTO agregar(PoliticaDTO politicaDTO) {
        return guardarPolitica(politicaDTO);
    }

    // FIND BY ID
    @Override
    public PoliticaDTO buscarPorId(Integer id) {
            Politica politica = repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format("El id no pudo ser encontrado", id)));
            return mapper.convertValue(politica, PoliticaDTO.class);
    }

    // UPDATE
    @Override
    public PoliticaDTO actualizar(PoliticaDTO politicaDTO) {
        Politica politica = mapper.convertValue(politicaDTO, Politica.class);
        repository.findById(politica.getId()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(repository.save(politica), PoliticaDTO.class);
    }

    // DELETE
    @Override
    public void eliminar(Integer id) {
        repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format("El id no pudo ser encontrado y no se pudo eliminar", id)));
        repository.deleteById(id);
    }

}
