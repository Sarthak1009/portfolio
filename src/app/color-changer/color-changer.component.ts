import { Component, EventEmitter, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent implements OnInit{
  constructor(private renderer: Renderer2) { }
  open: boolean = false; // Toggle variable for color switcher panel
  toggleclass() {
    this.open = !this.open // on Click set ture if false
  }
  @Output() colorSelection = new EventEmitter<string>(); //Emmits color ids
  loadedfeat = "c1" //stores color ids
  onToggle(feat: string) { // function to change template color
    this.loadedfeat = feat;
    this.colorSelection.emit(feat);
    if(this.loadedfeat === 'c1') {
      document.body.style.setProperty('--skin-color', '#ec1839');
    }
    if(this.loadedfeat === 'c2') {
      document.body.style.setProperty('--skin-color', '#fa5b05');
    }
    if(this.loadedfeat === 'c3') {
      document.body.style.setProperty('--skin-color', '#37b182');
    }
    if(this.loadedfeat === 'c4') {
      document.body.style.setProperty('--skin-color', '#1854b4');
    }
    if(this.loadedfeat === 'c5') {
      document.body.style.setProperty('--skin-color', '#f021b2');
    }
  }
  toggleClass(event: any, className: string) { //Class toggler
    const hasClass = event.classList.contains(className);
    if(hasClass) {
      this.renderer.removeClass(event, className);
    } else {
      this.renderer.addClass(event, className);
    }
  }
  darkMode: boolean = false;
  toggleClassDM() { //Class toggler for dark mode
    // const hasClass = event.classList.contains(className);
    document.body.classList.toggle("dark");
    this.darkMode = !this.darkMode;
    // if(hasClass) {
    //   this.renderer.addClass(event, "fa-moon");
    //   this.renderer.removeClass(event, className);
    // } else {
    //   this.renderer.addClass(event, className);
    //   this.renderer.removeClass(event, "fa-moon");
    // }
  }
  ngOnInit(): void {
    console.log()
  }
}
