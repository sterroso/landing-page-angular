import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

const etiquetaSutipoUsuarioMap: Map<string, string> = new Map([
  ['vacio', ''],
  ['individual', 'Uso mas frecuente'],
  ['corporativo', 'Nombre de la compañia'],
  ['educativo', 'Nombre de la institucion'],
  ['otro', 'Especifique'],
]);

@Component({
  selector: 'input-tipo-secundario',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnChanges {
  @Input() tipoUsuario: string = '';

  subformTipoUsuario: FormGroup;

  // 'Uso mas frecuente', 'Nombre de la compañia', 'Nombre de la institucion', 'Especifique', ...
  labelText: string = '';

  constructor(private subform: FormBuilder) {
    this.subformTipoUsuario = this.subform.group({
      detalle: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.labelText = etiquetaSutipoUsuarioMap.get(changes['tipoUsuario']?.currentValue) || '';
  }
}
