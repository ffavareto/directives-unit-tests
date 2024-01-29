import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appMyButton]',
  standalone: true
})
export class MyButtonDirective implements OnInit {
  @Input() bgColor: string = 'blue';
  @Input() fontColor: string = 'white';
  
  hostElement = inject(ElementRef).nativeElement as HTMLButtonElement;


  ngOnInit(): void {
    this.hostElement.style.backgroundColor = this.bgColor;
    this.hostElement.style.color = this.fontColor;
  }
}
