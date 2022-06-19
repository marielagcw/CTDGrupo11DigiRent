package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Rol;
import com.grupo11.demo.model.dtos.RolDTO;
import com.grupo11.demo.repository.IRolRepository;
import com.grupo11.demo.service.IRolService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

public class RolService implements IRolService {

    @Autowired
    private IRolRepository repository;

    @Autowired
    private ObjectMapper mapper;

    // SAVE
    public RolDTO agregar(RolDTO rolDTO) {
        Rol rol = mapper.convertValue(rolDTO, Rol.class);
        repository.save(rol);
        rolDTO.setId_roles(rol.getId_roles());
        return rolDTO;
    }

    // FIND ALL
    public Set<RolDTO> listarTodas() {
        List<Rol> rols = repository.findAll();
        Set<RolDTO> rolDTOList = new HashSet<>();
        for (Rol rol : rols) {
            rolDTOList.add(mapper.convertValue(rol, RolDTO.class));
        }
        return rolDTOList;
    }

    // FIND BY ID
    public RolDTO buscarPorId(Integer id) {
        Optional<Rol> rol = repository.findById(id);
        RolDTO rolDTO = null;

        if (rol.isPresent()) {
            rolDTO = mapper.convertValue(rol, RolDTO.class);
        }
        return rolDTO;
    }

    // UPDATE
    public RolDTO actualizar(RolDTO rolDTO) {
        Rol rol = mapper.convertValue(rolDTO, Rol.class);
        repository.findById(rol.getId_roles()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(repository.save(rol), RolDTO.class);
    }

    // DELETE
    public void eliminar(Integer id) {
        repository.deleteById(id);
    }

}
