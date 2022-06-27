package com.grupo11.demo.security;

import com.grupo11.demo.security.jwt.JwtRequestFilter;
import com.grupo11.demo.service.implementation.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    // Para poder trabajar con UserDetailsService de Spring
    @Autowired
    private UsuarioService usuarioService;

    // Para poder filtrar a los autorizados/no autorizados
    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    // CONSTRUCTORS
    public SecurityConfiguration() {
    }

    // METHODS
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    // Configuración de los endpoints que serán públicos y de los que serán privados
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf()
                .disable()
                .authorizeRequests()
                // Para acceder a la documentación
                .antMatchers("/v3/api-docs/**",
                        "/swagger-ui*", "/swagger-ui/**").permitAll()
                // Para el acceso a registro y login
                .antMatchers("/usuarios/authenticate", "/usuarios/registro").permitAll()
                // Para renderizado público del Home
                .antMatchers("/categorias/listarTodos**").permitAll()
                .antMatchers("/productos/listarTodosRandom**").permitAll()
                .antMatchers("/categorias/listarTodos", "/categorias/{id}").permitAll()
                .antMatchers("/ciudades/listarTodos", "/ciudades/{id}").permitAll()
                .antMatchers("/productos/ciudad/{id}/fechaDisponible").permitAll()
                // Para la búsqueda de productos
                .antMatchers("/productos/fechaDisponible").permitAll()
                .antMatchers("/productos/ciudad/{id}").permitAll()
                .antMatchers("/productos/categoria/{id}").permitAll()
                // Para el renderizado del producto completo
                .antMatchers("/productos/{id}").permitAll()
                .antMatchers("/caracteristicas/listarTodos**", "/caracteristicas/{id}").permitAll()
                .antMatchers("/imagenes/listarTodos", "/imagenes/{id}").permitAll()
                .antMatchers("/politicas/listarTodos", "/politicas/{id}").permitAll()
                .antMatchers("/elementosPoliticas/listarTodos", "/elementosPoliticas/{id}").permitAll()
                // Permisos para solamente rol administrador
                .antMatchers("/**").hasAuthority("ROLE_ADMINISTRADOR")
                // Permisos para rol administrador y rol usuario privado
                .antMatchers("/productos/listarTodos**", "/reservas**").hasAnyAuthority("ROLE_USUARIO_PRIVADO", "ROLE_ADMINISTRADOR")
                // Los demás endpoints requieren siempre permisos
                .anyRequest()
                //.permitAll()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(usuarioService);
        return provider;
    }
}
