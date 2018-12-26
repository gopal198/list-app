import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataPassService } from '../service/data-pass.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private localStorage: LocalStorageService, private router:Router, private dataService : DataPassService) { }
  listData:any;
  addNewItem(event){
    event.preventDefault();
    this.router.navigate(['/addList'])  
  }
  deleteItem(item){
   //console.log(item);
   this.dataService.setData(item);
   this.localStorage.set('item',JSON.stringify(item))
   this.router.navigate(['/deleteList'])
  }
  ngOnInit() {
    this.listData = JSON.parse(this.localStorage.get('listData'))
  }

}
