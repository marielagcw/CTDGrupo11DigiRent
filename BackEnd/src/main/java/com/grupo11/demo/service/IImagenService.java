package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.ImagenDTO;

import java.util.List;

public interface IImagenService<T> {

    ImagenDTO agregar(ImagenDTO imagenDTO);

    List<ImagenDTO> listarTodas();

    ImagenDTO buscarPorId(Integer id);

    ImagenDTO editar(ImagenDTO imagenDTO);

    void eliminar(Integer id);

}
