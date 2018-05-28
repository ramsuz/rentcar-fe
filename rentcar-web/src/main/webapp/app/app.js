//import {inject} from 'aurelia-framework';
//import {HttpClient, json} from 'aurelia-fetch-client';

//@inject(HttpClient)
export class App {

	configureRouter(config, router) {
		config.title = "RentCar TN";
		config.map([
			{
				route: ["", "dashboard"],
				name: "dashboard",
				moduleId: PLATFORM.moduleName("routes/dashboard/index"),
				title: "dashboard",
				nav: true
				//settings: { icon: "home", auth: true}
			},
			{
				route: "search",
				name: "search",
				moduleId: PLATFORM.moduleName("routes/search/index"),
				title: "search",
				nav: true
				//settings: { icon: "home", auth: true}
			},
			{
				route: "cars",
				name: "cars",
				moduleId: PLATFORM.moduleName("routes/cars/index"),
				title: "cars"
			}
		]);
		this.router = router;
	}

/*	heading = 'Rent Car Application WEB';
	message = undefined;

	constructor(httpClient) {
		this.httpClient = httpClient;
	}

	
	activate() {
		this.httpClient.fetch('/rctn/api/hello')
		.then(response => response.json())
		.then(msg => this.message = msg.hello);
	}

	getBrands() {
		this.httpClient.fetch('http://localhost:8333/api/brands')
		.then(response => response.json())
		.then(msg => this.message = msg.value);
	}*/

// /* simulateFetch(fetchResult){
// return new Promise(resolve => {
// setTimeout(() => {
// resolve(fetchResult);
// }, this.simulatedLatency);
// });
// }*
}