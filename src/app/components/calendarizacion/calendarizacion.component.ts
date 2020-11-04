import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

interface Aplicativo {
  idAplicativo: string;
  nombreAplicativo: string;
}

@Component({
  selector: 'app-calendarizacion',
  templateUrl: './calendarizacion.component.html',
  styleUrls: ['./calendarizacion.component.css']
})
export class CalendarizacionComponent implements OnInit {

  // formulario 
  calendarizacionForm: FormGroup;
  form: FormGroup;


  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  interestFormGroup: FormGroup
  interests: any;
  selected: any;
  mesesDelAnnio: any[];
  diasDelMes: any[];

  aplicativos: Aplicativo[] = [
    { idAplicativo: 'CUA', nombreAplicativo: 'Cuadratura' },
    { idAplicativo: 'Cat', nombreAplicativo: 'Meow!' },
    { idAplicativo: 'Cow', nombreAplicativo: 'Moo!' },
    { idAplicativo: 'Fox', nombreAplicativo: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];

  periodicidad: Aplicativo[] = [
    { idAplicativo: 'mensual', nombreAplicativo: 'Diario' },
    { idAplicativo: 'Cat', nombreAplicativo: 'Semanal!' },
    { idAplicativo: 'Cow', nombreAplicativo: 'Mensual!' },
    { idAplicativo: 'Fox', nombreAplicativo: 'Anual' },
  ];



  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      //mesesDelAnnio: this.formBuilder.array(this.mesesDelAnnio),
      //diasDelMes: this.formBuilder.array(this.diasDelMes)
    });


  }

  ngOnInit(): void {


    this.calendarizacionForm = this.createCalendarizacionFormGroup();

    this.mesesDelAnnio = [
      {
        id: 1,
        mes: "Enero"
      },
      {
        id: 2,
        mes: "Febrero"
      },
      {
        id: 3,
        mes: "Marzo"
      },
      {
        id: 4,
        mes: "Abril"
      },
      {
        id: 5,
        mes: "Mayo"
      },
      {
        id: 6,
        mes: "Junio"
      },
      {
        id: 7,
        mes: "Julio"
      },
      {
        id: 8,
        mes: "Agosto"
      },
      {
        id: 9,
        mes: "Septiembre"
      },
      {
        id: 10,
        mes: "Octubre"
      },
      {
        id: 11,
        mes: "Noviembre"
      },
      {
        id: 12,
        mes: "Diciembre"
      }
    ];

    this.diasDelMes = [
      {
        dia: "1",
        mes: 2
      },
      {
        dia: "2",
        mes: 2
      },
      {
        dia: "3",
        mes: 2
      },
      {
        dia: "4",
        mes: 2
      },
      {
        dia: "5",
        mes: 2,
      },
      {
        dia: "6",
        mes: 2,
      },
      {
        dia: "7",
        mes: 2
      },
      {
        dia: "8",
        mes: 2
      },
      {
        dia: "9",
        mes: 2
      },
      {
        dia: "10",
        mes: 2
      },
      {
        dia: "11",
        mes: 2
      }, {
        dia: "12",
        mes: 2
      },
      {
        dia: "13",
        mes: 2
      },
      {
        dia: "14",
        mes: 2
      },
      {
        dia: "15",
        mes: 2
      },
      {
        dia: "16",
        mes: 2
      },
      {
        dia: "17",
        mes: 2
      },
      {
        dia: "18",
        mes: 2
      },
      {
        dia: "19",
        mes: 2
      },
      {
        dia: "20",
        mes: 2
      },
      {
        dia: "21",
        mes: 2
      },
      {
        dia: "22",
        mes: 2
      },
      {
        dia: "23",
        mes: 2
      },
      {
        dia: "24",
        mes: 2
      },
      {
        dia: "25",
        mes: 2
      }
    ];

    
  }



  submitForm() {
    console.log(this.form.value)
  }

  createCalendarizacionFormGroup() {
    return new FormGroup({

    });
  }

}
