import {EventEmitter, Input, Output} from '@angular/core';

export class AbstractList {
  @Input() data: any[];
  @Output() entrySelected: EventEmitter<any> = new EventEmitter();
}
