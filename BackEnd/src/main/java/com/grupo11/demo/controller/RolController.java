package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.RolDTO;
import com.grupo11.demo.service.implementation.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.Set;

@RestController
@RequestMapping("/roles")
@CrossOrigin
public class RolController {

    @Autowired
    private RolService service;

    // FIND ALL
    @GetMapping("/listarTodos")
    @RolesAllowed("SUPER")
    public Set<RolDTO> listarTodos() {
        return service.listarTodas();
    }

    // SAVE
    @PostMapping("/agregar")
    @RolesAllowed("SUPER")
    public ResponseEntity<?> guardar(@RequestBody RolDTO rolDTO) {
        service.agregar(rolDTO);
        return ResponseEntity.status(201).body(rolDTO);
    }

    // DELETE
    @DeleteMapping("/eliminar/{id}")
    @RolesAllowed("SUPER")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        service.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // UPDATE
    @PutMapping("/actualizar")
    @RolesAllowed("SUPER")
    public ResponseEntity<?> editarProducto(@RequestBody RolDTO rolDTO) {
        service.actualizar(rolDTO);
        return ResponseEntity.ok(rolDTO);
    }

    // FIND BY ID
    @GetMapping("/{id}")
    @RolesAllowed("SUPER")
    public ResponseEntity<RolDTO> buscar(@PathVariable Integer id) {
        RolDTO rolDTO = service.buscarPorId(id);
        return ResponseEntity.ok(rolDTO);

    }
}
