import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/cita.model';
import { CitaCardComponent } from 'src/app/components/cita-card/cita-card.component';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, CitaCardComponent]
})
export class GestionPage implements OnInit {
  citaForm: FormGroup;
  citas: Cita[] = [];

  constructor(private fb: FormBuilder, private citaService: CitaService) {
    this.citaForm = this.fb.group({
      frase: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
    this.listar();
  }

  async listar() {
    this.citas = await this.citaService.getCitas();
  }

  async agregarCitas() {
    if (this.citaForm.valid) {
      const nuevaCita: Cita = this.citaForm.value;
      await this.citaService.agregarCita(nuevaCita);
      this.citaForm.reset();
      await this.listar();
    }
  }

  async eliminarCita(id: number) {
    await this.citaService.eliminarCita(id);
    await this.listar();
  }
}

