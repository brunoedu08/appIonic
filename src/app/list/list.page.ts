import { Component, OnInit } from '@angular/core';
import { ProdutoServiceService } from '../services/produto-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public produtos;

  constructor(private produtoService: ProdutoServiceService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe(
      data => { this.produtos = data },
    );
  }
}
