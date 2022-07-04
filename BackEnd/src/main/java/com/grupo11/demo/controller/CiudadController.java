package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.CiudadDTO;
import com.grupo11.demo.service.implementation.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ciudades")
@CrossOrigin(origins = "*")
public class CiudadController {

    @Autowired
    private CiudadService ciudadService;

    @GetMapping("/listarTodos")
    public ResponseEntity<?> listarTodos(Pageable pageable, @RequestParam(required = false) String ord, @RequestParam(required = false) String field) {
        List<CiudadDTO> ciudades;
        if (ord == null || field == null) {
            ciudades = ciudadService.listarTodo(pageable);
        } else {
            Sort.by(Sort.Order.asc("id"));
            PageRequest of = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.fromString(ord), field);
            ciudades = ciudadService.listarTodo(of);
        }
        return ResponseEntity.ok().body(ciudades);
    }

    @PostMapping("/agregar")
    public ResponseEntity<?> guardar(@RequestBody CiudadDTO ciudad) {
        if(ciudad.getNombre().equals("") || ciudad.getProvincia().equals("") || ciudad.getPais().equals("")){
            return ResponseEntity.badRequest().body("Los datos están incompletos");
        }
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
