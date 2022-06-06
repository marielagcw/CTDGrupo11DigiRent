package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.PoliticaDTO;
import com.grupo11.demo.service.implementation.PoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos/politicas") //ver productos politicas
public class PoliticaController {

    @Autowired
    private PoliticaService politicaService;

    @PostMapping("/agregar")
    public PoliticaDTO guardar(@RequestBody PoliticaDTO politica) {
        return politicaService.agregar(politica);
    }

    @GetMapping("/listarTodos")
    public List<PoliticaDTO> listarTodos() {
        return politicaService.listarTodas();
    }

    @PutMapping("/actualizar")
    public ResponseEntity<PoliticaDTO> editarPolitica(@RequestBody PoliticaDTO politicaDTO) {
        ResponseEntity<PoliticaDTO> response;

        if (politicaDTO.getId_politica() != null && politicaService.buscarPorId(politicaDTO.getId_politica()) != null)
            response = ResponseEntity.ok(politicaService.editar(politicaDTO));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<PoliticaDTO> buscar(@PathVariable Integer id){
        PoliticaDTO politicaDTO = politicaService.buscarPorId(id);
        return ResponseEntity.ok(politicaDTO);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) {
        ResponseEntity<String> response;

        if (politicaService.buscarPorId(id) != null) {
            politicaService.eliminar(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Eliminado");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

}
