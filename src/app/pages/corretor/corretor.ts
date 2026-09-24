import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corretor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './corretor.html',
  styleUrl: './corretor.css'
})
export class Corretor implements OnInit {

  nomeCorretor = '';

  atendimentos: any[] = [];

  ngOnInit(): void {

    const usuario = localStorage.getItem('usuario');

    if (usuario) {

      try {

        const dadosUsuario = JSON.parse(usuario);

        this.nomeCorretor = dadosUsuario.nome || 'Corretor';

      } catch {

        this.nomeCorretor = 'Corretor';

      }

    }

  }

}