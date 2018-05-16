import 'babel-polyfill';
import { PLATFORM } from "aurelia-pal";

import environment from './environment';

export async function configure(aurelia) {
	aurelia.use.standardConfiguration();
	if (__DEBUG__) {
		aurelia.use.developmentLogging();
		console.info('__DEBUG__ : ' + __DEBUG__);
		console.info('developmentLogging');
	}

	if (environment.debug) {
		console.info('environment debug is active ' + __DEBUG__ + ' - '+ environment.debug)
	}
	await aurelia.start();
	await aurelia.setRoot(PLATFORM.moduleName('app'));
}