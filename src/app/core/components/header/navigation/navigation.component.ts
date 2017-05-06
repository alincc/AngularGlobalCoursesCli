import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, Event, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/merge'
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'agc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  public courseId$: Observable<any>;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.courseId$ = this.router.events
      .filter((e: Event) => e instanceof NavigationEnd)
      .switchMap(() => this.route.children)
      .switchMap(a => a.params)
      .map(p => p['id'])


  }

}
