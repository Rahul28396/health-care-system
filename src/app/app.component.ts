import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'health-care-system';

  showNavbar: boolean = true;
  router: Router = inject(Router);

  ngOnInit(): void {
    this.router.events.subscribe(val =>{
      if(val instanceof NavigationEnd){
        this.showNavbar = !(val.url === '/signin' || val.url === '/register');
      }
    });
  }

}
