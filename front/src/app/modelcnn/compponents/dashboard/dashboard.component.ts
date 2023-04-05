import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModelService } from '../../services/model.service';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formss!: FormGroup ;
  headers:HttpHeaders|any;
  ageData: any;
  showCard: boolean = false;
  @ViewChild('card') card!: ElementRef;



  constructor(private formBuilder:FormBuilder ,private service:ModelService) { }

  ngOnInit(): void {
    this.formss = this.formBuilder.group({
      s:'',
      a:''
      
    }) ;
    //this.Teams = this.getTeams() 
    console.log(this.formss)
  
  }


  submit(): void {
    this.service.getPred(this.formss.getRawValue()).subscribe((res: any) => {
      console.log(res);
      const resu :any[]= Object.values(res);
      this.ageData = parseFloat(resu[0]).toFixed(2);
      this.showCard = true;
    });
   
  }

  
  hideCard() {
    this.showCard = false;
  }

      
    }
 
