import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CalendarioService } from 'src/app/services/calendario.service';



@Component({
  selector: 'app-calendarizacion',
  templateUrl: './calendarizacion.component.html',
  styleUrls: ['./calendarizacion.component.css']
})

export class CalendarizacionComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  //cajas formulario
  hora: boolean;
  fecha: boolean;
  botonAgregar: boolean;
  grillaFechas: boolean;
  intervalo: boolean;
  semana: boolean;
  meses: boolean;
  dias: boolean;

  periodicidad: any[];
  diasDelaSemana: any[];
  mesesDelAnnio: any[];
  diasDelMes: any[];

  diasDelaSemanaSeleccionado: Array<string> = [];
  mesesDelAnnioSeleccionado: Array<string> = [];
  diasDelMesSeleccionado: Array<string> = [];

  form: FormGroup;
  nombreAplicativo: string;
  periodicidadSeleccionada: number;
  numeroIntervalo: number;
  horario: string;
  fechaAplicacion: Date;

  //objeto al API
  dataEnvia: any = {}

  response: any = [{}]

  dataGrillaFechas: any = [];
  // dataGrillaFechas: MatTableDataSource<any>;


  constructor(private fb: FormBuilder, private service: CalendarioService, private router: Router, private ref: ChangeDetectorRef) {

    this.form = this.fb.group({
      nombreAplicativo: new FormControl('')
    });
    this.periodicidad = [];
    this.fechaAplicacion = new Date();

    this.CargaDataCombo();

  }


  ngOnInit(): void {

    this.diasDelaSemana = [
      {
        id: 1,
        dia: "Lunes",
        checked: false
      },
      {
        id: 2,
        dia: "Martes",
        checked: false
      },
      {
        id: 3,
        dia: "Miercoles",
        checked: false
      },
      {
        id: 4,
        dia: "Jueves",
        checked: false
      },
      {
        id: 5,
        dia: "Viernes",
        checked: false
      },
      {
        id: 6,
        dia: "Sabado",
        checked: false
      },
      {
        id: 7,
        dia: "Domingo",
        checked: false
      }
    ];

    this.mesesDelAnnio = [
      {
        id: 1,
        mes: "Enero",
        checked: false
      },
      {
        id: 2,
        mes: "Febrero",
        checked: false
      },
      {
        id: 3,
        mes: "Marzo",
        checked: false
      },
      {
        id: 4,
        mes: "Abril",
        checked: false
      },
      {
        id: 5,
        mes: "Mayo",
        checked: false
      },
      {
        id: 6,
        mes: "Junio",
        checked: false
      },
      {
        id: 7,
        mes: "Julio",
        checked: false
      },
      {
        id: 8,
        mes: "Agosto",
        checked: false
      },
      {
        id: 9,
        mes: "Septiembre",
        checked: false
      },
      {
        id: 10,
        mes: "Octubre",
        checked: false
      },
      {
        id: 11,
        mes: "Noviembre",
        checked: false
      },
      {
        id: 12,
        mes: "Diciembre",
        checked: false
      }
    ];

    this.diasDelMes = [
      {
        dia: "1",
        id: 1,
        checked: false
      },
      {
        dia: "2",
        id: 2,
        checked: false
      },
      {
        dia: "3",
        id: 3,
        checked: false
      },
      {
        dia: "4",
        id: 4,
        checked: false
      },
      {
        dia: "5",
        id: 5,
        checked: false
      },
      {
        dia: "6",
        id: 6,
        checked: false
      },
      {
        dia: "7",
        id: 7,
        checked: false
      },
      {
        dia: "8",
        id: 8,
        checked: false
      },
      {
        dia: "9",
        id: 9,
        checked: false
      },
      {
        dia: "10",
        id: 10,
        checked: false
      },
      {
        dia: "11",
        id: 11,
        checked: false
      }, {
        dia: "12",
        id: 12,
        checked: false
      },
      {
        dia: "13",
        id: 13,
        checked: false
      },
      {
        dia: "14",
        id: 14,
        checked: false
      },
      {
        dia: "15",
        id: 15,
        checked: false
      },
      {
        dia: "16",
        id: 16,
        checked: false
      },
      {
        dia: "17",
        id: 17,
        checked: false
      },
      {
        dia: "18",
        id: 18,
        checked: false
      },
      {
        dia: "19",
        id: 19,
        checked: false
      },
      {
        dia: "20",
        id: 20,
        checked: false
      },
      {
        dia: "21",
        id: 21,
        checked: false
      },
      {
        dia: "22",
        id: 22,
        checked: false
      },
      {
        dia: "23",
        id: 23,
        checked: false
      },
      {
        dia: "24",
        id: 24,
        checked: false
      },
      {
        dia: "25",
        id: 25,
        checked: false
      },
      {
        dia: "26",
        id: 26,
        checked: false
      },
      {
        dia: "27",
        id: 27,
        checked: false
      },
      {
        dia: "28",
        id: 28,
        checked: false
      },
      {
        dia: "29",
        id: 29,
        checked: false
      },
      {
        dia: "30",
        id: 30,
        checked: false
      },
      {
        dia: "31",
        id: 31,
        checked: false
      },
      {
        dia: "Ultimo Dia",
        id: 32,
        checked: false
      }
    ];


  }


  semanachangeList() {
    this.diasDelaSemanaSeleccionado = [];

    for (let value of Object.values(this.diasDelaSemana)) {
      if (value.checked) {
        this.diasDelaSemanaSeleccionado.push(value.id.toString());
      }
    }
  }


  meseschangeList() {
    this.mesesDelAnnioSeleccionado = [];

    for (let value of Object.values(this.mesesDelAnnio)) {
      if (value.checked) {
        this.mesesDelAnnioSeleccionado.push(value.id.toString());
      }
    }
  }


  diaschangeList() {
    this.mesesDelAnnioSeleccionado = [];

    for (let value of Object.values(this.diasDelMes)) {
      if (value.checked) {
        this.diasDelMesSeleccionado.push(value.id.toString());
      }
    }
  }


  submitForm() {
    const valueToStore = Object.assign({}, this.form.value, {
      mesesDelAnnio: this.convertToValue('mesesDelAnnio'),
      diasDelMes: this.convertToValue('diasDelMes'),
      diasDelaSemana: this.convertToValue('diasDelaSemana')
    });
    console.log(valueToStore);
  }


  convertToValue(key: string) {
    return this.form.value[key].map((x, i) => x && this[key][i]).filter(x => !!x);
  }


  PeriodicidadChange() {
    console.log('this.periodicidadSeleccionada : ', this.periodicidadSeleccionada);
    if (this.periodicidadSeleccionada === 1) {

      this.hora = true;
      this.grillaFechas = false;
      this.botonAgregar = false;
      this.fecha = false;
      this.intervalo = false;
      this.semana = false;
      this.meses = false;
      this.dias = false;

    } else if (this.periodicidadSeleccionada === 2) {

      this.hora = true;
      this.grillaFechas = false;
      this.botonAgregar = false;
      this.fecha = false;
      this.intervalo = false;
      this.semana = true;
      this.meses = false;
      this.dias = false;

    } else if (this.periodicidadSeleccionada === 3) {

      this.hora = true;
      this.grillaFechas = false;
      this.botonAgregar = false;
      this.fecha = false;
      this.intervalo = false;
      this.semana = false;
      this.meses = true;
      this.dias = true;

    } else if (this.periodicidadSeleccionada === 4) {

      this.hora = false;
      this.grillaFechas = false;
      this.botonAgregar = false;
      this.fecha = false;
      this.intervalo = true;
      this.semana = false;
      this.meses = false;
      this.dias = false;

    } else if (this.periodicidadSeleccionada === 1002) {

      this.hora = true;
      this.grillaFechas = true;
      this.botonAgregar = true;
      this.fecha = true;
      this.intervalo = false;
      this.semana = false;
      this.meses = false;
      this.dias = false;

    } else {

      this.hora = false;
      this.grillaFechas = false;
      this.botonAgregar = false;
      this.fecha = false;
      this.intervalo = false;
      this.semana = false;
      this.meses = false;
      this.dias = false;

    }
  }


  Guardar() {

    console.log('this.diasDelaSemanaSeleccionado : ', this.diasDelaSemanaSeleccionado);
    console.log('this.mesesDelAnnioSeleccionado : ', this.mesesDelAnnioSeleccionado);
    console.log('this.diasDelMesSeleccionado : ', this.diasDelMesSeleccionado);

    if (this.periodicidadSeleccionada === 1) {
      this.EnviarDiario()
    } else if (this.periodicidadSeleccionada === 2) {
      this.EnviarSemanal()
    } else if (this.periodicidadSeleccionada === 3) {
      this.EnviarMensual()
    } else if (this.periodicidadSeleccionada === 4) {
      this.EnviarIntervalo()
    } else {

    }

  }

  Volver() {
    this.router.navigateByUrl('/tareas');
  }

  EnviarDiario() {
    this.dataEnvia = {
      nombreAplicativo: this.nombreAplicativo,
      codPeriodicidadProceso: this.periodicidadSeleccionada,
      semana: this.diasDelaSemanaSeleccionado,
      meses: [],
      dias: [],
      hora: this.horario,
      intervalo: 0,
    }
    console.log('this.dataEnvia : ', this.dataEnvia);
    this.service.insertartareasprogramadas(this.dataEnvia).subscribe(
      res => {
        console.log('res de insertar : ', res);
      }
      , err => console.error(err)
    );
  }


  EnviarSemanal() {
    this.dataEnvia = {
      nombreAplicativo: this.nombreAplicativo,
      codPeriodicidadProceso: this.periodicidadSeleccionada,
      semana: this.diasDelaSemanaSeleccionado,
      meses: [],
      dias: [],
      hora: this.horario,
      intervalo: 0,
    }
    console.log('this.dataEnvia : ', this.dataEnvia);
    this.service.insertartareasprogramadas(this.dataEnvia).subscribe(
      res => {
        console.log('res de insertar : ', res);
      }
      , err => console.error(err)
    );

  }


  EnviarMensual() {
    this.dataEnvia = {
      nombreAplicativo: this.nombreAplicativo,
      codPeriodicidadProceso: this.periodicidadSeleccionada,
      semana: [],
      meses: this.mesesDelAnnioSeleccionado,
      dias: this.diasDelMesSeleccionado,
      hora: this.horario,
      intervalo: 0,
    }

    console.log('this.dataEnvia : ', this.dataEnvia);

    this.service.insertartareasprogramadas(this.dataEnvia).subscribe(
      res => {
        console.log('res de insertar : ', res);
      }
      , err => console.error(err)
    );

  }


  EnviarIntervalo() {
    this.dataEnvia = {
      nombreAplicativo: this.nombreAplicativo,
      codPeriodicidadProceso: this.periodicidadSeleccionada,
      semana: [],
      meses: [],
      dias: [],
      hora: "",
      intervalo: this.intervalo,
    }

    console.log('this.dataEnvia : ', this.dataEnvia);

    this.service.insertartareasprogramadas(this.dataEnvia).subscribe(
      res => {
        console.log('res de insertar : ', res);
      }
      , err => console.error(err)
    );


  }


  CargaDataCombo() {

    this.service.listartipoperiodicidad().subscribe(
      res => {
        this.response = res;
        //console.log('this.response : ', this.response);
        this.response.forEach(obj => {
          console.log('obj : ', obj);
          this.periodicidad.push({
            id: obj.idTipoPeriodicidad,
            periodo: obj.descTipoPeriodicidad
          });
        });
      }
      , err => console.error(err)
    );

  }


  FechaCambia(dateObject) {
    console.log("DATE", dateObject);
    const stringified = JSON.stringify(dateObject.value);
    const dob = stringified.substring(1, 11);
    console.log("dob : ", dob);

  }

  AgregarFechas() {

    console.log('fecha : ', this.fechaAplicacion.toDateString)
    const stringified = JSON.stringify(this.fechaAplicacion);
    const dob = stringified.substring(1, 11);
    console.log("dob : ", dob);




  
    ///Because you don't use **DataSource**, you can do the following
    const temp = this.dataGrillaFechas.slice();
    temp.push({
      id: dob,
      fecha: dob
    });
    this.dataGrillaFechas = temp;




  }

}

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
