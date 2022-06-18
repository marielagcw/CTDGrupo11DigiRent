package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.CategoriaDTO;
import com.grupo11.demo.service.implementation.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/categorias")
@CrossOrigin
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/listarTodos")
    public Set<CategoriaDTO> listarTodos() {
        return categoriaService.listarTodas();
    }

    @PostMapping("/agregar")
    public ResponseEntity<?> guardar(@RequestBody CategoriaDTO categoria) {
        categoriaService.agregar(categoria);
        return ResponseEntity.ok(categoria);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        categoriaService.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<?> editarCategoria(@RequestBody CategoriaDTO categoriaDTO) {
        categoriaService.actualizar(categoriaDTO);
        return ResponseEntity.ok(categoriaDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoriaDTO> buscar(@PathVariable Integer id) {
        CategoriaDTO categoriaDTO = categoriaService.buscarPorId(id);
        return ResponseEntity.ok(categoriaDTO);
    }

}
