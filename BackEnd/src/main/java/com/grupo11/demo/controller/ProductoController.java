package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.ProductoDTO;
import com.grupo11.demo.service.implementation.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping("/listarTodos")
    public Set<ProductoDTO> listarTodos() {
        return productoService.listarTodas();
    }

    @PostMapping("/agregar")
    public ResponseEntity<?> guardar(@RequestBody ProductoDTO producto) {
        productoService.agregar(producto);
        return ResponseEntity.ok(producto);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        productoService.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<?> editarProducto(@RequestBody ProductoDTO productoDTO) {
        productoService.actualizar(productoDTO);
        return ResponseEntity.ok(productoDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> buscar(@PathVariable Integer id) {
        ProductoDTO productoDTO = productoService.buscarPorId(id);
        return ResponseEntity.ok(productoDTO);
    }

    @GetMapping("/{id}/productosCiudad")
    public Set<ProductoDTO> listarProductosPorCiudad(@PathVariable Integer id) {
        return productoService.buscarProductosPorCiudad(id);
    }

    @GetMapping("/{id}/productosCategoria")
    public Set<ProductoDTO> listarProductosPorCategoria(@PathVariable Integer id) {
        return productoService.buscarProductosPorCategoria(id);
    }
}
