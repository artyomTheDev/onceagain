import {Directive, HostBinding, HostListener, inject} from "@angular/core";

@Directive({
  selector: "[brown]",
  standalone: true,
})

export class RedDirective {
  color = 'white';
  textTransform = 'lowercase'

  @HostBinding('style.background-color')
  get backGroundColor() {
    return this.color
  }

  @HostBinding('style.text-transform')
  get textTransformGetter() {
    return this.textTransform
  }

  @HostListener('mouseenter')
  enter() {
    this.color = 'brown';
    this.textTransform = 'uppercase'
    console.log('зашёл')
  }

  @HostListener('mouseleave')
  leave() {
    this.color = 'white';
    this.textTransform = 'lowercase'
    console.log('вышел')
  }

}
