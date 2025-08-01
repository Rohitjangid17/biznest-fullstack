import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../shell/sidebar/sidebar.component';
import { HeaderComponent } from '../../shell/header/header.component';
import { FooterComponent } from '../../shell/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-provider-layout',
  imports: [NgIf, SidebarComponent, HeaderComponent, FooterComponent, RouterOutlet, MatSidenavModule],
  templateUrl: './provider-layout.component.html',
  styleUrl: './provider-layout.component.scss'
})
export class ProviderLayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSmallScreen = false;

  constructor(
    private _breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this._breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
        if (this.sidenav) {
          this.sidenav.mode = this.isSmallScreen ? 'over' : 'side';
          if (this.isSmallScreen) {
            this.sidenav.close();
          } else {
            this.sidenav.open();
          }
        }
      });
  }

  toggleSidebar() {
    this.sidenav.toggle();
  }
}
