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

    private ImagenDTO guardarImagen(ImagenDTO imagenDTO){
        Imagen imagen = mapper.convertValue(imagenDTO, Imagen.class);
        repository.save(imagen);
        imagenDTO.setId_imagen(imagen.getId_imagen());
        return imagenDTO;
    }

    @Override
    public Set<ImagenDTO> listarTodas() {
        List<Imagen> imagenes = repository.findAll();
        Set<ImagenDTO> imagenDTOList = new HashSet<>();
        for (Imagen imagen : imagenes) {
            imagenDTOList.add(mapper.convertValue(imagen, ImagenDTO.class));
        }
        return imagenDTOList;
    }

    @Override
    public ImagenDTO agregar(ImagenDTO imagenDTO) {
        return guardarImagen(imagenDTO);
    }

    @Override
    public ImagenDTO buscarPorId(Integer id) {
        Optional<Imagen> imagen = repository.findById(id);
        ImagenDTO imagenDTO = null;

        if (imagen.isPresent()) {
            imagenDTO = mapper.convertValue(imagen, ImagenDTO.class);
        }
        return imagenDTO;
    }


    @Override
    public ImagenDTO actualizar(ImagenDTO imagenDTO) {
        Imagen imagen = mapper.convertValue(imagenDTO, Imagen.class);
        repository.findById(imagen.getId_imagen()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(repository.save(imagen), ImagenDTO.class);
    }

    @Override
    public void eliminar(Integer id) {
        repository.deleteById(id);
    }

}
