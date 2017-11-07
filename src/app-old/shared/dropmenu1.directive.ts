import {Class, Directive, ElementRef, Renderer2, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropMenu1]'
})
export class DropMenu1Directive implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) {}

  isOpen = false;

  ngOnInit(){}

  @HostListener('click') onClick(){
    if (!this.isOpen) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
      this.isOpen = true;
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.isOpen = false;
    }
    console.log('clicked ' );
  }

}
