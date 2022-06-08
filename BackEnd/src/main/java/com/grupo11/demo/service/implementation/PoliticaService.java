//package com.grupo11.demo.service.implementation;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.grupo11.demo.model.Politica;
//import com.grupo11.demo.model.dtos.PoliticaDTO;
//import com.grupo11.demo.repository.IPoliticaRepository;
//import com.grupo11.demo.service.IPoliticaService;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.util.*;
//
//public class PoliticaService implements IPoliticaService {
//
//    @Autowired
//    private ObjectMapper mapper;
//
//    @Autowired
//    private IPoliticaRepository repository;
//
//    private void guardarPolitica(PoliticaDTO politicaDTO){
//        Politica politica = mapper.convertValue(politicaDTO, Politica.class);
//        repository.save(politica);
//    }
//
//    @Override
//    public Set<PoliticaDTO> listarTodas() {
//        List<Politica> politicas = repository.findAll();
//        Set<PoliticaDTO> politicaDTOList = new HashSet<>();
//        for (Politica politica : repository.findAll()) {
//            politicaDTOList.add(mapper.convertValue(politica, PoliticaDTO.class));
//        }
//        return politicaDTOList;
//    }
//
//    @Override
//    public void agregar(PoliticaDTO politicaDTO) {
//        guardarPolitica(politicaDTO);
//    }
//
//    @Override
//    public PoliticaDTO buscarPorId(Integer id) {
//        Optional<Politica> politica = repository.findById(id);
//        PoliticaDTO politicaDTO = null;
//
//        if (politica.isPresent()) {
//            politicaDTO = mapper.convertValue(politica, PoliticaDTO.class);
//        }
//        return politicaDTO;
//    }
//
//    @Override
//    public PoliticaDTO actualizar(PoliticaDTO politicaDTO) {
//        Politica politica = mapper.convertValue(politicaDTO, Politica.class);
//        return mapper.convertValue(repository.save(politica), PoliticaDTO.class);
//    }
//
//    @Override
//    public void eliminar(Integer id) {
//        repository.deleteById(id);
//    }
//
//}
