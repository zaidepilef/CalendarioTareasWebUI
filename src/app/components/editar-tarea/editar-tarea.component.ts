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

  idTareaProgramada: number;
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

  nombreAplicativo: string;
  periodicidadSeleccionada: number;
  numeroIntervalo: number;
  horario: string;

  form: FormGroup;
  response: any = {
    codPeriodicidadProceso: 0,
    dias: [],
    hora: "",
    intervalo: 0,
    meses: [],
    message: "",
    nombreAplicativo: ""
  };
  dataGrillaFechas: any = [];
  fechaAplicacion: Date;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private service: CalendarioService, private router: Router) {

    this.form = this.fb.group({
      nombreAplicativo: new FormControl('')
    });

    this.periodicidad = [];
    this.CargaDataCombo();

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
    this.idTareaProgramada = Number(params.id)
    this.BuscaDataTarea(params.id);
  }

  FechaCambia(dateObject) {
    console.log("DATE", dateObject);
    const stringified = JSON.stringify(dateObject.value);
    const dob = stringified.substring(1, 11);
    console.log("dob : ", dob);

  }


  AgregarFechas() {

    let countGrilla = this.dataGrillaFechas.length;
    const stringified = JSON.stringify(this.fechaAplicacion);
    const dob = stringified.substring(1, 11);

    const temp = this.dataGrillaFechas.slice();
    temp.push({
      id: countGrilla++,
      fecha: dob
    });
    this.dataGrillaFechas = temp;

  }

  eliminarRowGrilla(element) {
    console.log('element : ', element)
    const index = this.dataGrillaFechas.indexOf(element);
    console.log('index : ', index)
    this.dataGrillaFechas.splice(index, 1);
    const temp = this.dataGrillaFechas.slice();
    this.dataGrillaFechas = temp;

  }

  BuscaTipoFormulario() {


    if (this.periodicidadSeleccionada === 1) {

      this.hora = true;
      this.fecha = false;
      this.intervalo = false;
      this.semana = false;
      this.meses = false;
      this.dias = false;

    } else if (this.periodicidadSeleccionada === 2) {

      this.hora = true;
      this.fecha = false;
      this.intervalo = false;
      this.semana = true;
      this.meses = false;
      this.dias = false;

    } else if (this.periodicidadSeleccionada === 3) {

      this.hora = true;
      this.fecha = false;
      this.intervalo = false;
      this.semana = false;
      this.meses = true;
      this.dias = true;

      // llena los combos
      const mesesEntantes = this.response.meses;
      mesesEntantes.forEach(element => {
        const objIndex = this.mesesDelAnnio.findIndex((obj => obj.id == element));
        this.mesesDelAnnio[objIndex].checked = true;
      });

      // llena los combos
      const diasEntrantes = this.response.dias;
      diasEntrantes.forEach(element => {
        const objIndex = this.diasDelMes.findIndex((obj => obj.id == element));
        this.diasDelMes[objIndex].checked = true;
      });

    } else if (this.periodicidadSeleccionada === 4) {

      this.hora = false;
      this.fecha = true;
      this.intervalo = true;
      this.semana = false;
      this.meses = false;
      this.dias = false;

    } else if (this.periodicidadSeleccionada === 1002) {

      this.hora = true;
      this.fecha = true;
      this.intervalo = false;
      this.semana = false;
      this.meses = false;
      this.dias = false;

    } else {

      this.hora = false;
      this.fecha = true;
      this.intervalo = false;
      this.semana = false;
      this.meses = false;
      this.dias = false;

    }
  }

  BuscaDataTarea(id: any) {

    this.service.BuscarCalendarioTareaProgramdaByIdTarea(id).subscribe(
      res => {

        this.response = res
        console.log("this.response : ", this.response);

        this.horario = this.response.hora + ":00";

        console.log("this.horario : ", this.horario);

        this.numeroIntervalo = this.response.intervalo;
        this.periodicidadSeleccionada = this.response.codPeriodicidadProceso;
        this.nombreAplicativo = this.response.nombreAplicativo;
        // numeroIntervalo: number;

        if (this.periodicidadSeleccionada === 1) {

          this.hora = true;
          this.fecha = false;
          this.intervalo = false;
          this.semana = false;
          this.meses = false;
          this.dias = false;

        } else if (this.periodicidadSeleccionada === 2) {

          this.hora = true;
          this.fecha = false;
          this.intervalo = false;
          this.semana = true;
          this.meses = false;
          this.dias = false;

        } else if (this.periodicidadSeleccionada === 3) {

          this.hora = true;
          this.fecha = false;
          this.intervalo = false;
          this.semana = false;
          this.meses = true;
          this.dias = true;

          const mesesEntantes = this.response.meses;
          mesesEntantes.forEach(element => {
            const objIndex = this.mesesDelAnnio.findIndex((obj => obj.id == element));
            this.mesesDelAnnio[objIndex].checked = true;
          });

          const diasEntrantes = this.response.dias;
          diasEntrantes.forEach(element => {
            const objIndex = this.diasDelMes.findIndex((obj => obj.id == element));
            this.diasDelMes[objIndex].checked = true;
          });

        } else if (this.periodicidadSeleccionada === 4) {

          this.hora = false;
          this.fecha = true;
          this.intervalo = true;
          this.semana = false;
          this.meses = false;
          this.dias = false;

        } else if (this.periodicidadSeleccionada === 1002) {// fecha especifica

          this.hora = true;
          this.fecha = true;
          this.intervalo = false;
          this.semana = false;
          this.meses = false;
          this.dias = false;
          this.grillaFechas = true;

          const listaFechas = this.response.fechasEspecificas;
          console.log('listaFechas : ', listaFechas);

          const temp = this.dataGrillaFechas.slice();
          console.log('temp antes : ', temp);
          let countGrilla = listaFechas.length;

          listaFechas.forEach(fech => {
            console.log('fech : ', fech);
            temp.push({
              id: countGrilla++,
              fecha: fech
            });
          });

          this.dataGrillaFechas = temp;

          console.log('temp despues : ', temp);


        } else {

          this.hora = false;
          this.fecha = true;
          this.intervalo = false;
          this.semana = false;
          this.meses = false;
          this.dias = false;

        }
      }
      , err => console.error(err)
    );
  }

  CargaDataCombo() {

    this.service.listartipoperiodicidad().subscribe(
      res => {
        this.response = res;
        this.response.forEach(obj => {
          this.periodicidad.push({
            id: obj.idTipoPeriodicidad,
            periodo: obj.descTipoPeriodicidad
          });
        });
      }
      , err => console.error(err)
    );

  }

  PeriodicidadChange() {

  }


  Guardar() {
    console.log(' this.idTareaProgramada : ', this.idTareaProgramada);
    console.log(' this.nombreAplicativo : ', this.nombreAplicativo);
    console.log(' this.periodicidadSeleccionada : ', this.periodicidadSeleccionada);
    console.log(' this.horario : ', this.horario);
    console.log(' this.numeroIntervalo : ', this.numeroIntervalo);
    console.log(' this.dataGrillaFechas : ', this.dataGrillaFechas);
  }


  Volver() {
    this.router.navigateByUrl('/tareas');
  }

}
