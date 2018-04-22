/**
 * 
 */
package com.ktg.rctn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

/**
 * @author RBENALAYA
 *
 */
@SpringBootApplication
public class RentCarUI extends SpringBootServletInitializer {
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(RentCarUI.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(RentCarUI.class, args);
	}
}