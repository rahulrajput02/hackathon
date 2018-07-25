import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})
export class BlockComponent {

    blockResponse;
    form = new FormGroup({
    });
    constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

    validate(event) {
        const target = event.target;
        const validate = target.querySelector('#validate').value;

        const obj = { "id": validate };

        this.httpClient.post('http://localhost:3000/find', obj, {
            responseType: 'text',
        })
            .subscribe(
                response => {
                    console.log(response);
                    this.blockResponse = response;
                },
                err => {
                    console.log("Error Ocurred" + err);
                }
            )
    }
}