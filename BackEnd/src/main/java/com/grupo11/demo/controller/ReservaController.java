package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.ReservaDTO;
import com.grupo11.demo.service.implementation.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;


@RestController
@RequestMapping("/reservas")
public class ReservaController {
    @Autowired
    private ReservaService service;

    @GetMapping("/listarTodos")
    public Set<ReservaDTO> listarTodos() {
        return service.listarTodas();
    }

    @PostMapping("/agregar")
    public ResponseEntity<?> guardar(@RequestBody ReservaDTO reserva) {
        service.agregar(reserva);
        return ResponseEntity.ok(reserva);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        service.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<?> editarProducto(@RequestBody ReservaDTO reservaDTO) {
        service.actualizar(reservaDTO);
        return ResponseEntity.ok(reservaDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReservaDTO> buscar(@PathVariable Integer id) {
        ReservaDTO reservaDTO = service.buscarPorId(id);
        return ResponseEntity.ok(reservaDTO);

    }
}
