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
                .antMatchers("/usuarios/authenticate", "/usuarios/registro").permitAll()
                .antMatchers("/categorias/listarTodos**").permitAll()
                .antMatchers("/productos/listarTodosRandom**").permitAll()
                .antMatchers("/v3/api-docs/**",
                        "/swagger-ui*", "/swagger-ui/**").permitAll()
                .antMatchers().permitAll()
                .antMatchers("/productos/fechaDisponible").permitAll()
                .antMatchers("/productos/{id}").permitAll()
                .antMatchers("/productos/ciudad/{id}").permitAll()
                .antMatchers("/productos/categoria/{id}").permitAll()
                .antMatchers("/categorias/listarTodos", "/categorias/{id}").permitAll()
                .antMatchers("/ciudades/listarTodos", "/ciudades/{id}").permitAll()
                .antMatchers("/caracteristicas/listarTodos**", "/caracteristicas/{id}").permitAll()
                .antMatchers("/imagenes/listarTodos", "/imagenes/{id}").permitAll()
                .antMatchers("/politicas/listarTodos", "/politicas/{id}").permitAll()
                .antMatchers("/elementosPoliticas/listarTodos", "/elementosPoliticas/{id}").permitAll()
                .antMatchers("/**").hasAuthority("ROLE_ADMINISTRADOR")
                .antMatchers("/productos/listarTodos**").hasAnyAuthority("ROLE_USUARIO_PRIVADO", "ROLE_ADMINISTRADOR")
                .anyRequest()
//                .permitAll()
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