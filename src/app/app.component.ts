import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  changeColor(){
    document.documentElement.style.setProperty('--skin-color', 'blue');
  }
 @Output() featureSelected = new EventEmitter<string>();
  onSelect(feat: string, event: any) {
    this.featureSelected.emit(feat)
    this.loadedFeat = feat;
    const hasClass = event.classList.contains("open");
    if(hasClass) {
      this.renderer.removeClass(event, "open");
    }
  }
  loadedFeat: string ="1";
  // onNavigate(feature: any) {
  //   this.loadedFeat = feature;
  //   console.log(this.loadedFeat)
  // }
  img_loadedfeat = "c1";
  imgChange(feat: any) {
    this.img_loadedfeat = feat;
    console.log(feat)
  }
  constructor(public renderer: Renderer2) {}
  toggleClass(event: any, className: string) { //Class toggler
    const hasClass = event.classList.contains(className);
    if(hasClass) {
      this.renderer.removeClass(event, className);
    } else {
      this.renderer.addClass(event, className);
    }
  }
}
