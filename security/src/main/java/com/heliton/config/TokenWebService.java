package com.heliton.config;

// Java //
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Jwts;
import java.util.Collections;
import java.util.Date;

public class TokenWebService {
	
	// EXPIRATION_TIME = 10 dias
	static final long EXPIRATION_TIME = 860_000_000;
	static final String SECRET = "MySecret";
	static final String TOKEN_PREFIX = "Token";
	static final String HEADER_STRING = "Acesso_Token";
	private static boolean status = false;	
	
	// Add Token //
	public static void addAuthentication(HttpServletResponse response, String username) {
		String JWT = Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
        response.addHeader(HEADER_STRING, TOKEN_PREFIX + " " + JWT);
	}

	// Get Token //
	public static Authentication getAuthentication(HttpServletResponse response) {
		String token = response.getHeader(HEADER_STRING);

		if (token != null) {
			String user = Jwts.parser()
					.setSigningKey(SECRET)
					.parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
					.getBody()
					.getSubject();
			if (user != null) {
				return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
			}
		}
		return null;
	}

    // Get Usuario Logado Security //
    public static String getUsuarioSecurity() {
        Authentication authentication = (Authentication) SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
           authentication.getName();
        }
        return authentication.getName();
    }	

	// Add Status //
	public static void setStatus(boolean val) {
		status = val;
	}

	// Get Status //
	public static boolean getStatus() {
		return status;
	}
}