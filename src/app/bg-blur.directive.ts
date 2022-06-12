import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgBlur]'
})
export class BgBlurDirective {

  constructor(public elementRef: ElementRef, public renderer: Renderer2) { }
  @Input() event = this.elementRef.nativeElement;
  @Input() className: any;
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.event, this.className);
    console.log(this.event);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove("bg-blur");
  }
}
