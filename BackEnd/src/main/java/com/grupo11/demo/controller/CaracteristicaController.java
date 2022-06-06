package com.grupo11.demo.controller;

import com.grupo11.demo.model.dtos.CaracteristicaDTO;
import com.grupo11.demo.service.implementation.CaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/caracteristicas") // ver producto caracteristicas
public class CaracteristicaController {

    @Autowired
    private CaracteristicaService caracteristicaService;

    @PostMapping("/agregar")
    public CaracteristicaDTO guardar(@RequestBody CaracteristicaDTO caracteristica) {
        return caracteristicaService.agregar(caracteristica);
    }

    @GetMapping("/listarTodos")
    public List<CaracteristicaDTO> listarTodos() {
        return caracteristicaService.listarTodas();
    }

    @PutMapping("/actualizar")
    public ResponseEntity<CaracteristicaDTO> editarCaracteristica(@RequestBody CaracteristicaDTO caracteristicaDTO) {
        ResponseEntity<CaracteristicaDTO> response;

        if (caracteristicaDTO.getId_caracterisica() != null && caracteristicaService.buscarPorId(caracteristicaDTO.getId_caracterisica()) != null)
            response = ResponseEntity.ok(caracteristicaService.editar(caracteristicaDTO));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<CaracteristicaDTO> buscar(@PathVariable Integer id){
        CaracteristicaDTO caracteristicaDTO = caracteristicaService.buscarPorId(id);
        return ResponseEntity.ok(caracteristicaDTO);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) {
        ResponseEntity<String> response;

        if (caracteristicaService.buscarPorId(id) != null) {
            caracteristicaService.eliminar(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Eliminado");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

}
