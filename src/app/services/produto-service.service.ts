import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoDTO } from 'src/dto/ProdutoDTO';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {
  private readonly url = environment.API;
  constructor(private http:HttpClient) { }

  cadastrarProduto(produto: ProdutoDTO){
    let body = JSON.stringify(produto);
    return this.http.post(`${this.url}/produto/add`, body, httpOptions);
  }

  getProdutos() {
    return this.http.get(`${this.url}/produto/lista`);
  }
}
