import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeStructuredJsonComponent } from './tree-structured-json.component';

describe('TreeStructuredJsonComponent', () => {
  let component: TreeStructuredJsonComponent;
  let fixture: ComponentFixture<TreeStructuredJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeStructuredJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeStructuredJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
