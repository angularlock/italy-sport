import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from './../shared.module';
import { TableResultsModule } from '../table-result/table-results.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ResultsModule } from '../results/results.module';
import { ProfileComponent } from './profile/profile.component';
import { CustomizeComponent } from './customize/customize.component';
import { SportModule } from '../shared/sport/sport.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewsModule } from '../news/news.module';
import { NewsContentComponent } from './news-content/news-content.component';
import { DashboardResultModule } from '../dashboard-result/dashboard-result.module';
import { RightbarComponent } from '../rightbar/rightbar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        ReactiveFormsModule,
        TableResultsModule,
        NewsModule,
        SharedModule,
        TranslateModule,
        ResultsModule,
        SidebarModule,
        SportModule,
        DragDropModule,
        InfiniteScrollModule,
        NgxLoadingModule,
        DashboardResultModule
    ],
    declarations: [
        DashboardComponent,
        ProfileComponent,
        CustomizeComponent,
        ResetPasswordComponent,
        NewsContentComponent
    ],
    entryComponents: [ ],
})
export class DashboardModule { }
