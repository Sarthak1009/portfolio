import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loadedfeat = "c1";
  imgChange(feat: any) {
    this.loadedfeat = feat;
    console.log(feat)
  }
}
