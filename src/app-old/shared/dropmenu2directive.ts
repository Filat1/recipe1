import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropMenu2]'
})
export class DropMenu2Directive {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') onClick() {
    this.isOpen = ! this.isOpen;
  }
}
