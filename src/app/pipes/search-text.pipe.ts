import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText',
})
export class SearchTextPipe implements PipeTransform {
  transform(users: any[], searchInput: string): any {
    console.log(users, searchInput);
    if (!searchInput) {
      return users;
    }
    return users.filter((user) => {
      return (
        user.firstName.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
      );
    });
  }
}
