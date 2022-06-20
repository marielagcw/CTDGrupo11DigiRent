package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.ReservaDTO;
import com.grupo11.demo.model.dtos.ReservaFechasDTO;
import com.grupo11.demo.service.implementation.ReservaService;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Set;


@RestController
@RequestMapping("/reservas")
@CrossOrigin(origins = "*")
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
    @GetMapping("/producto/{id}")
    public List<ReservaDTO> listarReservasPorProducto(@PathVariable Integer id, Pageable pageable) {
        return service.buscarReservasPorProducto(id, pageable);
    }

    // FIND BY PRODUCTO Y FECHAS
    @GetMapping("/producto/{id}/fechaDisponible")
    public ResponseEntity<Boolean> fechasDisponiblesPorProducto(@PathVariable Integer id, @RequestBody ReservaFechasDTO reservaFechasDTO){
        Boolean estaDisponible = service.fechasDisponiblesPorProducto(id, reservaFechasDTO.getFechaInicial(), reservaFechasDTO.getFechaFinal());
        return ResponseEntity.ok(estaDisponible);
    }
}
