import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoDTO } from 'src/dto/ProdutoDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {
  constructor(private http:HttpClient) { }

  cadastrarProduto(produto: ProdutoDTO){
    let body = JSON.stringify(produto);
    return this.http.post("server/produto/add", body, httpOptions);
  }
}
