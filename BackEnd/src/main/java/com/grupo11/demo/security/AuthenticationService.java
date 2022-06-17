package com.grupo11.demo.security;

import com.grupo11.demo.security.Entities.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class AuthenticationService implements UserDetailsService {

    // DEPENDENCIES
    @Autowired
    IUserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    // METHODS
    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        // Buscamos el usuario en la base de datos, si no existe arroja excepción
        Usuario user = userRepository.getUserByEmail(userName).orElseThrow(()->new UsernameNotFoundException("Invalid Credentials"));

        // Le asignamos los roles al usuario (en este caso cada usuario tiene un solo rol)
        Set<GrantedAuthority> autorizaciones = new HashSet<>();
        GrantedAuthority autorizacion = null;
            autorizacion = new SimpleGrantedAuthority("ROLE_" + user.getRol().getNombre());
            autorizaciones.add(autorizacion);

        // Generamos un usuario acorde a lo que necesita Spring Security para luego seguir validando
        org.springframework.security.core.userdetails.User userDetail = new org.springframework.security.core.userdetails.User(user.getNombre(),
                bCryptPasswordEncoder.encode("password"),
                true,
                true,
                true,
                true,
                autorizaciones);
        return userDetail;
    }
}
