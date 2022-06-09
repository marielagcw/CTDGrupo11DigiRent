package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Producto;
import com.grupo11.demo.model.dtos.ProductoDTO;
import com.grupo11.demo.repository.IProductoRepository;
import com.grupo11.demo.service.IProductoSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductoService implements IProductoSevice {

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private IProductoRepository repository;

    private void guardarProducto(ProductoDTO productoDTO){
        Producto producto = mapper.convertValue(productoDTO, Producto.class);
        repository.save(producto);
    }

    @Override
    public Set<ProductoDTO> listarTodas() {
        List<Producto> productos = repository.findAll();
        Set<ProductoDTO> productoDTOList = new HashSet<>();
        for (Producto producto : productos) {
            productoDTOList.add(mapper.convertValue(producto, ProductoDTO.class));
        }
        return productoDTOList;
    }

    @Override
    public void agregar(ProductoDTO productoDTO) {
        guardarProducto(productoDTO);

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
    public ProductoDTO actualizar(ProductoDTO productoDTO) {
        Producto producto = mapper.convertValue(productoDTO, Producto.class);
        return mapper.convertValue(repository.save(producto), ProductoDTO.class);
    }

    @Override
    public void eliminar(Integer id) {
        repository.deleteById(id);
    }

}
