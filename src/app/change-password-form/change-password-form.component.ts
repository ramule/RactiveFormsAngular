import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PasswordValiadtors } from './password.validators';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {

  form = new FormGroup({

  })

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValiadtors.invalidOldPwd],
      newPassword: ['', Validators.required],
      cnfPassword: ['', Validators.required]
    }, {validators: [PasswordValiadtors.passwordShouldMatch, PasswordValiadtors.oldAndNewPwdShouldNotMatch]})
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }
  get cnfPassword() {
    return this.form.get('cnfPassword');
  }
  ngOnInit() {
  }

}
