import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ProdutoDTO } from 'src/dto/ProdutoDTO';
import { ProdutoServiceService } from '../services/produto-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('nome')nome;
  @ViewChild('valor')valor;
  
  constructor(private produtoService:ProdutoServiceService,
              private toastCtrl: ToastController,
              private navCtrl: NavController) {}

  cadastrarProduto(produto:ProdutoDTO){
    let toast = this.toastCtrl.create({message: "foi", position: "bottom", duration: 3000});
    produto = new ProdutoDTO();
    produto.nome = this.nome.value;
    produto.valor = this.valor.value;
    
    this.produtoService.cadastrarProduto(produto).subscribe(
      res => {console.log(res)
      });
  }

  listarProduto(){
   this.navCtrl.navigateRoot('list');
  }

}
