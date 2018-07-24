import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent {
  title = 'app';
  formSubmitted = false;
  loggedIn;
  invalid;

  angularForm = new FormGroup({
    studentName: new FormControl(),
    studentBranch: new FormControl(),
    passingYear: new FormControl(),
    collegeName: new FormControl(),
    collegeId: new FormControl(),
    studentEmail: new FormControl()
  });

  form = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.createForm();
  }

  createForm() {
    this.angularForm = this.fb.group({
      studentName: ['', Validators.required],
      studentBranch: ['', Validators.required],
      passingYear: ['', Validators.required],
      collegeName: ['', Validators.required],
      collegeId: ['', Validators.required],
      studentEmail: ['', Validators.required],
    });

    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // toggleButton() {
  //   this.secondFormVisible = true;
  //   this.firstFormVisible = false;

  //   //GET METHOD FOR DEBTOR TYPE

  //   this.httpClient.get(environment.getDebtorAPI)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.debtorOption = response;
  //       },
  //       err => {
  //         console.log("Error Ocurred" + err);
  //       }
  //     )

  //   //GET METHOD FOR SECURED PARTY TYPE

  //   this.httpClient.get(environment.getSecuredPartyAPI)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.securedPartyOption = response;
  //       },
  //       err => {
  //         console.log("Error Ocurred" + err);
  //       }
  //     )

  //   //GET METHOD FOR COLLATERAL TYPE

  //   this.httpClient.get(environment.getCollateralAPI)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.collateralOption = response;
  //       },
  //       err => {
  //         console.log("Error Ocurred" + err);
  //       }
  //     )
  // }

  refresh() {
    window.location.reload();
  }

  // ngOnInit() {

  //   this.httpClient.get(environment.getStatesAPI)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.selectedState = response;
  //       },
  //       err => {
  //         console.log("Error Ocurred" + err);
  //       }
  //     )
  // }

  // typeChanged() {
  //   const selectedState = this.angularForm.get('selectedState').value;
  //   const data = { "state": selectedState };
  //   this.httpClient.post(environment.getJurisdictionAPI, data)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.juisdictions = response;
  //       },
  //       err => {
  //         console.log("Error Ocurred" + err);
  //       }
  //     )
  // }

  ngOnInit() {
    this.loggedIn = false;
    this.invalid = false;
  }

  loginSubmit(event) {
    const target = event.target;
    const login = target.querySelector('#login').value;
    const password = target.querySelector('#password').value;

    if (login === 'rahul' && password === '12345') {
      this.loggedIn = true;
      console.log(1);
    } else {
      this.invalid = true;
      console.log(2);
    }
  }


  recordSubmission(event) {
    const target = event.target;
    const studentName = target.querySelector('#studentName').value;
    const studentBranch = target.querySelector('#studentBranch').value;
    const passingYear = target.querySelector('#passingYear').value;
    const collegeName = target.querySelector('#collegeName').value;
    const collegeId = target.querySelector('#collegeId').value;
    const studentEmail = target.querySelector('#studentEmail').value;


    console.log(studentName, studentBranch, passingYear, collegeName, collegeId, studentEmail);
    this.angularForm.reset();


    // const debtorState = target.querySelector('#debtorState').value;
    // const debtorPostcode = target.querySelector('#debtorPostcode').value;
    // const securedtype = target.querySelector('#securedtype').value;
    // var securedPartyType;

    // if (target.querySelector('#securedBusiness').checked) {
    //   securedPartyType = target.querySelector('#securedBusiness').value;
    // } else {
    //   securedPartyType = target.querySelector('#securedindividual').value;
    // }

    // const securedOrgName = target.querySelector('#securedOrgName').value;
    // const securedmaillingAddress = target.querySelector('#securedmaillingAddress').value;
    // const securedCity = target.querySelector('#securedCity').value;
    // const securedState = target.querySelector('#securedState').value;
    // const securedPostcode = target.querySelector('#securedPostcode').value;
    // const collateralType = target.querySelector('#collateralType').value;
    // const attachmentType = target.querySelector('#attachmentType').value;
    // var collateralIS;

    // if (target.querySelector('#collateralIsNone').checked) {
    //   collateralIS = target.querySelector('#securedBusiness').value;
    // } else if (target.querySelector('#collateralIsTrust').checked) {
    //   collateralIS = target.querySelector('#collateralIsTrust').value;
    // } else {
    //   collateralIS = target.querySelector('#collateralIsRep').value;
    // }

    // const myobj = {
    //   "New_Filling_State": newFillingState, "New_Filling_Jurisdiction": newFillingJuidiction, "Filling_Form_Type": fillingFormType, "Student_Name": studentName, "Debtor_Type": debtorType, "Debtor_Party_type": debtorPartyType, "Debtor_Organisation_Name": debtorOrgName, "Debtor_Mailing_Address": debtorMaillingAddress, "Debtor_City": debtorCity, "Debtor_State": debtorState, "Debtor_Postal_Code": debtorPostcode,
    //   "Secured_Party_Type": securedtype, "Party_Type": securedPartyType, "Secured_Party_Organisation_Name": securedOrgName, "Secured_Party_Mailing_Address": securedmaillingAddress, "Secured_Party_City": securedCity, "Secured_Party_State": securedState, "Secured_Party_Postal_Code": securedPostcode,
    //   "Collateral_Type": collateralType, "Type_of_Attachment": attachmentType, "Collateral_Is": collateralIS
    // };

    // this.httpClient.post(environment.postNewFilling, myobj, {
    //   responseType: 'text',
    // })
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //       this.formSubmitted = true;
    //       this.angularForm.reset();

    //     },
    //     err => {
    //       console.log("Error Ocurred" + err);
    //     }
    //   )
  }
}
