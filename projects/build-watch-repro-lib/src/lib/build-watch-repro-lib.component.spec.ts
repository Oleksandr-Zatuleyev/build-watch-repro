import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildWatchReproLibComponent } from './build-watch-repro-lib.component';

describe('BuildWatchReproLibComponent', () => {
  let component: BuildWatchReproLibComponent;
  let fixture: ComponentFixture<BuildWatchReproLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildWatchReproLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildWatchReproLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
