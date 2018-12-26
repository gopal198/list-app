import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit, OnDestroy {

  constructor(private _fb: FormBuilder, private localStorage: LocalStorageService,private router: Router) { }
  addList: FormGroup;
  submitted:boolean;
  listData:any=[];

  addListItem(list:any,status){
    //console.log(list);
    if(status == true){
      this.listData.push(list); 
      alert("list added successfully");
      this.addList.reset();
      this.router.navigate(["/dashboard"])
    }
   
    
  }
  ngOnInit() {
    this.listData = JSON.parse(this.localStorage.get('listData'));
    this.submitted = true;
    this.addList = this._fb.group({
      'title':['',[<any>Validators.required]],
      'text': ['',[<any>Validators.required]],
      'date':['',[<any>Validators.required]]
    })
  }

  ngOnDestroy(){
    this.localStorage.set('listData',JSON.stringify(this.listData))
  }

}
