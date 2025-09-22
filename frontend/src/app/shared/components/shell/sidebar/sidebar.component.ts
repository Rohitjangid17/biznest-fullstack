import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgStyle, NgTemplateOutlet } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';

import { AuthService } from '../../../../core/services/auth.service';
import { MockApiService } from '../../../../../mock-api/mock-api.service';
import { Menu } from '../../../interfaces/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgTemplateOutlet,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    NgStyle
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuList: Menu[] = [];

  constructor(
    private _authService: AuthService,
    private _mockApiService: MockApiService
  ) { }

  ngOnInit(): void {
    this.getMenuByRole();
  }

  private getMenuByRole() {
    const role = this._authService.getRole();
    let menuObservable;

    switch (role) {
      case 'super-admin':
        menuObservable = this._mockApiService.getSuperAdminMenu();
        break;
      case 'admin':
        menuObservable = this._mockApiService.getAdminMenu();
        break;
      case 'finance':
        menuObservable = this._mockApiService.getFinanceMenu();
        break;
      case 'support':
        menuObservable = this._mockApiService.getSupportMenu();
        break;
      case 'marketing':
        menuObservable = this._mockApiService.getMarketingMenu();
        break;
      case 'provider':
        menuObservable = this._mockApiService.getProviderMenu();
        break;
      default:
        this.menuList = [];
        return;
    }

    menuObservable.subscribe({
      next: (response) => {
        // Ensure every menu item has children array
        this.menuList = response.map(menu => this.ensureChildren(menu));
      },
      error: (err) => {
        console.error('Failed to load menu', err);
        this.menuList = [];
      }
    });
  }

  private ensureChildren(menu: Menu): Menu {
    return {
      ...menu,
      children: (menu.children ?? []).map(child => this.ensureChildren(child))
    };
  }
}
