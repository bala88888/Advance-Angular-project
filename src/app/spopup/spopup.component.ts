


import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
 selector: 'app-spopup',
  templateUrl: './spopup.component.html',
  styleUrls: ['./spopup.component.css']
})
export class SpopupComponent {
  @Input() title: string = 'Notification';
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success'; // controls styling & icon
  @Input() show: boolean = false;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.show = false;
    this.close.emit();
  }
}

