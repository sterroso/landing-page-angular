import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'input-tipo-secundario',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnChanges {
  @Input() tipoUsuario: string = '';

  subformTipoUsuario: FormGroup;

  // ['Uso mas frecuente', 'Nombre de la compañia', 'Nombre de la institucion', 'Especifique']
  labelText: string = 'Uso mas frecuente'

  constructor(private subform: FormBuilder) {
    this.subformTipoUsuario = this.subform.group({
      detalle: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
}
