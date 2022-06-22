package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.ProductoDTO;
import com.grupo11.demo.model.dtos.ReservaFechasDTO;
import com.grupo11.demo.service.implementation.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    private ProductoService service;

    // FIND ALL / GET ALL
    @GetMapping("/listarTodos")
    public ResponseEntity<?> listarTodos(Pageable pageable, @RequestParam String ord, @RequestParam String field) {
        Set<ProductoDTO> productos;

        if (ord == null || field == null) {
            productos = service.listarTodo(pageable);
        } else {
            Sort.by(Sort.Order.asc("id"));
            PageRequest of = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.fromString(ord), field);
            productos = service.listarTodo(of);
        }
        return ResponseEntity.ok(productos);
    }


    // FIND ALL RANDOM / GET ALL RANDOM
    @GetMapping("/listarTodosRandom")
    public List<ProductoDTO> listarTodosRandom(Pageable pageable) {
        return service.listarRandom(pageable);
    }

    // SAVE / POST
    @PostMapping("/agregar")
    public ResponseEntity<?> guardar(@RequestBody ProductoDTO producto) {
        service.agregar(producto);
        return ResponseEntity.ok(producto);
    }

    // DELETE
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        service.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // UPDATE / PUT
    @PutMapping("/actualizar")
    public ResponseEntity<?> editarProducto(@RequestBody ProductoDTO productoDTO) {
        service.actualizar(productoDTO);
        return ResponseEntity.ok(productoDTO);
    }

    // FIND BY ID / GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> buscar(@PathVariable Integer id) {
        ProductoDTO productoDTO = service.buscarPorId(id);
        return ResponseEntity.ok(productoDTO);
    }
    /*
    @GetMapping("/{id}")
    public ProductoDTO buscar(@PathVariable Integer id) {
        ProductoDTO productoDTO = productoService.buscarPorId(id);
        return productoDTO;
    }*/

    // FIND BY ID CIUDAD / GET BY CIUDAD
    @GetMapping("/ciudad/{id}")
    public Set<ProductoDTO> listarProductosPorCiudad(@PathVariable Integer id, Pageable pageable) {
        return service.buscarProductosPorCiudad(id, pageable);
    }

    // FIND BY ID CATEGORIA / GET BY CATEGORIA
    @GetMapping("/categoria/{id}")
    public Set<ProductoDTO> listarProductosPorCategoria(@PathVariable Integer id, Pageable pageable) {
        return service.buscarProductosPorCategoria(id, pageable);
    }

    // LISTADO DE PRODUCTOS DISPONIBLES POR FECHAS
    @PostMapping("/fechaDisponible")
    public ResponseEntity<?> productosNoDisponibles(@RequestBody ReservaFechasDTO reservaFechasDTO, Pageable pageable) {
        List<ProductoDTO> productoList = service.buscarProductosDisponiblesPorFecha(reservaFechasDTO.getFechaFinal(), reservaFechasDTO.getFechaInicial(), pageable);
        return ResponseEntity.ok().body(productoList);
    }
}
