package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Producto;
import com.grupo11.demo.model.dtos.ProductoDTO;
import com.grupo11.demo.repository.IProductoRepository;
import com.grupo11.demo.service.IProductoSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductoService implements IProductoSevice {

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private IProductoRepository repository;

    @Autowired
    private ReservaService reservaService;

    // SAVE
    private ProductoDTO guardarProducto(ProductoDTO productoDTO) {
        Producto producto = mapper.convertValue(productoDTO, Producto.class);
        repository.save(producto);
        productoDTO.setId(producto.getId());
        return productoDTO;
    }

    // FIND ALL
    @Override
    public Set<ProductoDTO> listarTodo(Pageable pageable) {
        Page<Producto> productos = repository.findAll(pageable);
        Set<ProductoDTO> productoDTOList = new HashSet<>();
        for (Producto producto : productos) {
            productoDTOList.add(mapper.convertValue(producto, ProductoDTO.class));
        }
        return productoDTOList;
    }

    // FIND ALL RANDOM
    // TODO Habría que refactorizar la query para no traer todo desde la base de datos, a consultar con BD si MySQL tiene alguna query que traiga datos random para optimizar la consulta
    public List<ProductoDTO> listarRandom(Pageable pageable) {
        List<Producto> productos = repository.findAll(pageable).getContent();
        List<ProductoDTO> productoDTOS = productos.stream()
                .map(producto -> mapper.convertValue(producto, ProductoDTO.class))
                .collect(Collectors.toList());
        Collections.shuffle(productoDTOS);
        //int randomSeriesLength = 4;
        //return productoDTOS.subList(0, randomSeriesLength);
        return productoDTOS;
    }

    // SAVE
    @Override
    public ProductoDTO agregar(ProductoDTO productoDTO) {
        return guardarProducto(productoDTO);
    }

    // FIND BY ID
    @Override
    public ProductoDTO buscarPorId(Integer id) {
        Producto producto = repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format("El id no pudo ser encontrado", id)));
        return mapper.convertValue(producto, ProductoDTO.class);
    }

    // UPDATE
    @Override
    public ProductoDTO actualizar(ProductoDTO productoDTO) {
        Producto producto = mapper.convertValue(productoDTO, Producto.class);
        repository.findById(producto.getId()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(repository.save(producto), ProductoDTO.class);
    }

    // DELETE
    @Override
    public void eliminar(Integer id) {
        repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format("El id no pudo ser encontrado y no se pudo eliminar", id)));
        repository.deleteById(id);
    }


    // FIND BY ID CIUDAD
    @Override
    public Set<ProductoDTO> buscarProductosPorCiudad(Integer idCiudad, Pageable pageable) {
        List<Producto> productos = repository.findAllByCiudad(idCiudad, pageable);
        Set<ProductoDTO> productoDTOList = new HashSet<>();
        for (Producto producto : productos) {
            productoDTOList.add(mapper.convertValue(producto, ProductoDTO.class));
        }
        return productoDTOList;


    }

    // FIND BY ID CATEGORIA
    public Set<ProductoDTO> buscarProductosPorCategoria(Integer idCategoria, Pageable pageable) {
        List<Producto> productos = repository.findAllByCategoria(idCategoria, pageable);
        Set<ProductoDTO> productoDTOList = new HashSet<>();
        for (Producto producto : productos) {
            productoDTOList.add(mapper.convertValue(producto, ProductoDTO.class));
        }
        return productoDTOList;
    }

    // BUSCAR PRODUCTOS DISPONIBLES POR FECHA
    public List<ProductoDTO> buscarProductosDisponiblesPorFecha(LocalDate fechaSalida, LocalDate fechaIngreso, Pageable pageable){
        List<Producto> productos =  repository.buscarProductosDisponiblesPorFecha(fechaSalida, fechaIngreso, pageable);
       return productos.stream().map(producto -> mapper.convertValue(producto, ProductoDTO.class)).collect(Collectors.toList());
    }

    // BUSCAR PRODUCTOS DISPONIBLES POR CIUDAD Y POR FECHA
    public List<ProductoDTO> buscarProductosPorCiudadFechas(Integer idCiudad, LocalDate fechaFinal, LocalDate fechaInicial, Pageable pageable) {
        List<Producto> productoList = repository.buscarProductosDisponiblesPorFecha(fechaFinal, fechaInicial,pageable);
        List<Producto> productosCiudad = new ArrayList<>();
        productoList.forEach(producto -> {
            if(producto.getCiudad().getId().equals(idCiudad)){
                productosCiudad.add(producto);
            }
        });
        return productosCiudad.stream().map(producto -> mapper.convertValue(producto, ProductoDTO.class)).collect(Collectors.toList());
    }
}
