import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { fromEvent } from "rxjs";
import { map, share, tap } from "rxjs/operators";

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {
  @Output() progressValue = new EventEmitter();
  progressValue$;

  constructor() {}

  ngOnInit() {
    this.getprogressValue();
  }

  getprogressValue() {
    this.progressValue$ = fromEvent(window, "scroll").pipe(
      map(() => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        return Math.round((winScroll / height) * 100);
      }),
      tap(v => this.progressValue.emit(v))
    );
  }

}
