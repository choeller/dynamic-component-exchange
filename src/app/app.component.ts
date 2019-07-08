import { Component } from '@angular/core';
import {CustomListComponent} from './custom-list/custom-list.component';
import {ComponentPortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-content-tester';

   customList: ComponentPortal<CustomListComponent>;

  switchToCustomList() {
    this.customList = new ComponentPortal(CustomListComponent);
  }

}
