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
    IUsuarioRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private ObjectMapper mapper;


    // ************************************************************************************//
    // SAVE
    public UsuarioDTO agregar(UsuarioDTO usuarioDTO) {
        Usuario usuario = mapper.convertValue(usuarioDTO, Usuario.class);
        usuario.setPassword(bCryptPasswordEncoder.encode(usuario.getPassword()));
        userRepository.save(usuario);
        usuarioDTO.setId(usuario.getId());
        return usuarioDTO;
    }

    // FIND ALL
    public Set<UsuarioDTO> listarTodo() {
        List<Usuario> usuarios = userRepository.findAll();
        Set<UsuarioDTO> usuarioDTOList = new HashSet<>();
        for (Usuario usuario : usuarios) {
            usuarioDTOList.add(mapper.convertValue(usuario, UsuarioDTO.class));
        }
        return usuarioDTOList;
    }

    // FIND BY ID
    public UsuarioDTO buscarPorId(Integer id) {
        Optional<Usuario> usuario = userRepository.findById(id);
        UsuarioDTO usuarioDTO = null;

        if (usuario.isPresent()) {
            usuarioDTO = mapper.convertValue(usuario, UsuarioDTO.class);
        }
        return usuarioDTO;
    }

    // UPDATE
    public UsuarioDTO actualizar(UsuarioDTO usuarioDTO) {
        Usuario usuario = mapper.convertValue(usuarioDTO, Usuario.class);
        userRepository.findById(usuario.getId()).orElseThrow(() -> {
            return new NoSuchElementException();
        });
        return mapper.convertValue(userRepository.save(usuario), UsuarioDTO.class);
    }

    // DELETE
    public void eliminar(Integer id) {
        userRepository.deleteById(id);
    }


    // ************************************************************************************//
    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        // Buscamos el usuario en la base de datos, si no existe arroja excepción
        Usuario user = userRepository.findByUsername(userName).orElseThrow(() -> new UsernameNotFoundException("Invalid Credentials"));

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
