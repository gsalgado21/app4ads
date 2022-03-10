import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {

  public peso: number;
  public altura: number;
  public imc: any;
  public resultado: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImcPage');
  }

  calcular(){
    this.imc = this.peso / this.altura**2;
    this.imc = this.imc.toPrecision(2);
    console.log("resultado do imc: ", this.imc);  

    if (this.imc <= 18.5){
      this.resultado = 'Peso baixo';
    } else if (this.imc > 18.5 && this.imc < 24.9) {
      this.resultado = 'Peso normal ou adequado';
    } else if(this.imc > 25 && this.imc < 29.9){
      this.resultado = 'Sobrepeso';
    } else if(this.imc > 30 && this.imc < 34.9){
      this.resultado = 'Obesidade Grau I';
    } else if(this.imc > 35 && this.imc < 39.9){
      this.resultado = 'Obesidade Grau II';
    } else {
      this.resultado = 'Obesidade Grau III ou mórbida';
    }

    console.log("resultado:", this.resultado);
  }

  close(){
    this.navCtrl.setRoot(HomePage);
  }

}
