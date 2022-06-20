package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.ImagenDTO;
import com.grupo11.demo.service.implementation.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/imagenes")
@CrossOrigin(origins = "*")
public class ImagenController {

    @Autowired
    private ImagenService imagenService;

    @GetMapping("/listarTodos")
    public Set<ImagenDTO> listarTodos() {
        return imagenService.listarTodo();
    }

    @PostMapping("/agregar")
    public ResponseEntity<?> guardar(@RequestBody ImagenDTO imagen) {
        imagenService.agregar(imagen);
        return ResponseEntity.ok(imagen);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        imagenService.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<?> editarImagen(@RequestBody ImagenDTO imagenDTO) {
        imagenService.actualizar(imagenDTO);
        return ResponseEntity.ok(imagenDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ImagenDTO> buscar(@PathVariable Integer id) {
        ImagenDTO imagenDTO = imagenService.buscarPorId(id);
        return ResponseEntity.ok(imagenDTO);
    }

}
