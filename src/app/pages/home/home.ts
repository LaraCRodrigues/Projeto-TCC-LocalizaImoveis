import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  favorito = false;

  galeriaAberta = false;

  abaContato: 'msg' | 'visit' = 'msg';

  toastVisivel = false;
  toastErro = false;
  mensagemToast = 'Notificação';
  toastIcone = 'check_circle';

  nomeLead = '';
  telefoneLead = '';
  emailLead = '';
  mensagemLead =
    'Olá Carlos! Gostaria de agendar uma visita e receber a documentação desta Cobertura Duplex no Corredor da Vitória (Cód LI-98420).';

  private toastTimeout?: ReturnType<typeof setTimeout>;

  alternarFavorito(): void {
    this.favorito = !this.favorito;

    if (this.favorito) {
      this.mostrarToast('Imóvel adicionado aos seus favoritos!');
    } else {
      this.mostrarToast('Imóvel removido dos favoritos.');
    }
  }

  async compartilharImovel(): Promise<void> {
    const dados = {
      title: 'Cobertura Duplex 310m² - localizaImóveis',
      text: 'Confira esta espetacular cobertura duplex com vista panorâmica para a Baía de Todos os Santos.',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(dados);
      } catch {
        // O usuário cancelou o compartilhamento.
      }

      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      this.mostrarToast('Link do imóvel copiado para a área de transferência!');
    } catch {
      this.mostrarToast('Não foi possível copiar o link.', true);
    }
  }

  imprimirFicha(): void {
    window.print();
  }

  alternarAba(aba: 'msg' | 'visit'): void {
    this.abaContato = aba;
  }

  setMensagemRapida(texto: string): void {
    this.mensagemLead = texto;
  }

  enviarMensagem(): void {
    const nome = this.nomeLead.trim() || 'cliente';

    this.mostrarToast(
      `Obrigado ${nome}! Sua mensagem foi enviada ao corretor Carlos Silva.`
    );

    this.nomeLead = '';
    this.telefoneLead = '';
    this.emailLead = '';
    this.mensagemLead =
      'Olá Carlos! Gostaria de agendar uma visita e receber a documentação desta Cobertura Duplex no Corredor da Vitória (Cód LI-98420).';
  }

  confirmarAgendamento(): void {
    this.mostrarToast(
      'Visita solicitada com sucesso! O corretor confirmará em breve.'
    );
  }

  abrirGaleria(): void {
    this.galeriaAberta = true;
    document.body.style.overflow = 'hidden';
  }

  fecharGaleria(): void {
    this.galeriaAberta = false;
    document.body.style.overflow = '';
  }

  imagemAnterior(): void {
    this.mostrarToast('Exibindo imagem anterior');
  }

  proximaImagem(): void {
    this.mostrarToast('Exibindo próxima imagem');
  }

  abrirTourVirtual(): void {
    this.mostrarToast(
      'Carregando Tour Virtual 360° em alta fidelidade...'
    );

    this.abrirGaleria();
  }

  mostrarToast(mensagem: string, erro = false): void {
    this.mensagemToast = mensagem;
    this.toastErro = erro;
    this.toastIcone = erro ? 'error' : 'check_circle';
    this.toastVisivel = true;

    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    this.toastTimeout = setTimeout(() => {
      this.toastVisivel = false;
    }, 3500);
  }

  @HostListener('document:keydown.escape')
  fecharGaleriaComEsc(): void {
    if (this.galeriaAberta) {
      this.fecharGaleria();
    }
  }
}
