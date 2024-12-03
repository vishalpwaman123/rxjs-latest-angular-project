import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription, interval, timer } from 'rxjs';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css',
})
export class IntervalComponent implements OnInit {
  count: number = 0;
  count1: number = 0;
  videoSubscribe: Subscription | undefined;
  audioSubscribe: Subscription | undefined;

  constructor(private commonUtilityComponent: CommonUtilityComponent) {}

  ngOnInit(): void {
    const broadcastVideo = interval(2000);
    const broadcastAudio = timer(3000, 1000);
    this.videoSubscribe = broadcastVideo.subscribe((res) => {
      this.count = res;
      this.commonUtilityComponent.print(
        'Video ' + this.count.toString(),
        'elContainer'
      );
      if (this.count > 5) {
        this.videoSubscribe?.unsubscribe();
      }
    });

    this.audioSubscribe = broadcastAudio.subscribe((res) => {
      this.count1 = res;
      this.commonUtilityComponent.print(
        'Audio ' + this.count1.toString(),
        'elContainer1'
      );
      if (this.count1 > 5) {
        this.audioSubscribe?.unsubscribe();
      }
    });
  }
}
