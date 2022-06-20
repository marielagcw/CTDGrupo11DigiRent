package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Producto;
import com.grupo11.demo.model.Reserva;
import com.grupo11.demo.model.dtos.ProductoDTO;
import com.grupo11.demo.model.dtos.ReservaDTO;
import com.grupo11.demo.repository.IReservaRepository;
import com.grupo11.demo.service.IReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ReservaService implements IReservaService {

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private IReservaRepository repository;

    // SAVE
    @Override
    public ReservaDTO agregar(ReservaDTO reservaDTO) {
        Reserva reserva = mapper.convertValue(reservaDTO, Reserva.class);
        repository.save(reserva);
        reservaDTO.setId(reserva.getId());
        return reservaDTO;
    }

    // FIND ALL
    @Override
    public Set<ReservaDTO> listarTodas() {
        List<Reserva> reservas = repository.findAll();
        Set<ReservaDTO> reservaDTOList = new HashSet<>();
        for (Reserva reserva : reservas) {
            reservaDTOList.add(mapper.convertValue(reserva, ReservaDTO.class));
        }
        return reservaDTOList;
    }

    // FIND BY ID
    @Override
    public ReservaDTO buscarPorId(Integer id) {
        Optional<Reserva> reserva = repository.findById(id);
        ReservaDTO reservaDTO = null;
        if (reserva.isPresent()) {
            reservaDTO = mapper.convertValue(reserva, ReservaDTO.class);
        }
        return reservaDTO;
    }

    // UPDATE
    @Override
    public ReservaDTO actualizar(ReservaDTO reservaDTO) {
        Reserva reserva = mapper.convertValue(reservaDTO, Reserva.class);
        repository.findById(reserva.getId()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(repository.save(reserva), ReservaDTO.class);
    }

    // DELETE
    @Override
    public void eliminar(Integer id) {
        repository.deleteById(id);
    }

    // FIND ALL BY PRODUCT
    public List<ReservaDTO> buscarReservasPorProducto(Integer id, Pageable pageable) {
        List<Reserva> reservas = repository.findAllByProducto(id, pageable);
        return reservas.stream()
                .map(reserva -> mapper.convertValue(reserva, ReservaDTO.class))
                .collect(Collectors.toList());
    }

}
