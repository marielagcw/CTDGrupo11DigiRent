package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.PoliticaDTO;
import com.grupo11.demo.service.implementation.PoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.Set;

@RestController
@RequestMapping("/politicas")
@CrossOrigin(origins = "*")
public class PoliticaController {

    @Autowired
    private PoliticaService politicaService;

    @GetMapping("/listarTodos")
    public Set<PoliticaDTO> listarTodos() {
        return politicaService.listarTodo();
    }

    @PostMapping("/agregar")
    @RolesAllowed("ADMINISTRADOR")
    public ResponseEntity<?> guardar(@RequestBody PoliticaDTO politica) {
        politicaService.agregar(politica);
        return ResponseEntity.status(201).body(politica);
    }

    @DeleteMapping("/eliminar/{id}")
    @RolesAllowed("ADMINISTRADOR")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        politicaService.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    @RolesAllowed("ADMINISTRADOR")
    public ResponseEntity<?> editarPolitica(@RequestBody PoliticaDTO politicaDTO) {
        politicaService.actualizar(politicaDTO);
        return ResponseEntity.ok(politicaDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PoliticaDTO> buscar(@PathVariable Integer id) {
        PoliticaDTO politicaDTO = politicaService.buscarPorId(id);
        return ResponseEntity.ok(politicaDTO);
    }

}
