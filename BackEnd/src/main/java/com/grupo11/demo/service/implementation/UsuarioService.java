package com.grupo11.demo.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo11.demo.model.Usuario;
import com.grupo11.demo.model.dtos.UsuarioDTO;
import com.grupo11.demo.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UsuarioService implements UserDetailsService {

    @Autowired
    IUsuarioRepository repository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private ObjectMapper mapper;


    // ************************************************************************************//
    // SAVE
    public void agregar(UsuarioDTO usuarioDTO) {
        Usuario usuario = mapper.convertValue(usuarioDTO, Usuario.class);
        usuario.setPassword(bCryptPasswordEncoder.encode(usuario.getPassword()));
        repository.save(usuario);
    }

    // FIND ALL
    public Set<UsuarioDTO> listarTodo() {
        List<Usuario> usuarios = repository.findAll();
        Set<UsuarioDTO> usuarioDTOList = new HashSet<>();
        for (Usuario usuario : usuarios) {
            usuarioDTOList.add(mapper.convertValue(usuario, UsuarioDTO.class));
        }
        return usuarioDTOList;
    }

    // FIND BY ID
    public UsuarioDTO buscarPorId(Integer id) {
        Usuario usuario = repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format("El id no pudo ser encontrado", id)));
        return mapper.convertValue(usuario, UsuarioDTO.class);
    }

    // FIND BY EMAIL / USERNAME
    public Boolean noExisteUsername(String email) {
        return repository.findByUsername(email).isEmpty();
    }

    // UPDATE
    public void actualizar(UsuarioDTO usuarioDTO) {
        Usuario usuario = mapper.convertValue(usuarioDTO, Usuario.class);
        repository.findById(usuario.getId()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        usuario.setPassword(bCryptPasswordEncoder.encode(usuario.getPassword()));
        repository.save(usuario);
    }

    // DELETE
    public void eliminar(Integer id) {
        repository.findById(id).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        repository.deleteById(id);
    }

    // BUSCAR POR EMAIL
    public UsuarioDTO buscarPorUsername(String username) {
        Usuario usuario = repository.findByUsername(username).orElseThrow(() -> new NoSuchElementException());
        return mapper.convertValue(usuario, UsuarioDTO.class);
    }

    // ************************************************************************************//
    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        // Buscamos el usuario en la base de datos, si no existe arroja excepción
        Usuario user = repository.findByUsername(userName).orElseThrow(() -> new UsernameNotFoundException("Invalid Credentials"));

        // Le asignamos los roles al usuario (en este caso cada usuario tiene un solo rol)
        Set<GrantedAuthority> autorizaciones = new HashSet<>();
        GrantedAuthority autorizacion = null;
        autorizacion = new SimpleGrantedAuthority("ROLE_" + user.getRol().getNombre().toUpperCase(Locale.ROOT));
        autorizaciones.add(autorizacion);

        // Generamos un usuario de la librería de SpringSecurity donde indicamos username, password y rol que es lo que necesita spring para hacer las validaciones
        User userDetail = new User(
                userName,
                user.getPassword(),
                true,
                true,
                true,
                true,
                autorizaciones);
        return userDetail;
    }
}
