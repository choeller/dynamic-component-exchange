import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractDataService} from '../abstract-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-paginated-list-container',
  templateUrl: './paginated-list-container.component.html',
  styleUrls: ['./paginated-list-container.component.scss']
})
export class PaginatedListContainerComponent implements OnInit {

  data$: Observable<any[]>;

  @Input() customListComponent = null;
  @Output() entrySelected = new EventEmitter();

  constructor(private dataService: AbstractDataService) { }

  ngOnInit() {
    this.data$ = this.dataService.loadData('');
  }

}
