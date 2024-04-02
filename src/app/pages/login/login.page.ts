import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!:  FormGroup;
  loginClicked = false;

  constructor(private formBuilder: FormBuilder,public navCtrl: NavController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.loginClicked = true;
    console.log('Formulário válido, enviando dados:', this.loginForm.value);
    if (this.loginForm.valid) {
      console.log('Formulário válido, enviando dados:', this.loginForm.value);
    } else {
      console.log('Formulário inválido, verifique os campos');
    }
  }

  get invalidControls() {
    const invalidControls = [];
    const controls = this.loginForm.controls;
    for (const controlName in controls) {
        if (controls[controlName].invalid) {
            invalidControls.push(controlName);
        }
    }
    return invalidControls;
}


}
