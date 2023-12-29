import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  constructor(private router: Router, private cepService: ConsultaCepService) {}

  ngOnInit(): void {}

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/sucesso']);
    } else {
      alert('Formulário inválido!');
    }
    console.log('Formulário enviado', form);
    console.log('Form controls', form.controls);
  }

  checkCep(ev: any, f: NgForm) {
    const cep = ev?.target?.value;
    if (cep) {
      this.cepService.checkCep(cep).subscribe((result) => {
        console.log(result);
        this.populateAddress(result, f);
      });
    }
  }

  private populateAddress(data: any, f: NgForm) {
    f.form.patchValue({
      endereco: data.logradouro,
      complement: data.complemento,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
    });
  }
}
