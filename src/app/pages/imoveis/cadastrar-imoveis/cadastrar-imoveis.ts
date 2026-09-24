import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastrar-imoveis',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-imoveis.html',
  styleUrl: './cadastrar-imoveis.css'
})
export class CadastrarImoveis {

  titulo = '';
  tipo = '';
  finalidade = '';
  preco = '';
  area = '';
  quartos = '';
  banheiros = '';
  vagas = '';
  endereco = '';
  cidade = '';
  estado = '';
  descricao = '';

enviarAnuncio(): void {

  const imovel = {
    id: Date.now(),
    titulo: this.titulo,
    tipo: this.tipo,
    finalidade: this.finalidade,
    preco: this.preco,
    area: this.area,
    quartos: this.quartos,
    banheiros: this.banheiros,
    vagas: this.vagas,
    endereco: this.endereco,
    cidade: this.cidade,
    estado: this.estado,
    descricao: this.descricao
  };

  const imoveisSalvos =
    JSON.parse(localStorage.getItem('imoveis') || '[]');

  imoveisSalvos.push(imovel);

  localStorage.setItem(
    'imoveis',
    JSON.stringify(imoveisSalvos)
  );

  alert('Imóvel cadastrado com sucesso!');
}
}