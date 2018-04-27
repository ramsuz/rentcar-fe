/**
 * 
 */
package com.ktg.rctn.web.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author RBENALAYA
 *
 */
@RestController
@RequestMapping("/api")
public class HelloController {

	@RequestMapping("/hello")
	public Hello helloRentCar() {
		return new Hello();
	}

	class Hello {
		String hello;

		Hello() {
			this.hello = "Hello Rent Car";
		}

		public String getHello() {
			return hello;
		}

		public void setHello(String hello) {
			this.hello = hello;
		}
		
	}
}
