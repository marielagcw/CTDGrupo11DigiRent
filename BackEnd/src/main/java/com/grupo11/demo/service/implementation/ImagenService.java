package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Imagen;
import com.grupo11.demo.model.dtos.ImagenDTO;
import com.grupo11.demo.repository.IImagenRepository;
import com.grupo11.demo.service.IImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ImagenService implements IImagenService {

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private IImagenRepository repository;

    // SAVE
    private ImagenDTO guardarImagen(ImagenDTO imagenDTO) {
        Imagen imagen = mapper.convertValue(imagenDTO, Imagen.class);
        repository.save(imagen);
        imagenDTO.setId(imagen.getId());
        return imagenDTO;
    }

    // FIND ALL
    @Override
    public Set<ImagenDTO> listarTodo() {
        List<Imagen> imagenes = repository.findAll();
        Set<ImagenDTO> imagenDTOList = new HashSet<>();
        for (Imagen imagen : imagenes) {
            imagenDTOList.add(mapper.convertValue(imagen, ImagenDTO.class));
        }
        return imagenDTOList;
    }

    // SAVE
    @Override
    public ImagenDTO agregar(ImagenDTO imagenDTO) {
        return guardarImagen(imagenDTO);
    }

    // FIND BY ID
    @Override
    public ImagenDTO buscarPorId(Integer id) {
        Imagen imagen = repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format("El id no pudo ser encontrado", id)));
        return mapper.convertValue(imagen, ImagenDTO.class);
    }

    // UPDATE
    @Override
    public ImagenDTO actualizar(ImagenDTO imagenDTO) {
        Imagen imagen = mapper.convertValue(imagenDTO, Imagen.class);
        repository.findById(imagen.getId()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(repository.save(imagen), ImagenDTO.class);
    }

    // DELETE
    @Override
    public void eliminar(Integer id) {
        repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format("El id no pudo ser encontrado y no se pudo eliminar", id)));
        repository.deleteById(id);
    }

}
