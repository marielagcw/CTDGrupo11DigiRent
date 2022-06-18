package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.ElementoPolitica;
import com.grupo11.demo.model.dtos.ElementoPoliticaDTO;
import com.grupo11.demo.repository.IElementoPoliticaRepository;
import com.grupo11.demo.service.IElementoPoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ElementoPoliticaService implements IElementoPoliticaService {

        @Autowired
        private ObjectMapper mapper;

        @Autowired
        private IElementoPoliticaRepository repository;

        // SAVE
        private ElementoPoliticaDTO guardarCategoria(ElementoPoliticaDTO elementoPoliticaDTO){
            ElementoPolitica elementoPolitica = mapper.convertValue(elementoPoliticaDTO, ElementoPolitica.class);
            repository.save(elementoPolitica);
            elementoPoliticaDTO.setId_elementos_politica(elementoPolitica.getId_elementos_politica());
            return elementoPoliticaDTO;
        }

        // FIND ALL
        @Override
        public Set<ElementoPoliticaDTO> listarTodas() {
            List<ElementoPolitica> elementoPoliticas = repository.findAll();
            Set<ElementoPoliticaDTO> elementoPoliticaDTOList = new HashSet<>();
            for (ElementoPolitica elementoPolitica : elementoPoliticas) {
                elementoPoliticaDTOList.add(mapper.convertValue(elementoPolitica, ElementoPoliticaDTO.class));
            }
            return elementoPoliticaDTOList;
        }

        // SAVE
        @Override
        public ElementoPoliticaDTO agregar(ElementoPoliticaDTO elementoPoliticaDTO) {
            return guardarCategoria(elementoPoliticaDTO);
        }

        // FIND BY ID
        @Override
        public ElementoPoliticaDTO buscarPorId(Integer id) {
            Optional<ElementoPolitica> elementoPolitica = repository.findById(id);
            ElementoPoliticaDTO elementoPoliticaDTO = null;

            if (elementoPolitica.isPresent()) {
                elementoPoliticaDTO = mapper.convertValue(elementoPolitica, ElementoPoliticaDTO.class);
            }
            return elementoPoliticaDTO;
        }

        // UPDATE
        @Override
        public ElementoPoliticaDTO actualizar(ElementoPoliticaDTO elementoPoliticaDTO) {
            ElementoPolitica elementoPolitica = mapper.convertValue(elementoPoliticaDTO, ElementoPolitica.class);
            repository.findById(elementoPolitica.getId_elementos_politica()).orElseThrow(() -> {
                return new NoSuchElementException();
            });
            return mapper.convertValue(repository.save(elementoPolitica), ElementoPoliticaDTO.class);
        }

        // DELETE
        @Override
        public void eliminar(Integer id) {
            repository.deleteById(id);
        }


    }
