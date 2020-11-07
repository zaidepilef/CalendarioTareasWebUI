import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-calendarizacion',
  templateUrl: './calendarizacion.component.html',
  styleUrls: ['./calendarizacion.component.css']
})
export class CalendarizacionComponent implements OnInit {

  //cajas formulario

  hora: boolean;
  intervalo: boolean;
  semana: boolean;
  meses: boolean;
  dias: boolean;


  periodicidad: any[];
  mesesDelAnnio: any[];
  diasDelMes: any[];
  diasDelaSemana: any[];

  form: FormGroup;
  nombreAplicativo: string;
  periodicidadSeleccionada: number;
  numeroIntervalo: number;
  horario: string;


  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      //skills: this.buildSkills()
      mesesDelAnnio: this.fb.array(this.mesesDelAnnio.map(x => !1)),
      diasDelMes: this.fb.array(this.diasDelMes.map(x => !1)),
      diasDelaSemana: this.fb.array(this.diasDelaSemana.map(x => !1))
    });
    this.hora = false;
    this.intervalo = false;
    this.semana = false;
    this.meses = false;
    this.dias = false;
  }


  ngOnInit(): void {

    this.periodicidad = [
      {
        id: 1,
        periodo: "Diario"
      },
      {
        id: 2,
        periodo: "Semanal"
      },
      {
        id: 3,
        periodo: "Mensual"
      },
      {
        id: 4,
        periodo: "Intervalo Hora"
      }
    ];

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

    this.diasDelaSemana = [
      {
        id: 1,
        dia: "Lunes"
      },
      {
        id: 2,
        dia: "Martes"
      },
      {
        id: 3,
        dia: "Miercoles"
      },
      {
        id: 4,
        dia: "Jueves"
      },
      {
        id: 5,
        dia: "Viernes"
      },
      {
        id: 6,
        dia: "Sabado"
      },
      {
        id: 7,
        dia: "Domingo"
      }
    ];

    this.diasDelMes = [
      {
        dia: "1",
        id: 1
      },
      {
        dia: "2",
        id: 2
      },
      {
        dia: "3",
        id: 3
      },
      {
        dia: "4",
        id: 4
      },
      {
        dia: "5",
        id: 5
      },
      {
        dia: "6",
        id: 6
      },
      {
        dia: "7",
        id: 7
      },
      {
        dia: "8",
        id: 8
      },
      {
        dia: "9",
        id: 9
      },
      {
        dia: "10",
        id: 10
      },
      {
        dia: "11",
        id: 11
      }, {
        dia: "12",
        id: 12
      },
      {
        dia: "13",
        id: 13
      },
      {
        dia: "14",
        id: 14
      },
      {
        dia: "15",
        id: 15
      },
      {
        dia: "16",
        id: 16
      },
      {
        dia: "17",
        id: 17
      },
      {
        dia: "18",
        id: 18
      },
      {
        dia: "19",
        id: 19
      },
      {
        dia: "20",
        id: 20
      },
      {
        dia: "21",
        id: 21
      },
      {
        dia: "22",
        id: 22
      },
      {
        dia: "23",
        id: 23
      },
      {
        dia: "24",
        id: 24
      },
      {
        dia: "25",
        id: 25
      },
      {
        dia: "26",
        id: 26
      },
      {
        dia: "27",
        id: 27
      },
      {
        dia: "28",
        id: 28
      },
      {
        dia: "29",
        id: 29
      },
      {
        dia: "30",
        id: 30
      },
      {
        dia: "31",
        id: 31
      },
      {
        dia: "Ultimo Dia",
        id: 1
      }
    ];

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

    if (this.periodicidadSeleccionada === 1) {

      this.hora = true;
      this.intervalo = false;
      this.semana = false;
      this.meses = false;
      this.dias = false;

    } else if (this.periodicidadSeleccionada === 2) {

      this.hora = true;
      this.intervalo = false;
      this.semana = true;
      this.meses = false;
      this.dias = false;

    } else if (this.periodicidadSeleccionada === 3) {

      this.hora = true;
      this.intervalo = false;
      this.semana = false;
      this.meses = true;
      this.dias = true;

    } else if (this.periodicidadSeleccionada === 4) {

      this.hora = false;
      this.intervalo = true;
      this.semana = false;
      this.meses = false;
      this.dias = false;

    } else {

      this.hora = false;
      this.intervalo = false;
      this.semana = false;
      this.meses = false;
      this.dias = false;

    }
  }


}
