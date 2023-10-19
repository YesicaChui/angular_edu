import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forns',
  templateUrl: './forns.component.html',
  styleUrls: ['./forns.component.scss']
})
export class FornsComponent {
  userForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(10)] ],
      lastName: ['', Validators.required]
    })
  }
  get nameControl() {
    return this.userForm.get('name')
  }
}


