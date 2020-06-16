package com.heliton.config;

// Security //
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private SecurityService ssUserDetailsService;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
        //System.out.println(new BCryptPasswordEncoder().encode("123"));
		http
		.csrf().disable()
		.authorizeRequests()
			.antMatchers(HttpMethod.GET, "/api/**").permitAll()
			.antMatchers("/","/resources/**").permitAll()
			.anyRequest()
			.authenticated()
		.and()
		.formLogin()
			.loginPage("/login").permitAll()
			.defaultSuccessUrl("/home").permitAll()
		.and()
		.logout()
			.logoutUrl("/logout").permitAll()
			.deleteCookies("JSESSIONID");
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder builder) throws Exception {
		builder
			.userDetailsService(ssUserDetailsService)
			.passwordEncoder(new BCryptPasswordEncoder());		
	}	
}