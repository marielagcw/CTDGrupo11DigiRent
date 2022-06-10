package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.CategoriaDTO;
import com.grupo11.demo.model.dtos.ElementoPoliticaDTO;
import com.grupo11.demo.service.implementation.CategoriaService;
import com.grupo11.demo.service.implementation.ElementoPoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/elementospolitica")
public class ElementoPoliticaController {

    @Autowired
    private ElementoPoliticaService elementoPoliticaService;

    @GetMapping("/listarTodos")
    public Set<ElementoPoliticaDTO> listarTodos() {
        return elementoPoliticaService.listarTodas();
    }

    @PostMapping("/agregar")
    public ResponseEntity<?> guardar(@RequestBody ElementoPoliticaDTO elementoPoliticaDTO) {
        elementoPoliticaService.agregar(elementoPoliticaDTO);
        return ResponseEntity.ok(elementoPoliticaDTO);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        elementoPoliticaService.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<?> editarCategoria(@RequestBody ElementoPoliticaDTO elementoPoliticaDTO) {
        elementoPoliticaService.actualizar(elementoPoliticaDTO);
        return ResponseEntity.ok(elementoPoliticaDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ElementoPoliticaDTO> buscar(@PathVariable Integer id){
        ElementoPoliticaDTO elementoPoliticaDTO = elementoPoliticaService.buscarPorId(id);
        return ResponseEntity.ok(elementoPoliticaDTO);
    }

}
