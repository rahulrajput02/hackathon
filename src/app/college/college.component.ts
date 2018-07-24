import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

    studentName;
    studentBranch;
    passingYear;
    collegeName;
    approved = false;

    collegeForm = new FormGroup({
        studentName: new FormControl(),
        studentBranch: new FormControl(),
        passingYear: new FormControl(),
        collegeName: new FormControl()
    });

    constructor(private fb: FormBuilder) {
    }


    ngOnInit() {
        this.studentName = 'Rahul Rajput';
        this.studentBranch = 'CSE';
        this.passingYear = '2014';
        this.collegeName = 'Chitkara University';
    }

    approve() {
        this.approved = true;
    }
}