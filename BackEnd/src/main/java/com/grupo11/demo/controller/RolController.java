package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.RolDTO;
import com.grupo11.demo.service.implementation.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/roles")
public class RolController {

    @Autowired
    private RolService service;

    // FIND ALL
    @GetMapping("/listarTodos")
    public Set<RolDTO> listarTodos() {
        return service.listarTodas();
    }

    // SAVE
    @PostMapping("/agregar")
    public ResponseEntity<?> guardar(@RequestBody RolDTO rolDTO) {
        service.agregar(rolDTO);
        return ResponseEntity.ok(rolDTO);
    }

    // DELETE
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        service.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // UPDATE
    @PutMapping("/actualizar")
    public ResponseEntity<?> editarProducto(@RequestBody RolDTO rolDTO) {
        service.actualizar(rolDTO);
        return ResponseEntity.ok(rolDTO);
    }

    // FIND BY ID
    @GetMapping("/{id}")
    public ResponseEntity<RolDTO> buscar(@PathVariable Integer id) {
        RolDTO rolDTO = service.buscarPorId(id);
        return ResponseEntity.ok(rolDTO);

    }
}
