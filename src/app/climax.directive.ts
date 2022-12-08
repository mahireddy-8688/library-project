import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appClimax]'
})
export class ClimaxDirective {
  
  constructor(private element: ElementRef) { }
  @HostListener('mouseenter') onClickEnter(){
    this.element.nativeElement.style.color='red';
    this.element.nativeElement.style['font-size']="xx-large";
    this.element.nativeElement.style['font-weight']='bold';

  }
  @HostListener('mouseleave') onClickl(){
    this.element.nativeElement.style.color='';
    this.element.nativeElement.style['font-size']="";
    this.element.nativeElement.style['font-weight']='';
    
  }

}
