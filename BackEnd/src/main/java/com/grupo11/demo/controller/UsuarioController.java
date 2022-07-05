package com.grupo11.demo.controller;

import com.grupo11.demo.service.implementation.UsuarioService;
import com.grupo11.demo.security.jwt.IJwtService;
import com.grupo11.demo.security.model.AuthenticationRequest;
import com.grupo11.demo.security.model.AuthenticationResponse;
import com.grupo11.demo.model.dtos.UsuarioDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.Set;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private IJwtService jwtService;
    @Autowired
    private UsuarioService service;

    // FIND ALL
    @GetMapping("/listarTodos")
    @RolesAllowed("SUPER")
    public Set<UsuarioDTO> listarTodos() {
        return service.listarTodo();
    }

    // SAVE
    @PostMapping("/registro")
    public ResponseEntity<?> guardar(@RequestBody UsuarioDTO usuarioDTO) {
        ResponseEntity response;
        if(!service.noExisteUsername(usuarioDTO.getEmail())) {
            response = ResponseEntity.status(409).body("El usuario ya existe");
        } else {
            service.agregar(usuarioDTO);
            response = ResponseEntity.status(201).body("El usuario fue registrado con éxito");
        }
        return response;
    }

    // DELETE
    @DeleteMapping("/eliminar/{id}")
    @RolesAllowed({"USUARIO_PRIVADO", "SUPER"})
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        service.eliminar(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // UPDATE
    @PutMapping("/actualizar")
    @RolesAllowed({"USUARIO_PRIVADO", "SUPER"})
    public ResponseEntity<?> editarProducto(@RequestBody UsuarioDTO usuarioDTO) {
        service.actualizar(usuarioDTO);
        return ResponseEntity.ok("El usuario fue modificado con éxito");
    }

    // FIND BY ID
    @GetMapping("/{id}")
    @RolesAllowed({"USUARIO_PRIVADO", "SUPER"})
    public ResponseEntity<UsuarioDTO> buscar(@PathVariable Integer id) {
        UsuarioDTO usuarioDTO = service.buscarPorId(id);
        return ResponseEntity.ok(usuarioDTO);

    }

    // TOKEN
    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect", e);
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtService.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse((jwt)));
    }
}
