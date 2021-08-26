import { Directive, ElementRef, HostListener, Input, Renderer, Renderer2 } from "@angular/core";

@Directive({
  selector : '[apDarkenOnHover]'
})

export class DarkenOnHover {

@Input() brightness = '70%'

constructor(
  private el: ElementRef,
  private render: Renderer2
) {}

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`)
    console.log('darkenOn')

  }
  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)')
    console.log('darkenOff')
  }

}
