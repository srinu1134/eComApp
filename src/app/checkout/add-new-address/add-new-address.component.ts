import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.scss']
})
export class AddNewAddressComponent {
  addNewAddressForm!: FormGroup;
  countryList: any = [
    { id: 1, name: 'India'},
    { id: 2, name: 'USA'},
    { id: 3, name: 'UK'},
    { id: 4, name: 'Japan'},
  ];
  stateList: any = [
    { id: 1, name: 'AP'},
    { id: 2, name: 'TG'},
    { id: 3, name: 'UP'},
    { id: 3, name: 'MP'},
  ];
  constructor(
    public dialogRef: MatDialogRef<AddNewAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.addNewAddressForm = this.fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required],
      name: ['', Validators.required],
      landMark: ['', Validators.required],
      phone: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      isDefault: [false]
    });
  }
}
