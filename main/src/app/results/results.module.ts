import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgPipesModule } from 'angular-pipes';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatDatepickerModule, MatOptionModule, MatSelectModule } from '@angular/material';
import {
  MatMomentDateModule
} from '@angular/material-moment-adapter';

import { ResultsComponent } from './results.component';
import { ResultsRoutes } from './results.routing';
import { TableResultsModule } from '../table-result/table-results.module';
import { ScrollContainerComponent } from '../components/scroll-container/scroll-container.component';
import { FilterPipe, GroupByPipe, GroupByPipeObj, OrderPipe } from '../table-result/table-pipe.pipe';
import { SharedModule } from './../shared.module';
import { SportModule } from '../shared/sport/sport.module';
import { ResultsFootballComponent } from './results-football/results-football.component';
import { ResultsBasketballComponent } from './results-basketball/results-basketball.component';
import { ResultsFormula1Component } from './results-formula1/results-formula1.component';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    ResultsComponent,
    ScrollContainerComponent,
    ResultsFootballComponent,
    ResultsBasketballComponent,
    ResultsFormula1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ResultsRoutes),
    FormsModule,
    TableResultsModule,
    SharedModule,
    TranslateModule,
    NgPipesModule,
    InfiniteScrollModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    SportModule,
    NgxLoadingModule,
  ],
  exports: [
    ResultsComponent,
    ResultsFootballComponent,
  ],
  providers: [DatePipe, FilterPipe, OrderPipe, GroupByPipe, GroupByPipeObj]
})
export class ResultsModule { }
