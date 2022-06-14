package com.grupo11.demo.controller;

//import com.grupo11.demo.model.dtos.CaracteristicaDTO;

import com.grupo11.demo.model.Ciudad;
import com.grupo11.demo.model.dtos.CiudadDTO;
import com.grupo11.demo.service.implementation.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/ciudades")
@CrossOrigin
public class CiudadController {

    @Autowired
    private CiudadService ciudadService;

    @GetMapping("/listarTodos")
    public Set<CiudadDTO> listarTodos() {
        return ciudadService.listarTodas();
    }

    @PostMapping("/agregar")
    public ResponseEntity<?> guardar(@RequestBody CiudadDTO ciudad) {
        ciudadService.agregar(ciudad);
        return ResponseEntity.ok(ciudad);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        ciudadService.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<?> editarCiudad(@RequestBody CiudadDTO ciudadDTO) {
        ciudadService.actualizar(ciudadDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CiudadDTO> buscar(@PathVariable Integer id) {
        CiudadDTO ciudadDTO = ciudadService.buscarPorId(id);
        return ResponseEntity.ok(ciudadDTO);
    }

}
