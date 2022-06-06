package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.ProductoDTO;
import com.grupo11.demo.service.implementation.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @PostMapping("/agregar")
    public ProductoDTO guardar(@RequestBody ProductoDTO producto) {
        return productoService.agregar(producto);
    }

    @GetMapping("/listarTodos")
    public List<ProductoDTO> listarTodos() {
        return productoService.listarTodas();
    }

    @PutMapping("/actualizar")
    public ResponseEntity<ProductoDTO> editarProducto(@RequestBody ProductoDTO productoDTO) {
        ResponseEntity<ProductoDTO> response;

        if (productoDTO.getId_producto() != null && productoService.buscarPorId(productoDTO.getId_producto()) != null)
            response = ResponseEntity.ok(productoService.editar(productoDTO));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> buscar(@PathVariable Integer id){
        ProductoDTO productoDTO = productoService.buscarPorId(id);
        return ResponseEntity.ok(productoDTO);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) {
        ResponseEntity<String> response;

        if (productoService.buscarPorId(id) != null) {
            productoService.eliminar(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Eliminado");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

}
