import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appMousedownStop]'
})
export class MousedownStopDirective {

  @HostListener('mousedown', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }

}
