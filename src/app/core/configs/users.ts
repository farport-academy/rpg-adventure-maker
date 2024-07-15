import { ValidatorFn, Validators } from '@angular/forms';
import { FormConfig } from '../../shared/form/form.component';
import { TableConfig } from '../../shared/table/table.model';
import { matchPasswordValidator } from '../validators/matchPasswordValidator';


export const userFormConfig: FormConfig[] = [
  {
    name: 'firstName',
    label: 'Nome',
    type: 'text',
    validators: [Validators.required],
  },
  {
    name: 'lastName',
    label: 'congnome',
    type: 'text',
    validators: [Validators.required],
  },
  {
    name: 'city',
    label: 'La tua città',
    type: 'text',
    validators: [Validators.required],
  },
  {
    name: 'email',
    label: 'Indirizzo Email',
    type: 'text',
    validators: [Validators.required, Validators.email],
  },
  {
    name: 'phone',
    label: 'Numero di telefono',
    type: 'text',
    validators: [Validators.required, Validators.pattern(/^\+\d{2}\s\d{10}$/)],
    errorMessage: 'deve essere un numero di telefono valido',
  },
  {
    name: 'notes',
    label: 'note',
    type: 'textarea',
    validators: [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(100),
    ],
  },
];

export const UpdateUserConfig: FormConfig[] = [
  {
    name: 'email',
    label: 'Indirizzo email',
    type: 'text',
    validators: [ Validators.required, Validators.email]
  },
  {
    name: 'password',
    label: 'Password', 
    type: 'password',
  }
]

export const userTableConfig: TableConfig[] = [
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'type',
    type: 'text',
    label: 'Type'
  },
  {
    name: 'detail',
    type: 'action',
    label: 'Go to detail',
  },
]
