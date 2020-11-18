import { Component, OnInit } from '@angular/core';
import { TareaProgramadaModel } from 'src/TareaProgramadaModel';
import { TareaProgramadaServiceService } from 'src/app/tarea-programada-service.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { CalendarioService } from 'src/app/services/calendario.service';



@Component({
  selector: 'app-tareasprogramada',
  templateUrl: './tareaprogramada.component.html',
  styleUrls: ['./tareaprogramada.component.css']
})

export class TareaprogramadaComponent implements OnInit {
  ElementData: TareaProgramadaModel[] = [];
  displayedColumns: string[] = ['idTareaProgramada', 'codPeriodicidadProceso', 'nombrePeriodicidad', 'nombreAplicativo', 'url'];
  dataSource = new MatTableDataSource<TareaProgramadaModel>(this.ElementData);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private service: TareaProgramadaServiceService, private serviceEli: CalendarioService, private router: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
  }


  public getAllReports() {
    let resp = this.service.ListarTareasprogramadas();
    resp.subscribe(report => this.dataSource.data = report as TareaProgramadaModel[])
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  btnClickNuevo() {
    this.router.navigateByUrl('/calendarizacion');
  }

  editTareaItem(obj) {
    this.router.navigate(['/editarTarea', Number(obj.codPeriodicidadProceso)])
  }


  borrarTareaItem(obj) {

    console.log('obj : ', obj);

    this.serviceEli.eliminartareasprogramadas(obj.idTareaProgramada).subscribe(
      res => {
        console.log('res : ', res)
        this.router.navigate(['/tareas'])
      }
      , err => console.error(err)
    );

  }


  openDialog(action, obj) {

    console.log('action : ', action);
    console.log('obj : ', obj);
    this.router.navigate(['/editarTarea', Number(obj.codPeriodicidadProceso)])
  }

}