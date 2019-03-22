import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})  
export class IndexComponent implements OnInit {

  users: string[];
  name : string;
  age: number;
  posts = [];
  constructor(private dataService : DataService){
    this.dataService.getData().subscribe(data => {
      this.posts = data;  //TODO: Endender esto
    });
    this.users = ['Jaime', 'Lina', 'Christian'];
    this.name = 'Jaime Zamora';
    this.age = 24;
  }
  sayHello(){
    alert("Hello");
  }
  deleteUser(user){
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i] == user) {
        this.users.splice(i,1);
      }
    }
  }
  addUser(newUser){
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
  ngOnInit() {
  }

}
