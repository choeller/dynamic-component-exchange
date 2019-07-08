import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef, EventEmitter,
  Injector,
  Input,
  OnChanges, Output,
  SimpleChanges
} from '@angular/core';
import {ComponentPortal, DomPortalHost, PortalInjector} from '@angular/cdk/portal';
import {CONTAINER_DATA} from '../tokens';
import {AbstractList} from '../abstractList';
import {CustomListComponent} from '../custom-list/custom-list.component';

@Component({
  selector: 'app-paginated-list',
  templateUrl: './paginated-list.component.html',
  styleUrls: ['./paginated-list.component.scss']
})
export class PaginatedListComponent extends AbstractList implements OnChanges, AfterViewInit {

  @Input() data: any[] = [];
  @Input() customListComponent: ComponentPortal<AbstractList>;

  @Output() entrySelected = new EventEmitter();

  portalHost: DomPortalHost;
  customListComponentRef: ComponentRef<AbstractList>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private appRef: ApplicationRef) {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.customListComponent && changes.customListComponent.currentValue && this.portalHost) {
        this.attachCustomListComponent();
    }
    if (changes.data) {
        this.refreshCustomListBindings();
    }
  }

  private refreshCustomListBindings() {
    if (!this.customListComponentRef) {
      return;
    }

    console.log('ME', new ComponentPortal(PaginatedListComponent));

    this.customListComponentRef.instance.data = this.data;
    this.customListComponentRef.changeDetectorRef.detectChanges();
  }

  private attachCustomListComponent() {

    this.portalHost.detach();
    console.log('ATTACHING', AbstractList)
    console.log('ATTACHING', this.customListComponent);
    if (this.customListComponent) {
      this.customListComponentRef = this.portalHost.attach(this.customListComponent);

      this.attachOutputBindings();

      this.refreshCustomListBindings();
    }
  }

  private attachOutputBindings() {
    const outputBindings = (Object.keys(((this.customListComponent.component) as any).ngBaseDef.outputs));
    outputBindings.forEach(outputBinding => {
      this.customListComponentRef.instance[outputBinding].subscribe(value => {
        this[outputBinding].emit(value);
      });
    });
  }

  ngAfterViewInit(): void {
    // Create a portalHost from a DOM element
    this.portalHost = new DomPortalHost(
      document.querySelector('#custom-component-container'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector,
    );

    // Attach portal to host
    setTimeout(() => {
      this.attachCustomListComponent();
    });
  }

}
