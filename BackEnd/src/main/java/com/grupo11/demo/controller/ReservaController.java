package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.ReservaDTO;
import com.grupo11.demo.service.implementation.ReservaService;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;


@RestController
@RequestMapping("/reservas")
public class ReservaController {
    @Autowired
    private ReservaService service;

    //FIND ALL
    @GetMapping("/listarTodos")
    public Set<ReservaDTO> listarTodos() {
        return service.listarTodas();
    }

    // SAVE
    @PostMapping("/agregar")
    public ResponseEntity<?> guardar(@RequestBody ReservaDTO reserva) {
        service.agregar(reserva);
        return ResponseEntity.ok(reserva);
    }

    // DELETE
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        service.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // UPDATE
    @PutMapping("/actualizar")
    public ResponseEntity<?> editarProducto(@RequestBody ReservaDTO reservaDTO) {
        service.actualizar(reservaDTO);
        return ResponseEntity.ok(reservaDTO);
    }

    // FIND BY ID
    @GetMapping("/{id}")
    public ResponseEntity<ReservaDTO> buscar(@PathVariable Integer id) {
        ReservaDTO reservaDTO = service.buscarPorId(id);
        return ResponseEntity.ok(reservaDTO);

    }

    // FIND BY PRODUCTOS
    @GetMapping("/reservasProducto/{id}")
    public List<ReservaDTO> listarReservasPorProducto(@PathVariable Integer id, Pageable pageable) {
        return service.buscarReservasPorProducto(id, pageable);
    }
}
