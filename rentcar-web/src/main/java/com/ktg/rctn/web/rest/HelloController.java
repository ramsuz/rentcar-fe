/**
 * 
 */
package com.ktg.rctn.web.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author RBENALAYA
 *
 */
@RestController
@RequestMapping("/api")
public class HelloController {

	@RequestMapping("/hello")
	public String helloRentCar() {
		return "Hello Rent Car";
	}
}
