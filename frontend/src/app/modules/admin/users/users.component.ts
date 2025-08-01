import { Component, ViewChild } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgClass } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'Customer' | 'Provider' | 'Admin';
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-users',
  imports: [PageHeaderComponent, NgClass, MatPaginatorModule, FormsModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  pageTitle: string = "Users";
  searchText: string = "";
  roleFilter: string = "";
  statusFilter: string = "";

  users: User[] = [
    { id: 1, name: 'Aditi Sharma', email: 'aditi@example.com', phone: '9999900000', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Rahul Mehra', email: 'rahul@example.com', phone: '8888800000', role: 'Provider', status: 'Inactive' },
    { id: 3, name: 'Neha Patel', email: 'neha@example.com', phone: '7777700000', role: 'Customer', status: 'Active' },
    { id: 4, name: 'Neha Patel', email: 'neha@example.com', phone: '7777700000', role: 'Customer', status: 'Active' },
    { id: 5, name: 'Neha Patel', email: 'neha@example.com', phone: '7777700000', role: 'Customer', status: 'Active' },
    { id: 6, name: 'Neha Patel', email: 'neha@example.com', phone: '7777700000', role: 'Customer', status: 'Active' },
    { id: 7, name: 'Neha Patel', email: 'neha@example.com', phone: '7777700000', role: 'Customer', status: 'Active' },
  ];

  dataSource = new MatTableDataSource<User>(this.users);
  displayedColumns = ['name', 'email', 'phone', 'role', 'status', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  get filteredUsers(): User[] {
    return this.users.filter(user =>
      (user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchText.toLowerCase())) &&
      (!this.roleFilter || user.role === this.roleFilter) &&
      (!this.statusFilter || user.status === this.statusFilter)
    );
  }

  deactivateUser(id: number) {
    const user = this.users.find(u => u.id === id);
    if (user) user.status = 'Inactive';
    this.dataSource.data = this.filteredUsers;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
    this.dataSource.data = this.filteredUsers;
  }

  exportCSV() {
    const headers = ['Name', 'Email', 'Phone', 'Role', 'Status'];
    const rows = this.filteredUsers.map(u => [u.name, u.email, u.phone, u.role, u.status]);
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'users.csv';
    a.click();
  }
}
