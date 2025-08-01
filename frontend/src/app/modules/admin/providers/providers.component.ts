import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { Provider } from '../../../shared/interfaces/provider';
import { ProvidersService } from '../../../core/services/providers.service';

@Component({
  selector: 'app-providers',
  imports: [PageHeaderComponent, NgClass, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatTableModule, MatPaginatorModule, MatOptionModule],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss'
})
export class ProvidersComponent implements OnInit {
  pageTitle: string = "Providers";
  providers: Provider[] = [];

  searchQuery: string = "";
  filterStatus: string = "";
  filterCategory: string = "";
  filterCity: string = "";

  categories = ['Plumber', 'Electrician', 'Beautician', 'Carpenter'];
  total = 100;

  columnsToDisplay = ['name', 'category', 'location', 'status', 'rating', 'actions'];

  // providers = [
  //   { name: 'John Doe', category: 'Plumber', city: 'Delhi', status: 'active', rating: 4.5 },
  //   { name: 'Jane Smith', category: 'Beautician', city: 'Mumbai', status: 'pending', rating: 4.0 },
  //   { name: 'Ahmed Khan', category: 'Electrician', city: 'Bangalore', status: 'blocked', rating: 3.2 },
  // ];

  constructor(
    private _providersService: ProvidersService
  ) { }

  ngOnInit(): void {
    this.getProviderList();
  }

  // get filteredProviders() {
  //   return this.providers.filter(p =>
  //     (!this.searchQuery || p.name.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
  //     (!this.filterStatus || p.status === this.filterStatus) &&
  //     (!this.filterCategory || p.category === this.filterCategory) &&
  //     (!this.filterCity || p.city.toLowerCase().includes(this.filterCity.toLowerCase()))
  //   );
  // }

  // get provider list
  getProviderList() {
    this._providersService.getProviders().subscribe({
      next: (response) => {
        this.providers = response;
      },
      error: (error) => {
        console.log(error.message);
      }
    });
  }

  view(p: any) { console.log('Viewing', p); }
  edit(p: any) { console.log('Editing', p); }
  block(p: any) { console.log('Blocking', p); }
  onPageChange(e: any) { console.log('Page change', e); }
}
