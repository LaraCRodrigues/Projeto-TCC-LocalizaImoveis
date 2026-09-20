import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalhes-imoveis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalhes-imoveis.html',
  styleUrl: './detalhes-imoveis.css'
})
export class DetalhesImoveis {

  favorito = false;

  galeriaAberta = false;
  imagemAtual = 0;

  toastVisivel = false;
  toastErro = false;
  toastIcone = 'check_circle';
  mensagemToast = '';

  abaAtiva: 'msg' | 'visit' = 'msg';

  nomeLead = '';
  telefoneLead = '';
  emailLead = '';
  mensagemLead = '';

  imagens: string[] = [];

  compartilharImovel(): void {
    const url = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: 'Imóvel - localizaImóveis',
        url
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(url);
      this.mostrarToast('Link do imóvel copiado!');
    }
  }

  alternarFavorito(): void {
    this.favorito = !this.favorito;

    this.mostrarToast(
      this.favorito
        ? 'Imóvel salvo nos favoritos!'
        : 'Imóvel removido dos favoritos.'
    );
  }

  imprimirFicha(): void {
    window.print();
  }

  abrirGaleria(): void {
    this.galeriaAberta = true;
    this.imagemAtual = 0;
  }

  fecharGaleria(): void {
    this.galeriaAberta = false;
  }

  imagemAnterior(): void {
    if (this.imagens.length === 0) {
      return;
    }

    this.imagemAtual =
      (this.imagemAtual - 1 + this.imagens.length) %
      this.imagens.length;
  }

  proximaImagem(): void {
    if (this.imagens.length === 0) {
      return;
    }

    this.imagemAtual =
      (this.imagemAtual + 1) % this.imagens.length;
  }

  abrirTourVirtual(): void {
    this.mostrarToast('O tour virtual estará disponível em breve.');
  }

  alternarAba(aba: 'msg' | 'visit'): void {
    this.abaAtiva = aba;
  }

  enviarMensagem(): void {
    if (
      !this.nomeLead.trim() ||
      !this.telefoneLead.trim() ||
      !this.emailLead.trim()
    ) {
      this.mostrarToast(
        'Preencha nome, telefone e e-mail.',
        true
      );

      return;
    }

    this.mostrarToast('Mensagem enviada com sucesso!');
  }

  setMensagemRapida(mensagem: string): void {
    this.mensagemLead = mensagem;
  }

  confirmarAgendamento(): void {
    this.mostrarToast(
      'Solicitação de visita enviada com sucesso!'
    );
  }

  mostrarToast(mensagem: string, erro = false): void {
    this.mensagemToast = mensagem;
    this.toastErro = erro;
    this.toastIcone = erro ? 'error' : 'check_circle';
    this.toastVisivel = true;

    window.setTimeout(() => {
      this.toastVisivel = false;
    }, 3000);
  }
}