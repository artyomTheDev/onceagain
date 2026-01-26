import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[shadow]',
  standalone: true,
})

export class ShadowCartDirective {
  color = '#4b565e';

  @HostBinding('style.background-color')
    get backgroundColor() {
      return this.color
    }


  @HostListener('mouseenter')
  enter() {
    this.color = 'orange'
    console.log('желтый')
  }

  @HostListener('mouseleave')
  leave() {
    this.color = '#4b565e'
    console.log('снова серый')
  }
}
