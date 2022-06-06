package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Imagen;
import com.grupo11.demo.model.dtos.ImagenDTO;
import com.grupo11.demo.repository.IImagenRepository;
import com.grupo11.demo.service.IImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ImagenService implements IImagenService {

    private ObjectMapper mapper;
    private IImagenRepository repository;

    @Autowired
    public ImagenService(ObjectMapper mapper, IImagenRepository repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

    @Override
    public ImagenDTO agregar(ImagenDTO imagenDTO) {
        Imagen imagenEntity = mapper.convertValue(imagenDTO, Imagen.class);
        return mapper.convertValue(repository.save(imagenEntity), ImagenDTO.class);

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
    public List<ImagenDTO> listarTodas() {
        List<ImagenDTO> imagenDTOList = new ArrayList<>();
        for (Imagen imagen : repository.findAll()) {
            imagenDTOList.add(mapper.convertValue(imagen, ImagenDTO.class));
        }
        return imagenDTOList;
    }

    @Override
    public ImagenDTO editar(ImagenDTO imagenDTO) {
        Imagen imagen = mapper.convertValue(imagenDTO, Imagen.class);
        return mapper.convertValue(repository.save(imagen), ImagenDTO.class);
    }

    @Override
    public void eliminar(Integer id) {
        Optional<Imagen> Imagen = repository.findById(id);
        if (Imagen.isPresent())
            repository.deleteById(id);
        else
            throw new NoSuchElementException();
    }

}
