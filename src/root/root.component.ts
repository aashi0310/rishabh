import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent {

  public isScrolled = false;

  //Go to top
  goToTop() {
    window.scrollTo(0,0);
  }

constructor(@Inject(DOCUMENT) private document: any) {}
@HostListener('window:scroll', [])
onWindowScroll() {
    const number = window.scrollY;
    var divToChange = document.getElementById('goToButton');
    if (number > 200) {
        this.isScrolled = true;
        divToChange.classList.add('active'); 
    } else if (this.isScrolled && number < 10) {
        this.isScrolled = false;
        divToChange.classList.remove('active'); 
    }
}
}

