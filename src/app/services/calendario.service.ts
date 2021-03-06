import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})

export class CalendarioService {

	constructor(private httpClient: HttpClient) { }

	// lista las tareas
	public listartareasprogramadas() {
		return this.httpClient.get(`${environment.API_URL}/calendariotareasprogramadas/listartareasprogramadas/`);
	}

	// para ingresar una tarea
	public insertartareasprogramadas(data: any) {
		return this.httpClient.post(`${environment.API_URL}/calendariotareasprogramadas/`, data);
	}

	// para ediatr una tarea
	public editartareasprogramadas(data: any) {
		return this.httpClient.post(`${environment.API_URL}/calendariotareasprogramadas/editar`, data);
	}

	// para eliminar
	public eliminartareasprogramadas(id: any) {
		return this.httpClient.delete(`${environment.API_URL}/calendariotareasprogramadas/eliminar/` + id);
	}

	// editar por get
	public BuscarCalendarioTareaProgramdaByIdTarea(id: any) {
		return this.httpClient.get(`${environment.API_URL}/calendariotareasprogramadas/BuscarCalendarioTareaProgramdaByIdTarea/` + id);
	}

	public listartipoperiodicidad() {
		return this.httpClient.get(`${environment.API_URL}/calendariotareasprogramadas/listartipoperiodicidad/`);
	}

}
