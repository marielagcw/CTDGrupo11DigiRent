package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.ProductoDTO;
import com.grupo11.demo.service.implementation.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/productos")
@CrossOrigin(origins = "*")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    // FIND ALL / GET ALL
    @GetMapping("/listarTodos")
    public Set<ProductoDTO> listarTodos(Pageable pageable) {
        return productoService.listarTodo(pageable);
    }

    // FIND ALL RANDOM / GET ALL RANDOM
    @GetMapping("/listarTodosRandom")
    public List<ProductoDTO> listarTodosRandom(Pageable pageable) {
        return productoService.listarRandom(pageable);
    }

    // SAVE / POST
    @PostMapping("/agregar")
    public ResponseEntity<?> guardar(@RequestBody ProductoDTO producto) {
        productoService.agregar(producto);
        return ResponseEntity.ok(producto);
    }

    // DELETE
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        productoService.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // UPDATE / PUT
    @PutMapping("/actualizar")
    public ResponseEntity<?> editarProducto(@RequestBody ProductoDTO productoDTO) {
        productoService.actualizar(productoDTO);
        return ResponseEntity.ok(productoDTO);
    }

    // FIND BY ID / GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> buscar(@PathVariable Integer id) {
        ProductoDTO productoDTO = productoService.buscarPorId(id);
        return ResponseEntity.ok(productoDTO);
    }
    /*
    @GetMapping("/{id}")
    public ProductoDTO buscar(@PathVariable Integer id) {
        ProductoDTO productoDTO = productoService.buscarPorId(id);
        return productoDTO;
    }*/

    // FIND BY ID CIUDAD / GET BY CIUDAD
    @GetMapping("/productosCiudad/{id}")
    public Set<ProductoDTO> listarProductosPorCiudad(@PathVariable Integer id, Pageable pageable) {
        return productoService.buscarProductosPorCiudad(id, pageable);
    }

    // FIND BY ID CATEGORIA / GET BY CATEGORIA
    @GetMapping("/productosCategoria/{id}")
    public Set<ProductoDTO> listarProductosPorCategoria(@PathVariable Integer id, Pageable pageable) {
        return productoService.buscarProductosPorCategoria(id, pageable);
    }
}
