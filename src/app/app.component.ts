import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchSectionComponent } from "./search-section/search-section.component";
import { UsersSectionComponent } from "./users-section/users-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchSectionComponent, UsersSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = [
    {
        "username": "user1",
        "email": "user1@example.com",
        "password": "password1",
        "image": "https://picsum.photos/200?random=1",
        "phone": "+1-123-456-7890",
        "isAdmin": true
    },
    {
        "username": "user2",
        "email": "user2@example.com",
        "password": "password2",
        "image": "https://picsum.photos/200?random=2",
        "phone": "+1-123-456-7891",
        "isAdmin": false
    },
    {
        "username": "user3",
        "email": "user3@example.com",
        "password": "password3",
        "image": "https://picsum.photos/200?random=3",
        "phone": "+1-123-456-7892",
        "isAdmin": true
    },
    {
        "username": "user4",
        "email": "user4@example.com",
        "password": "password4",
        "image": "https://picsum.photos/200?random=4",
        "phone": "+1-123-456-7893",
        "isAdmin": false
    },
    {
        "username": "user5",
        "email": "user5@example.com",
        "password": "password5",
        "image": "https://picsum.photos/200?random=5",
        "phone": "+1-123-456-7894",
        "isAdmin": true
    },
    {
        "username": "user6",
        "email": "user6@example.com",
        "password": "password6",
        "image": "https://picsum.photos/200?random=6",
        "phone": "+1-123-456-7895",
        "isAdmin": false
    },
    {
        "username": "user7",
        "email": "user7@example.com",
        "password": "password7",
        "image": "https://picsum.photos/200?random=7",
        "phone": "+1-123-456-7896",
        "isAdmin": true
    },
    {
        "username": "user8",
        "email": "user8@example.com",
        "password": "password8",
        "image": "https://picsum.photos/200?random=8",
        "phone": "+1-123-456-7897",
        "isAdmin": false
    },
    {
        "username": "user9",
        "email": "user9@example.com",
        "password": "password9",
        "image": "https://picsum.photos/200?random=9",
        "phone": "+1-123-456-7898",
        "isAdmin": true
    },
    {
        "username": "user10",
        "email": "user10@example.com",
        "password": "password10",
        "image": "https://picsum.photos/200?random=10",
        "phone": "+1-123-456-7899",
        "isAdmin": false
    },
    {
        "username": "user11",
        "email": "user11@example.com",
        "password": "password11",
        "image": "https://picsum.photos/200?random=11",
        "phone": "+1-123-456-7800",
        "isAdmin": true
    },
    {
        "username": "user12",
        "email": "user12@example.com",
        "password": "password12",
        "image": "https://picsum.photos/200?random=12",
        "phone": "+1-123-456-7801",
        "isAdmin": false
    },
    {
        "username": "user13",
        "email": "user13@example.com",
        "password": "password13",
        "image": "https://picsum.photos/200?random=13",
        "phone": "+1-123-456-7802",
        "isAdmin": true
    },
    {
        "username": "user14",
        "email": "user14@example.com",
        "password": "password14",
        "image": "https://picsum.photos/200?random=14",
        "phone": "+1-123-456-7803",
        "isAdmin": false
    },
    {
        "username": "user15",
        "email": "user15@example.com",
        "password": "password15",
        "image": "https://picsum.photos/200?random=15",
        "phone": "+1-123-456-7804",
        "isAdmin": true
    },
    {
        "username": "user16",
        "email": "user16@example.com",
        "password": "password16",
        "image": "https://picsum.photos/200?random=16",
        "phone": "+1-123-456-7805",
        "isAdmin": false
    },
    {
        "username": "user17",
        "email": "user17@example.com",
        "password": "password17",
        "image": "https://picsum.photos/200?random=17",
        "phone": "+1-123-456-7806",
        "isAdmin": true
    },
    {
        "username": "user18",
        "email": "user18@example.com",
        "password": "password18",
        "image": "https://picsum.photos/200?random=18",
        "phone": "+1-123-456-7807",
        "isAdmin": false
    },
    {
        "username": "user19",
        "email": "user19@example.com",
        "password": "password19",
        "image": "https://picsum.photos/200?random=19",
        "phone": "+1-123-456-7808",
        "isAdmin": true
    },
    {
        "username": "user20",
        "email": "user20@example.com",
        "password": "password20",
        "image": "https://picsum.photos/200?random=20",
        "phone": "+1-123-456-7809",
        "isAdmin": false
    }
];

email:string = '';
GetemailfromChild(emailfromSearch:string){
  this.email = emailfromSearch;
// console.log('clicked from parent :' , this.email);
}




}
