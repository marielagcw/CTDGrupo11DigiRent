package com.grupo11.demo.service;

import com.grupo11.demo.model.dtos.ImagenDTO;

import java.util.Set;

public interface IImagenService {

    Set<ImagenDTO> listarTodo();

    ImagenDTO agregar(ImagenDTO imagenDTO);

    ImagenDTO buscarPorId(Integer id);

    ImagenDTO actualizar(ImagenDTO imagenDTO);

    void eliminar(Integer id);

}
