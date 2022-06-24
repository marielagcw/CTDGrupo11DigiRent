package com.grupo11.demo.security.jwt;

import com.grupo11.demo.model.dtos.UsuarioDTO;
import com.grupo11.demo.service.implementation.UsuarioService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtService implements IJwtService {

    // El SECRET_KEY es una palabra clave para generar y posteriormente validar el token
    private final String SECRET_KEY = "secret";
    @Autowired
    private UsuarioService usuarioService;

    @Value("${minutesToken}")
    private int minutesToken;

    @Override
    public String extractUserName(String token) {
        return extractClaimUsername(token);
    }

    @Override
    public Date extractExpiration(String token) {
        return extractClaimDate(token);
    }

    @Override
    public Date extractClaimDate(String token) {
        Claims claims = extractAllClaims(token);
        return claims.getExpiration();
    }

    @Override
    public String extractClaimUsername(String token) {
        Claims claims = extractAllClaims(token);
        return claims.getSubject();
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        UsuarioDTO usuario = usuarioService.buscarPorUsername(userDetails.getUsername());
        claims.put("Nombre", usuario.getNombre() );
        claims.put("Apellido", usuario.getApellido());
        claims.put("Email", usuario.getEmail());
        claims.put("Id", usuario.getId());
        return createToken(claims, userDetails.getUsername());
    }


    private String createToken(Map<String, Object> claims, String subject) {
        Date now = new Date();
        return Jwts
                .builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(now.getTime() + minutesToken * 60 * 1000))// 10 minutos
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    @Override
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUserName(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

}
