package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Producto;
import com.grupo11.demo.model.dtos.ProductoDTO;
import com.grupo11.demo.repository.IProductoRepository;
import com.grupo11.demo.service.IProductoSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ProductoService implements IProductoSevice {

    private ObjectMapper mapper;
    private IProductoRepository repository;

    @Autowired
    public ProductoService(ObjectMapper mapper, IProductoRepository repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

    @Override
    public ProductoDTO agregar(ProductoDTO productoDTO) {
        Producto productoEntity = mapper.convertValue(productoDTO, Producto.class);
        return mapper.convertValue(repository.save(productoEntity), ProductoDTO.class);

    }

    @Override
    public ProductoDTO buscarPorId(Integer id) {
        Optional<Producto> producto = repository.findById(id);
        ProductoDTO productoDTO = null;

        if (producto.isPresent()) {
            productoDTO = mapper.convertValue(producto, ProductoDTO.class);
        }
        return productoDTO;
    }

    @Override
    public List<ProductoDTO> listarTodas() {
        List<ProductoDTO> productoDTOList = new ArrayList<>();
        for (Producto producto : repository.findAll()) {
            productoDTOList.add(mapper.convertValue(producto, ProductoDTO.class));
        }
        return productoDTOList;
    }

    @Override
    public ProductoDTO editar(ProductoDTO productoDTO) {
        Producto producto = mapper.convertValue(productoDTO, Producto.class);
        return mapper.convertValue(repository.save(producto), ProductoDTO.class);
    }

    @Override
    public void eliminar(Integer id) {
        Optional<Producto> Producto = repository.findById(id);
        if (Producto.isPresent())
            repository.deleteById(id);
        else
            throw new NoSuchElementException();
    }

}
