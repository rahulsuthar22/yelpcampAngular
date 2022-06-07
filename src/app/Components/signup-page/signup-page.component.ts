import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  submitted = false;

  

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.minLength(4)]],
      Password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('succes');
  }

}
