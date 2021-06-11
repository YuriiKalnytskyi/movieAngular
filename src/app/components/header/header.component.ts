import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DataTransferService} from "../../serveces/data-transfer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search=new FormControl('')
  myform=new FormGroup({
    search:this.search
  })

  formValue:any

  constructor(private dataTransferService:DataTransferService) { }

  ngOnInit(): void {
  }
  search1():void{
    console.log(this.search.value)
    this.dataTransferService.input.next(this.search.value)
  }


}
