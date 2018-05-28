import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';


@inject(Router)
export class Index {

	  constructor(router){
	    this.router = router;
	  }

	  someMethod(){
	    this.router.navigate("cars");
	  }
}