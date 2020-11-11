import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CalendarioService } from 'src/app/services/calendario.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {

  hora: boolean;
  intervalo: boolean;
  semana: boolean;
  meses: boolean;
  dias: boolean;

  periodicidad: any[];
  diasDelaSemana: any[];
  mesesDelAnnio: any[];
  diasDelMes: any[];

  nombreAplicativo: string;
  periodicidadSeleccionada: number;
  numeroIntervalo: number;
  horario: string;

  form: FormGroup;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private service: CalendarioService) {

    this.form = this.fb.group({
      nombreAplicativo: new FormControl('')
      //skills: this.buildSkills()
      //mesesDelAnnio: this.fb.array(this.mesesDelAnnio.map(x => !1)),
      //diasDelMes: this.fb.array(this.diasDelMes.map(x => !1)),
      //diasDelaSemana: this.fb.array(this.diasDelaSemana.map(x => !1))
    });

    this.hora = false;
    this.intervalo = false;
    this.semana = false;
    this.meses = false;
    this.dias = false;

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

  ngOnInit(): void {

    let params: any = this.activatedRoute.snapshot.params;
    console.log(params.id);
    var tareaID = params.id;

    this.service.BuscarCalendarioTareaProgramdaByIdTarea(params.id).subscribe(
      res => {
        console.log('BuscarCalendarioTareaProgramdaByIdTarea : ', res);

        //console.log('nombreAplicativo : ', res.nombreAplicativo);
        //console.log('hora : ', res.hora);
        //console.log('intervalo : ', res.intervalo);

        //this.horario = res.hora;
        // numeroIntervalo: number;
        //this.numeroIntervalo = res.intervalo;
        //this.periodicidadSeleccionada = Number(res.codPeriodicidadProceso);
        //this.nombreAplicativo = res.nombreAplicativo.ToString();

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
      , err => console.error(err)
    );


  }



  PeriodicidadChange() {
    console.log('this.periodicidadSeleccionada : ', this.periodicidadSeleccionada);
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


  Guardar() {

  }

}
