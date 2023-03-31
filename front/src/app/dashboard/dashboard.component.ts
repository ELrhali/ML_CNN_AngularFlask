import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  form: FormGroup |any;
  headers:HttpHeaders|any;
  ageData: any;
  showCard: boolean = false;
  @ViewChild('card') card!: ElementRef;



  constructor(private formBuilder:FormBuilder ,private http : HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      s:'',
      a:''
      
    });
    //this.Teams = this.getTeams() 
    console.log(this.form)
  
  }


  submit(): void{

    this.http.post('http://localhost:5000/pred',this.form.getRawValue()).subscribe(res =>{
      console.log(res);
      const resu= Object.values(res);
      this.ageData = parseFloat(resu[0]).toFixed(2);
      this.showCard = true;

  
    });
   
  }

  
  hideCard() {
    this.showCard = false;
  }

      
    }
 
