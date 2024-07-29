import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css'
})
export class RadioComponent {
  @Output() selectionChange = new EventEmitter();

  onSelectionChange(value: string) {
    this.selectionChange.emit(value);
  }
}
