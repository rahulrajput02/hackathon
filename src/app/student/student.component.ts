import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    studentForm = new FormGroup({
        studentName: new FormControl(),
        studentBranch: new FormControl(),
        passingYear: new FormControl(),
        collegeName: new FormControl()
    });

    constructor(private fb: FormBuilder) {
        this.createForm();
     }


      createForm() {
        this.studentForm = this.fb.group({
          studentName: ['', Validators.required],
          studentBranch: ['', Validators.required],
          passingYear: ['', Validators.required],
          collegeName: ['', Validators.required],
          stateNameD: ['', Validators.required],
          postalCodeD: ['', Validators.required],
          orgNameS: ['', Validators.required],
          mailingAddressS: ['', Validators.required],
          cityNameS: ['', Validators.required],
          stateNameS: ['', Validators.required],
          postalCodeS: ['', Validators.required],
          attachmentDesc: ['', Validators.required],
          selectedState: []
        });
      }

    ngOnInit() {

    }
}