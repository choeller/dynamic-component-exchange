import {Component, Input, OnInit} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-module-container',
  templateUrl: './module-container.component.html',
  styleUrls: ['./module-container.component.scss']
})
export class ModuleContainerComponent implements OnInit {

  constructor() { }

  @Input() customList: ComponentPortal<any>;


  ngOnInit() {
  }

}
