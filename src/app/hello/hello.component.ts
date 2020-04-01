import { Component } from '@angular/core';

@Component({
    selector:'app-hello',
    template: `
    <h2>Olá {{nome}}</h2>
    `
})
export class HelloComponent {
    nome = 'Carlúcio Pessoa';

}