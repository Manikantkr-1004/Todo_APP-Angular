import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Todo List With Angular';
  data: Person[] = [];
  id: number = 1;

  addTask(e:Event,name:string,des:string){
    e.preventDefault();

    let dataObj: Person = {
      id: this.id,
      title: name,
      description: des,
      completed: false
    }
    this.data.push(dataObj);
    this.id = this.id + 1;
  }

  removeTask(id:number){
    this.data = this.data.filter((ele)=> ele.id !== id);
  }

  updateTask(id:number){
    this.data = this.data.map((ele)=> ele.id===id ? {...ele,completed: !ele.completed } : ele);
  }
}
