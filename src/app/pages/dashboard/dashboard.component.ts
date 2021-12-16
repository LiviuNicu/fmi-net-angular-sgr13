import { Component, OnInit } from '@angular/core';
import { PrivateService } from 'src/app/services/private.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public users: any[] = [
    {
      firstName: 'Ana',
      lastName: 'Ionescu',
    },
    {
      firstName: 'Lucian',
      lastName: 'Popescu',
    },
  ];
  searchInput: string = '';

  constructor(private privateService: PrivateService) {}

  ngOnInit(): void {
    //this.getAllUsers();
  }

  removeUser(firstName: string) {
    this.users = this.users.filter((user) => {
      return user.firstName !== firstName;
    });
  }

  getAllUsers() {
    this.privateService.getAllUsers().subscribe((response: any) => {
      this.users = response.allUsers;
    });
  }
}
