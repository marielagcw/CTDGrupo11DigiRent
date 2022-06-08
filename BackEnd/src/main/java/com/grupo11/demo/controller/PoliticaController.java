//package com.grupo11.demo.controller;
//
//import com.grupo11.demo.model.dtos.PoliticaDTO;
//import com.grupo11.demo.service.implementation.PoliticaService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Set;
//
//@RestController
//@RequestMapping("/politicas")
//public class PoliticaController {
//
//    @Autowired
//    private PoliticaService politicaService;
//
//    @GetMapping("/listarTodos")
//    public Set<PoliticaDTO> listarTodos() {
//        return politicaService.listarTodas();
//    }
//
//    @PostMapping("/agregar")
//    public ResponseEntity<?> guardar(@RequestBody PoliticaDTO politica) {
//        politicaService.agregar(politica);
//        return ResponseEntity.ok(politica);
//    }
//
//    @DeleteMapping("/eliminar/{id}")
//    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
//        politicaService.eliminar(id);
//        return ResponseEntity.ok(HttpStatus.OK);
//    }
//
//    @PutMapping("/actualizar")
//    public ResponseEntity<?> editarPolitica(@RequestBody PoliticaDTO politicaDTO) {
//        politicaService.actualizar(politicaDTO);
//        return ResponseEntity.ok(politicaDTO);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<PoliticaDTO> buscar(@PathVariable Integer id){
//        PoliticaDTO politicaDTO = politicaService.buscarPorId(id);
//        return ResponseEntity.ok(politicaDTO);
//    }
//
//}
