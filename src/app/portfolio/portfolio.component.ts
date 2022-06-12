import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public renderer: Renderer2) { }

  ngOnInit(): void {
  }
  bgBlur(event:any) {
    this.renderer.addClass(event, "bg-blur");
}
bgUnBlur(event:any) {
  this.renderer.removeClass(event, "bg-blur");
}
}
