import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../../../core/services/auth.service';
import { MockApiService } from '../../../../../mock-api/mock-api.service';
import { Menu } from '../../../interfaces/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, MatIconModule, MatListModule, RouterModule, MatTooltipModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
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

  // load menu by role
  getMenuByRole() {
    const role = this._authService.getRole();
    let menuObservable;

    switch (role) {
      case 'admin':
        menuObservable = this._mockApiService.getAdminMenu();
        break;

      case 'provider':
        menuObservable = this._mockApiService.getProviderMenu();
        break;

      default:
        this.menuList = [];
        return;
    }

    menuObservable.subscribe({
      next: (response) => this.menuList = response,
      error: (error) => {
        console.error(`Failed to load ${role} menu:`, error);
        this.menuList = [];
      }
    });
  }
}
