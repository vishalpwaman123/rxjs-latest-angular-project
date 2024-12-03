import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
// import { CommonUtilityComponent } from './includes/common-utility/common-utility.component';
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
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SubjectComponent } from './observable/subject/subject.component';
import { Subjectcomp1Component } from './observable/subcomponents/subjectcomp1/subjectcomp1.component';
import { Subjectcomp2Component } from './observable/subcomponents/subjectcomp2/subjectcomp2.component';
import { Subjectcomp3Component } from './observable/subcomponents/subjectcomp3/subjectcomp3.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatMergeComponent } from './observable/concat-merge/concat-merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { DifferenceMapComponent } from './observable/difference-map/difference-map.component';
import { FormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { ThrowCatchErrorComponent } from './observable/throw-catch-error/throw-catch-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    // CommonUtilityComponent,
    OfFromComponent,
    ToarrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent,
    SubjectComponent,
    Subjectcomp1Component,
    Subjectcomp2Component,
    Subjectcomp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatMergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    DifferenceMapComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestComponent,
    ThrowCatchErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    FormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
