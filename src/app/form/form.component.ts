import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.validator';
import { upperCaseValidator } from '../shared/upper-case.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      id1: this.fb.control('', [Validators.required, upperCaseValidator()]),
      id2: this.fb.control('', [Validators.required]),
      name1: this.fb.control('', [
        Validators.required,
        forbiddenNameValidator(/田中/i),
      ]),
      name2: this.fb.control('', [Validators.required]),
    });
  }
}
