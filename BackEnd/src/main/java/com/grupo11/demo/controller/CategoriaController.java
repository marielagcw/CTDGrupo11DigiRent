package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.CategoriaDTO;
import com.grupo11.demo.service.implementation.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.Set;

@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = "*")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/listarTodos")
    public Set<CategoriaDTO> listarTodos() {
        return categoriaService.listarTodo();
    }

    @PostMapping("/agregar")
    @RolesAllowed("ADMINISTRADOR")
    public ResponseEntity<?> guardar(@RequestBody CategoriaDTO categoria) {
        if(categoria.getTitulo().equals("")){
            return ResponseEntity.badRequest().body("Los datos están incompletos");
        }
        categoriaService.agregar(categoria);
        return ResponseEntity.ok(categoria);
    }

    @DeleteMapping("/eliminar/{id}")
    @RolesAllowed("ADMINISTRADOR")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        categoriaService.eliminar(id);
        return ResponseEntity.status(201).body(HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    @RolesAllowed("ADMINISTRADOR")
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
