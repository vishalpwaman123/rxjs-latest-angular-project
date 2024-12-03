import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToarrayComponent } from './observable/to-array/toarray.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatMergeComponent } from './observable/concat-merge/concat-merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { DifferenceMapComponent } from './observable/difference-map/difference-map.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { ThrowCatchErrorComponent } from './observable/throw-catch-error/throw-catch-error.component';

const routes: Routes = [
  {
    path: 'promise',
    component: PromiseComponent,
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'to-array', component: ToarrayComponent },
      { path: 'custom', component: CustomComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debounce', component: DebounceComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'replay', component: ReplaySubjectComponent },
      { path: 'asyncsubject', component: AsyncSubjectComponent },
      { path: 'concatmerge', component: ConcatMergeComponent },
      { path: 'mergemap', component: MergeMapComponent },
      { path: 'concatmap', component: ConcatMapComponent },
      { path: 'switchmap', component: SwitchMapComponent },
      { path: 'differencemap', component: DifferenceMapComponent },
      { path: 'exhaustmap', component: ExhaustMapComponent },
      { path: 'sharereplay', component: ShareReplayComponent },
      { path: 'combinelatest', component: CombineLatestComponent },
      { path: 'throwcatcherror', component: ThrowCatchErrorComponent },
    ],
  },
  {
    path: '**',
    component: PromiseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
