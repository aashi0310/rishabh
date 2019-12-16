import { Component, ViewChild, Renderer } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public toggle : boolean = false;
  public loggedInUser ;
  constructor(public router: Router, private render:Renderer) {
   
  }

  //show selective items of menu 
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loggedInUser = localStorage.getItem('loggedInUser');
      }
    });
  }
  //Toggle responsive menu
  openHiddenMenu(event:any){
     this.toggle = this.toggle === false ? true : false;  
  }

  //Toggle responsive menu
  hideHiddenMenu(event:any){
    var divToChange = document.getElementById('hidden-menu');
    divToChange.classList.remove('active'); 
    this.toggle = false;  
  }

  //logout of seesion
  logout() {
    event.preventDefault();
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
  
}