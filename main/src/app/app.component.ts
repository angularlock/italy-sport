import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

import { BreakpointObserverService, Breakpoint } from './shared/_service/breakpoint-observer/breakpoint-observer.service';
import { SigninService } from './shared/_service/signin/signin.service';
import { ImagesService } from './shared/_service/images/images.service';

@Component({
  selector: 'app-my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {

  private _router: Subscription;
  private lang: string;
  public loading = true;
  @ViewChild('bpDetector') private bpDetector: ElementRef;
  private currentBreakpoint: Breakpoint = 'none';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private signinService: SigninService,
    private imagesService: ImagesService,
    private bpObserverService: BreakpointObserverService
  ) {
    this.lang = 'it';
    if (sessionStorage.getItem('language')) {
      this.lang = sessionStorage.getItem('language');
    }
    translate.setDefaultLang(this.lang);
    translate.currentLang = this.lang;
    sessionStorage.setItem('language', this.lang);

    // local
    // sessionStorage.setItem("env", "LOCAL");
    sessionStorage.setItem('env', 'DEVELOPMENT');
  }

  ngOnInit() {
    this.loading = true;
    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      const body = document.getElementsByTagName('body')[0];
      const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
      if (body.classList.contains('modal-open')) {
        body.classList.remove('modal-open');
        modalBackdrop.remove();
      }
      this.signinService.updateLoggedUser();
      this.loading = false;
    });
    this.imagesService.preload(
      [
        //menu icons
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/ANIMATED_MENU_ICONS/FOOTBALL.gif',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/ANIMATED_MENU_ICONS/BASKETBALL.gif',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/ANIMATED_MENU_ICONS/TENNIS.gif',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/ANIMATED_MENU_ICONS/FORMULA1.gif',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/MENU_ICONS/FOOTBALL.png',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/MENU_ICONS/BASKETBALL.png',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/MENU_ICONS/TENNIS.png',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/MENU_ICONS/FORMULA1.png',

        //football event details
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/FOOTBALL/ICONS/ENTERED_PLAYER.png',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/FOOTBALL/ICONS/GOAL.png',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/FOOTBALL/ICONS/OWN_GOAL.png',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/FOOTBALL/ICONS/RED_CARD.png',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/FOOTBALL/ICONS/SECOND_YELLOW_CARD.png',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/FOOTBALL/ICONS/YELLOW_CARD.png',
        'https://storage.cloud.google.com/spring-bucket-sb-gcs-admin/img/sport/FOOTBALL/ICONS/MISSED_PENALTY.png',
      ]
    );
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  @HostListener('window:resize', [])
  private onResize() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    if (!this.bpDetector || !this.bpDetector.nativeElement) {
      return;
    }

    const screenSize = this.bpDetector.nativeElement.className as Breakpoint;
    if (screenSize && this.currentBreakpoint !== screenSize) {
      this.currentBreakpoint = screenSize;
      this.bpObserverService.emitBreakpoint(screenSize);
      console.log(`Screen size change to ${screenSize} detected`);
    }
  }
}
