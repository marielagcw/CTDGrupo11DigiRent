package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.CaracteristicaDTO;
import com.grupo11.demo.service.implementation.CaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
@RequestMapping("/caracteristicas")
public class CaracteristicaController {

    @Autowired
    private CaracteristicaService caracteristicaService;

    @GetMapping("/listarTodos")
    public ResponseEntity<?> listarTodos(@RequestParam(required = false) String ord, @RequestParam(required = false) String field, Pageable pageable) {

        List<CaracteristicaDTO> caracteristicas;

        if (ord == null || field == null) {
            caracteristicas = caracteristicaService.listarTodo(pageable);
        } else {
            Sort.by(Sort.Order.asc("id"));
            PageRequest of = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.fromString(ord), field);
            caracteristicas = caracteristicaService.listarTodo(of);
        }
        return ResponseEntity.ok().body(caracteristicas);
    }

    @PostMapping("/agregar")
    @RolesAllowed("ADMINISTRADOR")
    public ResponseEntity<?> guardar(@RequestBody CaracteristicaDTO caracteristica) {
        if (caracteristica.getNombre().equals("")) {
            return ResponseEntity.badRequest().body("Los datos están incompletos");
        }
        caracteristicaService.agregar(caracteristica);
        return ResponseEntity.status(201).body(caracteristica);
    }

    @DeleteMapping("/eliminar/{id}")
    @RolesAllowed("ADMINISTRADOR")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        caracteristicaService.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    @RolesAllowed("ADMINISTRADOR")
    public ResponseEntity<?> editarCaracteristica(@RequestBody CaracteristicaDTO caracteristicaDTO) {
        caracteristicaService.actualizar(caracteristicaDTO);
        return ResponseEntity.ok(caracteristicaDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CaracteristicaDTO> buscar(@PathVariable Integer id) {
        CaracteristicaDTO caracteristicaDTO = caracteristicaService.buscarPorId(id);
        return ResponseEntity.ok(caracteristicaDTO);
    }


}
