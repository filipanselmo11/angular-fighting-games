import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() buttonClick = new EventEmitter();
  @Input() buttonClass!: string;
  // @Input() labelButton!: string;

  handleClick() {
    this.buttonClick.emit();
  }
}
