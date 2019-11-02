import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova0111';
  cliente: Cliente = new Cliente()
  constructor(private http: HttpClient) {

  }
  VerificaUF() {
    this.http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.cliente.UF}/mesorregioes`).toPromise().then(
      data => { 
        
        const dado: any = data;
        this.cliente.NomeUF = dado[2].nome;
        console.log(data[2].nome);
      }
      
    );
  };
  

}

