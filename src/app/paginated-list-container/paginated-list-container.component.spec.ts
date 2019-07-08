import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedListContainerComponent } from './paginated-list-container.component';

describe('PaginatedListContainerComponent', () => {
  let component: PaginatedListContainerComponent;
  let fixture: ComponentFixture<PaginatedListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatedListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
