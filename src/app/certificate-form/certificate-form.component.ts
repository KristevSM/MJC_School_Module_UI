import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {Tag} from "../model/tag";
import {GiftCertificate} from "../model/giftt-certificate";
import {CertificateService} from "../_services/certificate.service";
import {PaginationHelper} from "../_helpers/pagination.helper";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.scss']
})
export class CertificateFormComponent implements OnInit{

  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(42)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(500)
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(1000000)
      ]),
      duration: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(3650)
      ]),
    })
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  tags: Tag[] = [];
  certificate: GiftCertificate = new GiftCertificate();

  constructor(private certificateService: CertificateService) {
  }


  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add new tag
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  submit(): GiftCertificate {
    if (this.form.valid) {
      console.log('Form: ', this.form)
      this.certificate = {...this.form.value}
      this.certificate.tags = this.tags
      console.log('Certificate: ', this.certificate)
      this.certificateService.addCertificate(this.certificate)
        .subscribe(c => {
            console.log('Certificate added: ', c)
            this.certificate = c;
          }
        )
      this.form.reset();
      return this.certificate;
    }
  }
}
