import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../services/supplier.service';
import { HttpClient } from '@angular/common/http';
import {Supplier} from '../productforms/Supplier';

@Component({
  selector: 'app-supplier-module',
  templateUrl: './supplier-module.component.html',
  styleUrls: ['./supplier-module.component.css']
})
export class SupplierModuleComponent  implements OnInit {

  supser!:Supplier[];
  supplierForm: FormGroup= new FormGroup({});

  constructor(private fb: FormBuilder, private ser:SupplierService,private http: HttpClient) { }

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      name: ['', Validators.required],
      contactname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      mode: ['', Validators.required],
      prefer: ['', Validators.required]
    });

    this.ser.GetData().subscribe(list => {
      this.supser = list;
    });
  }

  listTodos() {
    this.ser.GetData().subscribe(list => {
      this.supser = list;
    });
  }

  submit() {
    if (this.supplierForm.valid) {
      console.log(this.supplierForm.value);
      this.ser.Save(this.supplierForm.value).subscribe();
      window.location.reload();
    }
  }

  editSupplier(sup: Supplier) {
    sup.editing = true;
  }
  
  updateSupplier(sup: Supplier) {

    this.ser.updateSupplier(sup)
    .subscribe((updatedSupplier) => {
      console.log('Supplier updated successfully:', updatedSupplier);
    });
      window.location.reload();
  }

  deleteSupplier(sup: Supplier) {
    console.log(sup.id)
    this.ser.delete(sup).subscribe((data) => {
      this.supser = data;
    });
    window.location.reload();
  }
}
