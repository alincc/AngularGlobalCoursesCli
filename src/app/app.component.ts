import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'agc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {

  constructor(private ngZone: NgZone) {

    let t1;

    ngZone.onUnstable.subscribe(() => {
      console.log('goes unstabe');
      t1 = performance.now();
    });

    ngZone.onStable.subscribe(() => {

      console.log(`time to stabilize = ${performance.now() - t1}ms`);
    });


  }

}
