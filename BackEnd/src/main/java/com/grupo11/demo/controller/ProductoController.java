package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.ProductoDTO;
import com.grupo11.demo.service.implementation.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/productos")
@CrossOrigin
public class ProductoController {

    @Autowired
    private ProductoService service;

    // FIND ALL / GET ALL
    @GetMapping("/listarTodos")
    @RolesAllowed({"USUARIO_PRIVADO", "ADMINISTRADOR", "SUPER"})
    public ResponseEntity<?> listarTodos(Pageable pageable, @RequestParam(required = false) String ord, @RequestParam(required = false) String field, @RequestParam(required = false) String atributoOrden, @RequestParam(required = false) String atributo) {

        // Lista que se retorna
        List<ProductoDTO> productos;

        // ORDEN DEL LISTADO DE PRODUCTOS
        if (ord == null || field == null) {
            productos = service.listarTodo(pageable);
        } else {
            Sort.by(Sort.Order.asc("id"));
            PageRequest of = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.fromString(ord), field);
            productos = service.listarTodo(of);
        }
        // ORDEN DE LAS LISTAS INTERNAS DE CADA PRODUCTO
        if (atributoOrden != null && atributo != null) {
            productos = productos.stream().map(productoDTO -> service.ordenarListasInternas(productoDTO, atributoOrden, atributo)).collect(Collectors.toList());
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
    @RolesAllowed("ADMINISTRADOR")
    public ResponseEntity<?> guardar(@RequestBody ProductoDTO producto) {
        service.agregar(producto);
        return ResponseEntity.status(201).body(producto);
    }

    // DELETE
    @DeleteMapping("/eliminar/{id}")
    @RolesAllowed("ADMINISTRADOR")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        service.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // UPDATE / PUT
    @PutMapping("/actualizar")
    @RolesAllowed("ADMINISTRADOR")
    public ResponseEntity<?> editarProducto(@RequestBody ProductoDTO productoDTO) {
        service.actualizar(productoDTO);
        return ResponseEntity.ok(productoDTO);
    }

    // FIND BY ID / GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> buscar(@PathVariable Integer id, @RequestParam(required = false) String atributoOrden, @RequestParam(required = false) String atributo) {
        ProductoDTO productoDTO = service.buscarPorId(id);
        if (atributoOrden != null && atributo != null) {
            service.ordenarListasInternas(productoDTO, atributoOrden, atributo);
        }
        return ResponseEntity.ok(productoDTO);
    }


    // FIND BY ID CIUDAD / GET BY CIUDAD
    @GetMapping("/ciudad/{id}")
    public ResponseEntity<?> listarProductosPorCiudad(@PathVariable Integer id, Pageable pageable, @RequestParam(required = false) String ord, @RequestParam(required = false) String field, @RequestParam(required = false) String atributoOrden, @RequestParam(required = false) String atributo) {

        // Lista que se retorna
        List<ProductoDTO> productos;

        // ORDEN DEL LISTADO DE PRODUCTOS
        if (ord == null || field == null) {
            productos = service.buscarProductosPorCiudad(id, pageable);
        } else {
            Sort.by(Sort.Order.asc("id"));
            PageRequest of = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.fromString(ord), field);
            productos = service.buscarProductosPorCiudad(id, of);
        }
        // ORDEN DE LAS LISTAS INTERNAS DE CADA PRODUCTO
        if (atributoOrden != null && atributo != null) {
            productos = productos.stream().map(productoDTO -> service.ordenarListasInternas(productoDTO, atributoOrden, atributo)).collect(Collectors.toList());
        }
        return ResponseEntity.ok(productos);
    }

    // FIND BY ID CATEGORIA / GET BY CATEGORIA
    @GetMapping("/categoria/{id}")
    public ResponseEntity<?> listarProductosPorCategoria(@PathVariable Integer id, Pageable pageable, @RequestParam(required = false) String ord, @RequestParam(required = false) String field, @RequestParam(required = false) String atributoOrden, @RequestParam(required = false) String atributo) {

        // Lista que se retorna
        List<ProductoDTO> productos;

        // ORDEN DEL LISTADO DE PRODUCTOS
        if (ord == null || field == null) {
            productos = service.buscarProductosPorCategoria(id, pageable);
        } else {
            Sort.by(Sort.Order.asc("id"));
            PageRequest of = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.fromString(ord), field);
            productos = service.buscarProductosPorCategoria(id, of);
        }
        // ORDEN DE LAS LISTAS INTERNAS DE CADA PRODUCTO
        if (atributoOrden != null && atributo != null) {
            productos = productos.stream().map(productoDTO -> service.ordenarListasInternas(productoDTO, atributoOrden, atributo)).collect(Collectors.toList());
        }
        return ResponseEntity.ok(productos);

    }

    // LISTADO DE PRODUCTOS DISPONIBLES POR FECHAS
    @GetMapping("/fechaDisponible")
    public ResponseEntity<?> productosDisponiblesFecha(@RequestParam("fechaInicial")
                                                       @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaInicial,
                                                       @RequestParam("fechaFinal")
                                                       @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaFinal,
                                                       Pageable pageable) {
        List<ProductoDTO> productoList = service.buscarProductosDisponiblesPorFecha(fechaFinal, fechaInicial, pageable);
        return ResponseEntity.ok().body(productoList);
    }

    // LISTADO DE PRODUCTOS DISPONIBLES POR CIUDAD Y POR FECHAS
    @GetMapping("/ciudad/{id}/fechaDisponible")
    public ResponseEntity<?> productosDisponiblesCiudadFecha(@PathVariable Integer id,
                                                             @RequestParam("fechaInicial")
                                                             @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaInicial,
                                                             @RequestParam("fechaFinal")
                                                             @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaFinal,
                                                             Pageable pageable) {
        List<ProductoDTO> productoList = service.buscarProductosPorCiudadFechas(id,fechaFinal, fechaInicial, pageable);
        return ResponseEntity.ok().body(productoList);
    }

}
