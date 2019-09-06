import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent {

  //Go to top
  goToTop() {
    window.scrollTo(0,0);
  }
}

