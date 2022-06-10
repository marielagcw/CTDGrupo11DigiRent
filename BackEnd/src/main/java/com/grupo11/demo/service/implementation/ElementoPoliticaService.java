package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.ElementoPolitica;
import com.grupo11.demo.model.dtos.ElementoPoliticaDTO;
import com.grupo11.demo.repository.IElementoPoliticaRepository;
import com.grupo11.demo.service.IElementoPoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ElementoPoliticaService implements IElementoPoliticaService {

        @Autowired
        private ObjectMapper mapper;

        @Autowired
        private IElementoPoliticaRepository repository;

        private void guardarCategoria(ElementoPoliticaDTO elementoPoliticaDTO){
            ElementoPolitica elementoPolitica = mapper.convertValue(elementoPoliticaDTO, ElementoPolitica.class);
            repository.save(elementoPolitica);
        }

        @Override
        public Set<ElementoPoliticaDTO> listarTodas() {
            List<ElementoPolitica> elementoPoliticas = repository.findAll();
            Set<ElementoPoliticaDTO> elementoPoliticaDTOList = new HashSet<>();
            for (ElementoPolitica elementoPolitica : elementoPoliticas) {
                elementoPoliticaDTOList.add(mapper.convertValue(elementoPolitica, ElementoPoliticaDTO.class));
            }
            return elementoPoliticaDTOList;
        }

        @Override
        public void agregar(ElementoPoliticaDTO elementoPoliticaDTO) {
            guardarCategoria(elementoPoliticaDTO);
        }

        @Override
        public ElementoPoliticaDTO buscarPorId(Integer id) {
            Optional<ElementoPolitica> elementoPolitica = repository.findById(id);
            ElementoPoliticaDTO elementoPoliticaDTO = null;

            if (elementoPolitica.isPresent()) {
                elementoPoliticaDTO = mapper.convertValue(elementoPolitica, ElementoPoliticaDTO.class);
            }
            return elementoPoliticaDTO;
        }

        @Override
        public ElementoPoliticaDTO actualizar(ElementoPoliticaDTO elementoPoliticaDTO) {
            ElementoPolitica elementoPolitica = mapper.convertValue(elementoPoliticaDTO, ElementoPolitica.class);
            return mapper.convertValue(repository.save(elementoPolitica), ElementoPoliticaDTO.class);
        }

        @Override
        public void eliminar(Integer id) {
            repository.deleteById(id);
        }


    }
