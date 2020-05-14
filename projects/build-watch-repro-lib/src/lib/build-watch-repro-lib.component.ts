import { Component, OnInit, Input } from '@angular/core';
import { MomentWrapper } from './moment-wrapper';

@Component({
  selector: 'lib-build-watch-repro-lib',
  template: `
    <p>
      build-watch-repro-lib works!
    </p>
  `,
  styles: [
  ]
})
export class BuildWatchReproLibComponent implements OnInit {
  @Input()
  public wrapper: MomentWrapper = null;

  constructor() { }

  ngOnInit(): void {
  }

}
