package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.ProductoDTO;
import com.grupo11.demo.model.dtos.ReservaDTO;
import com.grupo11.demo.model.dtos.ReservaFechasDTO;
import com.grupo11.demo.service.implementation.ReservaService;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;


@RestController
@RequestMapping("/reservas")
@CrossOrigin(origins = "*")
public class ReservaController {
    @Autowired
    private ReservaService service;

    // FIND ALL
    @GetMapping("/listarTodos")
    public ResponseEntity<?> listarTodos(Pageable pageable, @RequestParam(required = false) String ord, @RequestParam(required = false) String field) {
        Set<ReservaDTO> reservas;

        if (ord == null || field == null) {
            reservas = service.listarTodo(pageable);
        } else {
            Sort.by(Sort.Order.asc("id"));
            PageRequest of = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.fromString(ord), field);
            reservas = service.listarTodo(of);
        }
        return ResponseEntity.ok(reservas);
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
    @GetMapping("/producto/{id}")
    public ResponseEntity<?> listarReservasPorProducto(@PathVariable Integer id, Pageable pageable) {
        List<ReservaDTO> reservaDTOList= service.buscarReservasPorProducto(id, pageable);
        return ResponseEntity.ok().body(reservaDTOList);
    }

    // FIND BY USUARIOS
    @GetMapping("/usuario/{id}")
public ResponseEntity<?> listarReservasPorUsuario(@PathVariable Integer id, Pageable pageable){
        List<ReservaDTO> reservaDTOList = service.buscarReservasPorUsuario(id, pageable);
        return ResponseEntity.ok().body(reservaDTOList);
    }
}
