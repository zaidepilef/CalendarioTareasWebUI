import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CalendarioService } from 'src/app/services/calendario.service';
import { CustomValidators } from './custom.validators';
import swal from 'sweetalert2';

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


  diasDelaSemanaSeleccionado: Array<string> = [];
  countDiasdelaSemana: number = 0;

  mesesDelAnnioSeleccionado: Array<string> = [];
  countMesesDelAnnioSeleccionado: number = 0;

  diasDelMesSeleccionado: Array<string> = [];
  countDiasDelMesSeleccionado: number = 0;

  fechasEspecificas: Array<string> = [];
  countFechasEspecificas: number = 0;

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
  dataGrillaFechas: any[];
  fechaAplicacion: Date;


  //objeto al API
  dataEnvia: any = {}

  formulariodiario: boolean;
  formGroupDiario: FormGroup;

  formulariosemanal: boolean;
  formGroupSemanal: FormGroup;

  formulariomensual: boolean;
  formGroupMensual: FormGroup;

  formulariointervalohora: boolean;
  formGroupIntervaloHora: FormGroup;

  formulariofechaespecifica: boolean;
  formGroupFechaEspecifica: FormGroup;


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


    this.formGroupDiario = this.fb.group({
      nombreAplicativo: ['', [
        Validators.required
      ]],
      horario: ['', [
        Validators.required
      ]],
      periodicidad: ['', [
        Validators.required
      ]]
    });


    this.formGroupSemanal = this.fb.group({

      periodicidad: ['', [
        Validators.required
      ]],
      nombreAplicativo: ['', [
        Validators.required
      ]],
      horario: ['', [
        Validators.required
      ]]
    });


    this.formGroupMensual = this.fb.group({

      periodicidad: ['', [
        Validators.required
      ]],
      nombreAplicativo: ['', [
        Validators.required
      ]],
      horario: ['', [
        Validators.required
      ]]
    });


    this.formGroupIntervaloHora = this.fb.group({

      periodicidad: ['', [
        Validators.required
      ]],
      nombreAplicativo: ['', [
        Validators.required
      ]],
      intervalo: ['', [
        Validators.required
      ]],

    });


    this.formGroupFechaEspecifica = this.fb.group({

      periodicidad: ['', [
        Validators.required
      ]],
      nombreAplicativo: ['', [
        Validators.required
      ]],
      horario: ['', [
        Validators.required
      ]],


    });


  }

  FechaCambia(dateObject) {
    const stringified = JSON.stringify(dateObject.value);
    const dob = stringified.substring(1, 11);
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
        this.response = res;

        this.horario = this.response.hora + ":00";
        this.numeroIntervalo = this.response.intervalo;
        this.periodicidadSeleccionada = this.response.codPeriodicidadProceso;
        this.nombreAplicativo = this.response.nombreAplicativo;
        // numeroIntervalo: number;
        console.log('response : ', this.response);

        if (this.periodicidadSeleccionada === 1) {

          this.formulariodiario = true;

        } else if (this.periodicidadSeleccionada === 2) {

          this.formulariosemanal = true;
          const diasEntrantes = this.response.semanas;
          diasEntrantes.forEach(element => {
            const objIndex = this.diasDelaSemana.findIndex((obj => obj.id == element));
            this.diasDelaSemana[objIndex].checked = true;
            this.countDiasdelaSemana++;
          });

        } else if (this.periodicidadSeleccionada === 3) {

          this.formulariomensual = true;
          const mesesEntantes = this.response.meses;
          mesesEntantes.forEach(element => {
            const objIndex = this.mesesDelAnnio.findIndex((obj => obj.id == element));
            this.mesesDelAnnio[objIndex].checked = true;
            this.countMesesDelAnnioSeleccionado++;
          });

          const diasEntrantes = this.response.dias;
          diasEntrantes.forEach(element => {
            const objIndex = this.diasDelMes.findIndex((obj => obj.id == element));
            this.diasDelMes[objIndex].checked = true;
            this.countDiasDelMesSeleccionado++;
          });

        } else if (this.periodicidadSeleccionada === 4) {

          this.formulariointervalohora = true;

        } else if (this.periodicidadSeleccionada === 1002) {// fecha especifica

          this.formulariofechaespecifica = true;

          const listaFechas = this.response.fechasEspecificas;
          const temp = [];
          let countGrilla = listaFechas.length;
          listaFechas.forEach(fech => {
            temp.push({
              id: countGrilla++,
              fecha: fech
            });
            this.countFechasEspecificas++;
          });
          this.dataGrillaFechas = temp;
          console.log('temp despues : ', temp);
        } else {

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

  // dias de la semana
  semanachangeList() {
    this.diasDelaSemanaSeleccionado = [];

    for (let value of Object.values(this.diasDelaSemana)) {
      if (value.checked) {
        this.diasDelaSemanaSeleccionado.push(value.id.toString());
      }
    }
    this.countDiasdelaSemana = this.diasDelaSemanaSeleccionado.length
  }

  // meses del año
  meseschangeList() {
    this.mesesDelAnnioSeleccionado = [];

    for (let value of Object.values(this.mesesDelAnnio)) {
      if (value.checked) {
        this.mesesDelAnnioSeleccionado.push(value.id.toString());
      }
    }
    this.countMesesDelAnnioSeleccionado = this.mesesDelAnnioSeleccionado.length
  }

  // dias del mes
  diaschangeList() {
    this.diasDelMesSeleccionado = [];

    for (let value of Object.values(this.diasDelMes)) {
      if (value.checked) {
        this.diasDelMesSeleccionado.push(value.id.toString());
      }
    }
    this.countDiasDelMesSeleccionado = this.diasDelMesSeleccionado.length
  }


  Volver() {
    this.router.navigateByUrl('/tareas');
  }


  //onSubmitdiario OK
  onSubmitdiario() {

    console.log(this.formGroupDiario.value)

    this.dataEnvia = {
      idTareaProgramada: this.idTareaProgramada,
      nombreAplicativo: this.formGroupDiario.value.nombreAplicativo,
      codPeriodicidadProceso: this.periodicidadSeleccionada,
      meses: [],
      dias: [],
      hora: this.formGroupDiario.value.horario,
      intervalo: 0,
    }
    console.log('this.dataEnvia : ', this.dataEnvia);
    this.service.insertartareasprogramadas(this.dataEnvia).subscribe(
      res => {
        console.log('res de insertar : ', res);
        swal.fire('Exito', 'Datos ingresados', 'success');
      }
      , err => console.error(err)
    );
  }

  onSubmitSemanal() {

    this.dataEnvia = {
      idTareaProgramada: this.idTareaProgramada,
      nombreAplicativo: this.nombreAplicativo,
      codPeriodicidadProceso: this.periodicidadSeleccionada,
      semanas: this.diasDelaSemanaSeleccionado,
      meses: [],
      dias: [],
      hora: this.horario,
      intervalo: 0,
    }


    this.service.editartareasprogramadas(this.dataEnvia).subscribe(
      res => {
        console.log('res de insertar : ', res);
      }
      , err => console.error(err)
    );
    //console.log('this.diasDelaSemanaSeleccionado : ', this.diasDelaSemanaSeleccionado)
    this.dataEnvia = {
      nombreAplicativo: this.formGroupSemanal.value.nombreAplicativo,
      codPeriodicidadProceso: this.periodicidadSeleccionada,
      semanas: this.diasDelaSemanaSeleccionado,
      meses: [],
      dias: [],
      hora: this.formGroupSemanal.value.horario,
      intervalo: 0,
    }
    console.log('this.dataEnvia : ', this.dataEnvia);
    this.service.insertartareasprogramadas(this.dataEnvia).subscribe(
      res => {
        console.log('res de insertar : ', res);
        swal.fire('Exito', 'Datos ingresados', 'success');
      }
      , err => console.error(err)
    );
  }


  onSubmitMensual() {

    console.log(this.formGroupMensual.value)
    this.dataEnvia = {
      idTareaProgramada: this.idTareaProgramada,
      nombreAplicativo: this.formGroupMensual.value.nombreAplicativo,
      codPeriodicidadProceso: this.periodicidadSeleccionada,
      semanas: [],
      meses: this.mesesDelAnnioSeleccionado,
      dias: this.diasDelMesSeleccionado,
      hora: this.formGroupMensual.value.horario,
      intervalo: 0,
    }

    this.service.insertartareasprogramadas(this.dataEnvia).subscribe(
      res => {
        //console.log('res de insertar : ', res);
        swal.fire('Exito', 'Datos ingresados', 'success');
      }
      , err => console.error(err)
    );

  }


  onSubmitIntervaloHora() {
  
    console.log(this.formGroupIntervaloHora.value)

    this.dataEnvia = {
      idTareaProgramada: this.idTareaProgramada,
      nombreAplicativo: this.formGroupIntervaloHora.value.nombreAplicativo,
      codPeriodicidadProceso: this.periodicidadSeleccionada,
      semanas: [],
      meses: [],
      dias: [],
      hora: "",
      intervalo: this.formGroupIntervaloHora.value.intervalo,
    }

    console.log('this.dataEnvia : ', this.dataEnvia);

    this.service.insertartareasprogramadas(this.dataEnvia).subscribe(
      res => {
        console.log('res de insertar : ', res);
        //console.log('res de insertar : ', res);
        swal.fire('Exito', 'Datos ingresados', 'success');
      }
      , err => console.error(err)
    );
  }

  onSubmitFechaEspecifica() {
    
    console.log(this.formGroupFechaEspecifica.value)

    if (this.dataGrillaFechas.length == 0) {
      swal.fire('Agregue al menos una fecha', 'Atencion', 'warning');
    } else {

      for (let value of Object.values(this.dataGrillaFechas)) {
        //console.log('EnviarFechaEspecifica : ', value)
        this.fechasEspecificas.push(value.fecha.toString());
      }

      console.log('this.nombreAplicativo : ', this.nombreAplicativo);

      this.dataEnvia = {
        idTareaProgramada: this.idTareaProgramada,
        nombreAplicativo: this.formGroupFechaEspecifica.value.nombreAplicativo,
        codPeriodicidadProceso: this.periodicidadSeleccionada,
        semanas: this.diasDelaSemanaSeleccionado,
        meses: [],
        dias: [],
        hora: this.horario,
        intervalo: 0,
        fechasEspecificas: this.fechasEspecificas
      }

      console.log('this.dataEnvia : ', this.dataEnvia);
      // se conecta al servicio
      this.service.insertartareasprogramadas(this.dataEnvia).subscribe(
        res => {
          console.log('res de insertar : ', res);
          swal.fire('Exito', 'Datos de intervalo guardados', 'success');
        }
        , err => console.error(err)
      );

    }






  }

}
