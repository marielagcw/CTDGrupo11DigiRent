package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.CategoriaDTO;
import com.grupo11.demo.service.implementation.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = "*")
public class CategoriaController {
    @Autowired
    private CategoriaService categoriaService;

    @PostMapping
    public CategoriaDTO guardar(@RequestBody CategoriaDTO categoria) {
        return categoriaService.agregar(categoria);
    }

    @GetMapping
    public List<CategoriaDTO> listarTodos() {
        return categoriaService.listarTodas();
    }

    @PutMapping
    public ResponseEntity<CategoriaDTO> editarCategoria(@RequestBody CategoriaDTO categoriaDTO) {
        ResponseEntity<CategoriaDTO> response;

        if (categoriaDTO.getId_categorias() != null && categoriaService.buscarPorId(categoriaDTO.getId_categorias()) != null)
            response = ResponseEntity.ok(categoriaService.editar(categoriaDTO));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoriaDTO> buscar(@PathVariable Integer id){
        CategoriaDTO odontologoDTO = categoriaService.buscarPorId(id);
        return ResponseEntity.ok(odontologoDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) {
        ResponseEntity<String> response;

        if (categoriaService.buscarPorId(id) != null) {
            categoriaService.eliminar(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Eliminado");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
}
