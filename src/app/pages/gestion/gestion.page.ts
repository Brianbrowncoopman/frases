import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder,  FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CitaService } from 'src/app/services/cita';
import { Cita } from 'src/app/models/cita.model';
import { CitaCardComponent } from 'src/app/components/cita-card/cita-card.component'; 
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
  standalone: true,
  imports: [IonicModule,  CommonModule, FormsModule, ReactiveFormsModule, CitaCardComponent]
})
export class GestionPage implements OnInit {
  citaForm: FormGroup;
  citas: Cita[] = [];
  


  /*constructor(
    private citaService: CitaService) {
    this.citaForm = new FormGroup({
      frase: new FormControl('', [Validators.required, Validators.minLength(5)]),
      autor: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
   }*/

    constructor(private fb: FormBuilder, private citaService: CitaService) {
    this.citaForm = this.fb.group({
      frase: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.citas = this.citaService.getCitas(); 
  }

  agregarCita() {
    if (this.citaForm.valid){
      const nuevaCita: Cita = this.citaForm.value;
      this.citas.push(nuevaCita);
      this.citaForm.reset();
    }
  }

  actualizarLista(){
    this.citas = this.citaService.getCitas()
  }

  eliminar(id: number) {
    this.citaService.eliminarCitas(id);
    /*this.listar();*/
    this.actualizarLista();
  }

}
