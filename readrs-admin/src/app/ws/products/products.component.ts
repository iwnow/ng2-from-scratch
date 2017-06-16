import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'products-table',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="material-icons md-18">add_box</i>',
      createButtonContent: '<i class="material-icons md-18">save</i>',
      cancelButtonContent: '<i class="material-icons md-18">cancel</i>'
    },
    edit: {
      editButtonContent: '<i class="material-icons md-18">mode_edit</i>',
      saveButtonContent: '<i class="material-icons md-18">save</i>',
      cancelButtonContent: '<i class="material-icons md-18">close</i>',
    },
    delete: {
      deleteButtonContent: '<i class="material-icons md-18">delete</i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      name: {
        title: 'Name',
        type: 'string'
      },
      create: {
        title: 'Create',
        type: 'date'
      },
      validTo: {
        title: 'ValidTo',
        type: 'date'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

}