package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Producto;
import com.grupo11.demo.model.dtos.ProductoDTO;
import com.grupo11.demo.repository.IProductoRepository;
import com.grupo11.demo.service.IProductoSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductoService implements IProductoSevice {

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private IProductoRepository repository;

    // SAVE
    private ProductoDTO guardarProducto(ProductoDTO productoDTO) {
        Producto producto = mapper.convertValue(productoDTO, Producto.class);
        repository.save(producto);
        productoDTO.setId_producto(producto.getId_producto());
        return productoDTO;
    }

    // FIND ALL
    @Override
    public List<ProductoDTO> listarTodas(Pageable pageable) {
        List<Producto> productos = repository.findAll(pageable).getContent();
        return productos.stream()
                .map(producto -> mapper.convertValue(producto, ProductoDTO.class))
                .collect(Collectors.toList());
    }

    // FIND ALL RANDOM
    // TODO Habría que refactorizar la query para no traer todo desde la base de datos, a consultar con BD si MySQL tiene alguna query que traiga datos random para optimizar la consulta
    public List<ProductoDTO> listarRandom(Pageable pageable) {
        List<Producto> productos = repository.findAll(pageable).getContent();
        List<ProductoDTO> productoDTOS = productos.stream()
                .map(producto -> mapper.convertValue(producto, ProductoDTO.class))
                .collect(Collectors.toList());
        Collections.shuffle(productoDTOS);
        int randomSeriesLength = 4;
        return productoDTOS.subList(0, randomSeriesLength);
    }

    // SAVE
    @Override
    public ProductoDTO agregar(ProductoDTO productoDTO) {
        return guardarProducto(productoDTO);
    }

    // FIND BY ID
    @Override
    public ProductoDTO buscarPorId(Integer id) {
        Optional<Producto> producto = repository.findById(id);
        ProductoDTO productoDTO = null;

        if (producto.isPresent()) {
            productoDTO = mapper.convertValue(producto, ProductoDTO.class);
        }
        return productoDTO;
    }

    // UPDATE
    @Override
    public ProductoDTO actualizar(ProductoDTO productoDTO) {
        Producto producto = mapper.convertValue(productoDTO, Producto.class);
        repository.findById(producto.getId_producto()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(repository.save(producto), ProductoDTO.class);
    }

    //DELETE
    @Override
    public void eliminar(Integer id) {
        repository.deleteById(id);
    }

    // FIND BY ID CIUDAD
    @Override
    public List<ProductoDTO> buscarProductosPorCiudad(Integer id, Pageable pageable) {
        List<Producto> productos = repository.findAllByCiudades(id, pageable);
        return productos.stream()
                .map(producto -> mapper.convertValue(producto, ProductoDTO.class))
                .collect(Collectors.toList());
    }

    // FIND BY ID CATEGORIA
    public List<ProductoDTO> buscarProductosPorCategoria(Integer id, Pageable pageable) {
        List<Producto> productos = repository.findAllByCategorias(id, pageable);
        return productos.stream()
                .map(producto -> mapper.convertValue(producto, ProductoDTO.class))
                .collect(Collectors.toList());
    }

}
