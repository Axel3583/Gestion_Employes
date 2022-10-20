import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { EmployesModel } from './employes-dash.model';

@Component({
  selector: 'app-employes-dash',
  templateUrl: './employes-dash.component.html',
  styleUrls: ['./employes-dash.component.css']
})
export class EmployesDashComponent implements OnInit {

  formValue!: FormGroup;
  employesModelObject: EmployesModel = new EmployesModel();
  employesData!: any;
  showAdd!: boolean;
  showUpdate! : boolean;

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit() {

    this.formValue = this.formbuilder.group({
      id: [''],
      num: [''],
      firstname: [''],
      lastname: [''],
      age: [''],
      email: [''],
      profilImage: [''],
      validated: [''],
      materialAssigned: [''],
    })

    this.getAllEmployes()
    
  }

     clickAddEmployes(){
      this.formValue.reset()
      this.showAdd =true;
      this.showUpdate = false;
     }

   
   
    postEmployesDetails(){
      
      this.employesModelObject.id = this.formValue.value.id;
      this.employesModelObject.num = this.formValue.value.num;
      this.employesModelObject.firstname = this.formValue.value.firstname;
      this.employesModelObject.lastname = this.formValue.value.lastname;
      this.employesModelObject.email = this.formValue.value.email;
      this.employesModelObject.age = this.formValue.value.age;
      this.employesModelObject.profilIamge = this.formValue.value.profiliamge;
      this.employesModelObject.validated = this.formValue.value.validated;
      this.employesModelObject.materialAssigned = this.formValue.value.materialAssigned;

      this.api.postEmployes(this.employesModelObject).subscribe(res=>{
        console.log(res);
        alert("Employes Add")

        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllEmployes();
      },
      err=>{
        alert("Reesais")
      })
    }

  
    getAllEmployes(){
    this.api.getEmployes().subscribe(res => {
      this.employesData = res;
    })
    }

    deleteEmployes(emp: any){
      this.api.deleteEmploye(emp.id).subscribe(res => {
        alert("Employe deleted")
        this.getAllEmployes()
      })
    }

    editEmployes(emp: any){
        
      this.showAdd = false;
      this.showUpdate = true;
      this.employesModelObject.id = emp.id;
      this.formValue.controls['num'].setValue(emp.num);
      this.formValue.controls['firstname'].setValue(emp.firstname);
      this.formValue.controls['lastname'].setValue(emp.lastname);
      this.formValue.controls['age'].setValue(emp.age);
      this.formValue.controls['email'].setValue(emp.email);
      this.formValue.controls['validated'].setValue(emp.validated);
      this.formValue.controls['materialAssigned'].setValue(emp.materialAssigned);
    }

    updateEmployeDetails(){

      this.employesModelObject.num = this.formValue.value.num;
      this.employesModelObject.firstname = this.formValue.value.firstname;
      this.employesModelObject.lastname = this.formValue.value.lastname;
      this.employesModelObject.email = this.formValue.value.email;
      this.employesModelObject.age = this.formValue.value.age;
      this.employesModelObject.profilIamge = this.formValue.value.profiliamge;
      this.employesModelObject.validated = this.formValue.value.validated;
      this.employesModelObject.materialAssigned = this.formValue.value.materialAssigned;

      this.api.updateEmployes(this.employesModelObject, this.employesModelObject.id).subscribe(res => {
        alert ("Employe Updated ! ");

        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllEmployes();

      })
    }

  }


