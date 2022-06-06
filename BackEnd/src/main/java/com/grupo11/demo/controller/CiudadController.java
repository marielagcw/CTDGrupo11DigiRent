package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.CiudadDTO;
import com.grupo11.demo.service.implementation.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/producto/ciudad") //ver proucto ciudad
public class CiudadController {

    @Autowired
    private CiudadService ciudadService;

    @PostMapping("/agregar")
    public CiudadDTO guardar(@RequestBody CiudadDTO ciudad) {
        return ciudadService.agregar(ciudad);
    }

    @GetMapping("/listarTodos")
    public List<CiudadDTO> listarTodos() {
        return ciudadService.listarTodas();
    }

    @PutMapping("/actualizar")
    public ResponseEntity<CiudadDTO> editarCiudad(@RequestBody CiudadDTO ciudadDTO) {
        ResponseEntity<CiudadDTO> response;

        if (ciudadDTO.getId_ciudad() != null && ciudadService.buscarPorId(ciudadDTO.getId_ciudad()) != null)
            response = ResponseEntity.ok(ciudadService.editar(ciudadDTO));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<CiudadDTO> buscar(@PathVariable Integer id){
        CiudadDTO ciudadDTO = ciudadService.buscarPorId(id);
        return ResponseEntity.ok(ciudadDTO);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) {
        ResponseEntity<String> response;

        if (ciudadService.buscarPorId(id) != null) {
            ciudadService.eliminar(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Eliminado");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }


}
