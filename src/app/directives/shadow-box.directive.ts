import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[shadowbox]',
  standalone: true,
})

export class ShadowBoxDirective {
  shadow = '0 0 0 0 white'

  @HostBinding('style.box-shadow')
  get boxShadow() {
    return this.shadow
  }

  @HostListener('mouseenter')
  enter() {
    this.shadow = '-5px 4px 3px 2px grey'
  }

  @HostListener('mouseleave')
  leave() {
    this.shadow = '0 0'
  }
}
