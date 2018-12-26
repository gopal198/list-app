import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { DataPassService } from '../service/data-pass.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.css']
})
export class DeleteListComponent implements OnInit, OnDestroy{

  constructor(private dataService: DataPassService, private localStorage: LocalStorageService, private router: Router) { }
  dataItem:any;
  listOfItems:any;
  ngOnInit() {
    // this.dataService.item.subscribe((item) =>{
    //    this.dataItem = item;
    // })
    this.dataItem = JSON.parse(this.localStorage.get('item'));
    console.log(this.dataItem);
    this.listOfItems = JSON.parse(this.localStorage.get('listData'));
    console.log(this.listOfItems);
  }
  
  deleteItem(){
    for(let i=0; i < this.listOfItems.length; i++){
      if(this.listOfItems[i].title == this.dataItem.title){
          this.listOfItems.splice(i,1);  
      }
    }

    this.localStorage.set('listData',JSON.stringify(this.listOfItems));
    this.router.navigate(["/dashboard"]);
  }

  ngOnDestroy(){
    this.localStorage.set('item','[]');
  }

}
