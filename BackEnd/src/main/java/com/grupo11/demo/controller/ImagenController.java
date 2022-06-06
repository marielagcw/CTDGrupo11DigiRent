package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.ImagenDTO;
import com.grupo11.demo.service.implementation.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/imagen") //ver producto imagen
public class ImagenController {

    @Autowired
    private ImagenService imagenService;

    @PostMapping("/agregar")
    public ImagenDTO guardar(@RequestBody ImagenDTO imagen) {
        return imagenService.agregar(imagen);
    }

    @GetMapping("/listarTodos")
    public List<ImagenDTO> listarTodos() {
        return imagenService.listarTodas();
    }

    @PutMapping("/actualizar")
    public ResponseEntity<ImagenDTO> editarImagen(@RequestBody ImagenDTO imagenDTO) {
        ResponseEntity<ImagenDTO> response;

        if (imagenDTO.getId_imagen() != null && imagenService.buscarPorId(imagenDTO.getId_imagen()) != null)
            response = ResponseEntity.ok(imagenService.editar(imagenDTO));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ImagenDTO> buscar(@PathVariable Integer id){
        ImagenDTO imagenDTO = imagenService.buscarPorId(id);
        return ResponseEntity.ok(imagenDTO);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) {
        ResponseEntity<String> response;

        if (imagenService.buscarPorId(id) != null) {
            imagenService.eliminar(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Eliminado");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

}
