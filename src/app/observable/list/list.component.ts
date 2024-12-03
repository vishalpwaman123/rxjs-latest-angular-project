import { Component } from '@angular/core';
import { MenuList } from '../../appInterface/search.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})



export class ListComponent {
  list: MenuList[] = [
    { title: "fromEvent", route: "fromEvent" },
    { title: "Interval", route: "interval" },
    { title: "Of And From", route: "of-from" },
    { title: "ToArray", route: "to-array" },
    { title: "Custom Observable", route: "custom" },
    { title: "Map", route: "map" },
    { title: "Pluck", route: "pluck" },
    { title: "Filter", route: "filter" },
    { title: "Tap", route: "tap" },
    { title: "Take, TakeLast & TakeUntil", route: "take" },
    { title: "Retry, RetryWhen, Scan & Delay", route: "retry" },
    { title: "DebounceTime & DistinctUntilChanged", route: "debounce" },
    { title: "Subject & BehaviorSubject", route: "subject" },
    { title: "Replay Subject", route: "replay" },
    { title: "Async Subject", route: "asyncsubject" },
    { title: "Concat & Merge", route: "concatmerge" },
    { title: "Merge Map", route: "mergemap" },
    { title: "Concat Map", route: "concatmap" },
    { title: "Switch Map", route: "switchmap" },
    { title: "Difference Map", route: "differencemap" },
    { title: "Exhaust Map", route: "exhaustmap" },
    { title: "Share replay", route: "sharereplay" },
    { title: "CombineLatest, WithLatestFrom, Zip & ForkJoin", route: "combinelatest" },
    { title: "ThrowError & CatchError", route: "throwcatcherror" },
  ]
}
