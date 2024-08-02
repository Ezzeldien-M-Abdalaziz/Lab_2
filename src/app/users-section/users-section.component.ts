import { NgClass } from '@angular/common';
import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-users-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './users-section.component.html',
  styleUrl: './users-section.component.css'
})
export class UsersSectionComponent {
  @Input() searchTerm: string = '';
    users:Array<any> = [
      {
          "id": 1,
          "firstName": "Charlotte",
          "lastName": "Moore",
          "age": 28,
          "gender": "female",
          "email": "charlotte.moore@example.com",
          "image": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
          "admin": false
      },
      {
          "id": 2,
          "firstName": "Emily",
          "lastName": "Miller",
          "age": 35,
          "gender": "female",
          "email": "emily.miller@example.com",
          "image": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
          "admin": true
      },
      {
          "id": 3,
          "firstName": "Oliver",
          "lastName": "Smith",
          "age": 42,
          "gender": "male",
          "email": "oliver.smith@example.com",
          "image": "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
          "admin": false
      },
      {
          "id": 4,
          "firstName": "Sophia",
          "lastName": "Johnson",
          "age": 22,
          "gender": "female",
          "email": "sophia.johnson@example.com",
          "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
          "admin": true
      },
      {
          "id": 5,
          "firstName": "Liam",
          "lastName": "Brown",
          "age": 30,
          "gender": "male",
          "email": "liam.brown@example.com",
          "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
          "admin": false
      },
      {
          "id": 6,
          "firstName": "Ava",
          "lastName": "Jones",
          "age": 27,
          "gender": "female",
          "email": "ava.jones@example.com",
          "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
          "admin": true
      },
      {
          "id": 7,
          "firstName": "William",
          "lastName": "Garcia",
          "age": 36,
          "gender": "male",
          "email": "william.garcia@example.com",
          "image": "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
          "admin": false
      },
      {
          "id": 8,
          "firstName": "Isabella",
          "lastName": "Martinez",
          "age": 29,
          "gender": "female",
          "email": "isabella.martinez@example.com",
          "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
          "admin": true
      },
      {
          "id": 9,
          "firstName": "James",
          "lastName": "Davis",
          "age": 40,
          "gender": "male",
          "email": "james.davis@example.com",
          "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
          "admin": false
      },
      {
          "id": 10,
          "firstName": "Mia",
          "lastName": "Hernandez",
          "age": 25,
          "gender": "female",
          "email": "mia.hernandez@example.com",
          "image": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
          "admin": true
      },
      {
          "id": 11,
          "firstName": "Lucas",
          "lastName": "Lopez",
          "age": 33,
          "gender": "male",
          "email": "lucas.lopez@example.com",
          "image": "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
          "admin": false
      },
      {
          "id": 12,
          "firstName": "Amelia",
          "lastName": "Gonzalez",
          "age": 31,
          "gender": "female",
          "email": "amelia.gonzalez@example.com",
          "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
          "admin": true
      },
      {
          "id": 13,
          "firstName": "Mason",
          "lastName": "Wilson",
          "age": 38,
          "gender": "male",
          "email": "mason.wilson@example.com",
          "image": "https://images.unsplash.com/photo-1502767089025-6572583495b4",
          "admin": false
      },
      {
          "id": 14,
          "firstName": "Harper",
          "lastName": "Anderson",
          "age": 26,
          "gender": "female",
          "email": "harper.anderson@example.com",
          "image": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
          "admin": true
      },
      {
          "id": 15,
          "firstName": "Ethan",
          "lastName": "Thomas",
          "age": 45,
          "gender": "male",
          "email": "ethan.thomas@example.com",
          "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
          "admin": false
      },
      {
          "id": 16,
          "firstName": "Abigail",
          "lastName": "Taylor",
          "age": 24,
          "gender": "female",
          "email": "abigail.taylor@example.com",
          "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
          "admin": true
      },
      {
          "id": 17,
          "firstName": "Henry",
          "lastName": "Martinez",
          "age": 47,
          "gender": "male",
          "email": "henry.martinez@example.com",
          "image": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
          "admin": false
      },
      {
          "id": 18,
          "firstName": "Emily",
          "lastName": "Clark",
          "age": 32,
          "gender": "female",
          "email": "emily.clark@example.com",
          "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
          "admin": true
      },
      {
          "id": 19,
          "firstName": "Alexander",
          "lastName": "Rodriguez",
          "age": 50,
          "gender": "male",
          "email": "alexander.rodriguez@example.com",
          "image": "https://images.unsplash.com/photo-1502767089025-6572583495b4",
          "admin": false
      },
      {
          "id": 20,
          "firstName": "Lily",
          "lastName": "Lewis",
          "age": 28,
          "gender": "female",
          "email": "lily.lewis@example.com",
          "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
          "admin": true
      }
  ]

  //mom
  filteredUsers: any[] = this.users;

  ngOnChanges(): void {
    this.filterUsers();
  }

  filterUsers(): void {
    if (this.searchTerm) {
      this.filteredUsers = this.users.filter(user =>
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }
}
