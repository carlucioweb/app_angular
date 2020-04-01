import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoId = 0;
  nome = 'Carlúcio';
  adicionado = false;
  funcionarios = [];

  adicionar() {

    this.adicionado = true;
    console.log(this.nome);

    this.funcionarios.push({
      
      id: ++this.ultimoId,
      nome: this.nome
    
    });

  }



}
