import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class App {
	heading = 'Rent Car Application WEB';
	message = undefined;

	constructor(httpClient) {
		this.httpClient = httpClient;
	}

	activate() {
		this.httpClient.fetch('/rctn/api/hello')
		.then(response => response.json())
		.then(msg => this.message = msg.hello);
	}

///*	simulateFetch(fetchResult){
//		return new Promise(resolve => {
//			setTimeout(() => {
//                resolve(fetchResult);
//            }, this.simulatedLatency);
//        });
//    }*
}