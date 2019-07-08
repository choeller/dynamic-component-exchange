import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractList} from '../abstractList';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent extends AbstractList implements OnInit {

  @Input() data: any[] = [];
  @Output() entrySelected = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
