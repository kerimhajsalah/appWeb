import { Component, OnInit, ViewChild } from "@angular/core";
import { map, pairwise, takeUntil } from "rxjs/operators";
import { fromEvent, of } from "rxjs";
import { fadeInOut } from "../app/animation/animations"

import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DevWeb';
  @ViewChild("toTopBtn") private toTopBtn: any;

  name = "Angular";
  progressValue = 0;
  isShow :any;

  ngOnInit() {
    this.onScroll();
    this.onBtnClick();
  }

  getProgressValue(v) {
    this.progressValue = v;
  }

  onScroll() {
    fromEvent(window, "scroll")
      .pipe(
        // debounceTime(100),
        map(() => window.pageYOffset),
        pairwise(),
        map(x => x[0] > x[1] && x[0])
      )
      .subscribe((isShow)=>{
          this.isShow=isShow
      });
  }

  onBtnClick() {
    const clicks$ = fromEvent(this.toTopBtn._elementRef.nativeElement, "click");
    clicks$.subscribe(() => this.scrollToTop());
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }

}
