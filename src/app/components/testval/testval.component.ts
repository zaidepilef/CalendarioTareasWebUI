import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrossFieldErrorMatcher } from '../../utilidades/cross-field-error-matcher';
import { FormComponentBase } from '../../utilidades/form-component-base';
import { Router } from '@angular/router';
import swal from'sweetalert2';

@Component({
  selector: 'app-testval',
  templateUrl: './testval.component.html',
  styleUrls: ['./testval.component.css']
})
//export class TestvalComponent implements OnInit {
export class TestvalComponent extends FormComponentBase implements OnInit, AfterViewInit {

  @ViewChild('userName') firstItem: ElementRef;
  form!: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();

  


  constructor(private formBuilder: FormBuilder, private router: Router) {
    super();
    this.validationMessages = {
      userName: {
        required: 'User name is required.',
        minlength: 'User name minimum length is 6.',
        maxlength: 'User name maximum length is 15.',
        pattern: 'User name minimum length 6, allowed characters letters, numbers only. No spaces.'
      },
    };

    this.formErrors = {
      userName: '',
      };

  }

    ngOnInit() {
      this.form = this.formBuilder.group({
        userName: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z0-9]*$')]],
        });
  }


  registerClicked(): void {
    if (this.form.invalid) {
      return;
    }
    //swal.fire('Registro exitoso...', 'Guardar', 'success');

    swal.fire({
      title: 'Registro Guardado',
       text: "",
       icon: 'success',
       showCancelButton: false,
       confirmButtonColor: '#3085d6',
       //cancelButtonColor: '#d33',
       confirmButtonText: 'OK'
     }).then((result) => {
       if (result.isConfirmed) {
        this.router.navigateByUrl('/aplicativos');
        //  swal.fire(
        //    'Deleted!',
        //    'Your file has been deleted.',
        //    'success'
        //  )
       }
     })


    // const swalWithBootstrapButtons = swal.mixin({
    //   customClass: {
    //     confirmButton: 'btn btn-success',
    //     cancelButton: 'btn btn-danger'
    //   },
    //   buttonsStyling: false
    // })

    // swalWithBootstrapButtons.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes, delete it!',
    //   cancelButtonText: 'No, cancel!',
    //   reverseButtons: true
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     //swalWithBootstrapButtons.fire(
    //       this.router.navigateByUrl('/nuevoaplicativo');
    //     //)
    //   } else if (
    //     /* Read more about handling dismissals below */
    //     result.dismiss === swal.DismissReason.cancel
    //   ) {
    //     // swalWithBootstrapButtons.fire(
    //     //   'Cancelled',
    //     //   'Your imaginary file is safe :)',
    //     //   'error'
    //     //)
    //   }
    // })


  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.firstItem.nativeElement.focus();
    }, 250);
    this.startControlMonitoring(this.form);
  }

}