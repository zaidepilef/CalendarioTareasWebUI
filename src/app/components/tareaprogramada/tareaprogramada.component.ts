import { Component, OnInit } from '@angular/core';
import { TareaProgramadaModel } from 'src/TareaProgramadaModel';
import {TareaProgramadaServiceService} from 'src/app/tarea-programada-service.service'
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-tareasprogramada',
  templateUrl: './tareaprogramada.component.html',
  styleUrls: ['./tareaprogramada.component.css']
})

export class TareaprogramadaComponent implements OnInit {
  ElementData: TareaProgramadaModel[]= [];
  displayedColumns: string[] =['idTareaProgramada','codPeriodicidadProceso','nombrePeriodicidad','nombreAplicativo','url'];
  dataSource = new MatTableDataSource<TareaProgramadaModel>(this.ElementData);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private service:TareaProgramadaServiceService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getAllReports();
  }

    
  public getAllReports(){
    let resp = this.service.ListarTareasprogramadas();
    resp.subscribe(report=>this.dataSource.data=report  as TareaProgramadaModel[])
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}