import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundCompnentComponent } from './page-not-found-compnent.component';

describe('PageNotFoundCompnentComponent', () => {
  let component: PageNotFoundCompnentComponent;
  let fixture: ComponentFixture<PageNotFoundCompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundCompnentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
