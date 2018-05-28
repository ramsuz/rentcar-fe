export class AuthFilterValueConverter {
	toView(routes) {
		let isAuthenticated = true; //this.authService.isLoggedIn();
		let isAdmin = false; //isAuthenticated && this.authService.getUser().admin;

		return routes.filter(r => r.settings.auth === undefined 
				|| (r.settings.auth === isAuthenticated 
						&& (!r.settings.admin || isAdmin)));
	}
}