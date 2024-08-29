import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IContactForm {
  name:     string;
  email:    string;
  message:  string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;
  private hardcodedName: string = 'Sergio Terroso Cabrera';

  constructor(private form: FormBuilder) {
    this.contactForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.contactForm.get('name')?.setValue(this.hardcodedName);
    this.contactForm.get('name')?.disable();
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.contactForm.get(controlName)?.hasError(errorName) || false;
  }
  
  sendForm() {
    console.log(this.contactForm);
  }
}
