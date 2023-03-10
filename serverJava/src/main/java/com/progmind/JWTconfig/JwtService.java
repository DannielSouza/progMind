package com.progmind.JWTconfig;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.progmind.models.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

  private static final String SECRET_KEY = "546A576E5A7234753778214125442A462D4A614E645267556B58703273357638";
  
  public String extractUsername(String token){
    return extractClaim(token, Claims::getSubject);
  }


  public <T>T extractClaim(String token, Function <Claims, T> claimsResolver){
    final Claims claims = extractAllClaims(token);
    return claimsResolver.apply(claims);
  }


  public String generateToken(User user){
    return generateToken(new HashMap<>(), user);
  }

  
  public String generateToken(Map<String, Object> extraClaims, User user){



    return Jwts
          .builder()
          .setClaims(extraClaims)
          .setSubject(user.getEmail())
          .setIssuedAt(new Date(System.currentTimeMillis()))
          .setExpiration(new Date(System.currentTimeMillis() + 10000 * 60 * 48))
          .signWith(getSignKey(), SignatureAlgorithm.HS256)
          .compact();
  }


  public Boolean isTokenValid(String token, UserDetails userDetails){
    final String username = extractUsername(token);
    return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
  }


  private boolean isTokenExpired(String token) {
    return extractExpiration(token).before(new Date());
  }


  private Date extractExpiration(String token) {
    return extractClaim(token, Claims::getExpiration);
  }


  private Claims extractAllClaims(String token){
    return Jwts
            .parserBuilder()
            .setSigningKey(getSignKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
  }

  private Key getSignKey() {
    byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
    return Keys.hmacShaKeyFor(keyBytes);
  }
}
