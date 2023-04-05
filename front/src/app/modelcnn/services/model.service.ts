import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(environment.baseApi)

  }
  getPred(formData: any) {
    return this.http.post(environment.baseApi + "pred", formData);
  }

}
