import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { map, Observable, shareReplay } from 'rxjs';
import { NavigationItems } from '../constants/navigation-item.const';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavigationItem } from '../models/navigation-items.model';
import { NavigationProfiles } from '../constants/nav-profile.const';
import { EventEmitter } from 'events';




@Component({
  selector: 'nggt-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})

export class AppLayoutComponent implements OnInit{

  
  @ViewChild('sidenav') sidenavElement!: ElementRef; 
  
  collapsed=false;
  screenwidth=0;
  /* Public Properties */
  navigationItems = NavigationItems;
 //navProf=NavigationProfiles;
  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    
  }

  isSidebarOpen = false;

  toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
  }

  ngOnInit(): void {
   this.screenwidth=window.innerWidth
  }
 // collapsed = true; // Default to collapsed state

  handleLeaveEvent(event: MouseEvent) {
    // Check if the mouse leaves the entire sidenav area, not just the icon
    if (!this.sidenavElement.nativeElement.contains(event.target)) {
      this.collapsed = true;
    }
  }
  //navProf=NavigationProfiles;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private sanitizer:DomSanitizer
  ) { }

  // // /* Public Methods */
  // gotoProfile(): void {
  //   this.router.navigateByUrl('profile');
  // }

  
  // logout(): void {
  //   this.authService.logout();
  // }

  getTrustedHtml(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  isLinkActive(route: string): boolean {
    return this.router.isActive(route, true);
}
}
