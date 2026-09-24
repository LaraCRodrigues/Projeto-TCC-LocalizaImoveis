import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  mostrarCadastro = false;

  emailLogin = '';
  senhaLogin = '';

  nomeCadastro = '';
  emailCadastro = '';
  telefoneCadastro = '';
  creciCadastro = '';
  senhaCadastro = '';
  confirmarSenha = '';

  perfilCadastro: 'usuario' | 'corretor' = 'usuario';

  aceitouLGPD = false;

  mensagemErro = '';
  mensagemSucesso = '';

  constructor(private router: Router) { }

  abrirCadastro(): void {
    this.mostrarCadastro = true;
    this.limparMensagens();
  }

  fecharCadastro(): void {
    this.mostrarCadastro = false;
    this.limparMensagens();
  }

  entrar(): void {

    this.limparMensagens();

    if (!this.aceitouLGPD) {
      this.mensagemErro =
        'Você precisa aceitar a Política de Privacidade para entrar.';
      return;
    }

    if (!this.emailLogin || !this.senhaLogin) {
      this.mensagemErro = 'Preencha o e-mail e a senha.';
      return;
    }

    const usuarioSalvo = localStorage.getItem('usuario');

    if (!usuarioSalvo) {
      this.mensagemErro =
        'Nenhuma conta encontrada. Clique em "Cadastre-se" para criar uma conta.';
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    if (
      this.emailLogin !== usuario.email ||
      this.senhaLogin !== usuario.senha
    ) {
      this.mensagemErro = 'E-mail ou senha incorretos.';
      return;
    }

    localStorage.setItem('usuarioLogado', 'true');

    if (usuario.perfil === 'corretor') {
      this.router.navigate(['/corretor']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  cadastrar(): void {

    this.limparMensagens();

    if (
      !this.nomeCadastro ||
      !this.emailCadastro ||
      !this.senhaCadastro ||
      !this.confirmarSenha
    ) {
      this.mensagemErro = 'Preencha todos os campos.';
      return;
    }

    if (this.senhaCadastro !== this.confirmarSenha) {
      this.mensagemErro = 'As senhas não são iguais.';
      return;
    }

    // Campos obrigatórios somente para corretor
    if (this.perfilCadastro === 'corretor') {

      if (!this.telefoneCadastro || !this.creciCadastro) {
        this.mensagemErro =
          'Para cadastrar um corretor, informe o telefone e o CRECI.';
        return;
      }
    }

    const usuarioSalvo = localStorage.getItem('usuario');

    if (usuarioSalvo) {

      const usuario = JSON.parse(usuarioSalvo);

      if (usuario.email === this.emailCadastro) {
        this.mensagemErro = 'Este e-mail já possui um cadastro.';
        return;
      }
    }

    const novoUsuario = {
      nome: this.nomeCadastro,
      email: this.emailCadastro,
      senha: this.senhaCadastro,
      perfil: this.perfilCadastro,
      telefone: this.perfilCadastro === 'corretor'
        ? this.telefoneCadastro
        : '',
      creci: this.perfilCadastro === 'corretor'
        ? this.creciCadastro
        : ''
    };

    localStorage.setItem(
      'usuario',
      JSON.stringify(novoUsuario)
    );

    this.mensagemSucesso =
      this.perfilCadastro === 'corretor'
        ? 'Cadastro de corretor realizado com sucesso!'
        : 'Cadastro realizado com sucesso!';

    // Já coloca o e-mail no campo de login
    this.emailLogin = this.emailCadastro;

    // Limpa os campos
    this.nomeCadastro = '';
    this.emailCadastro = '';
    this.telefoneCadastro = '';
    this.creciCadastro = '';
    this.senhaCadastro = '';
    this.confirmarSenha = '';

    // Volta para usuário como padrão
    this.perfilCadastro = 'usuario';

    setTimeout(() => {
      this.mostrarCadastro = false;
      this.mensagemSucesso = '';
    }, 1500);
  }

  private limparMensagens(): void {
    this.mensagemErro = '';
    this.mensagemSucesso = '';
  }
}