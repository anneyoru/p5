import React from 'react';
import { Titulo, Livro, ConteinerCapa, TituloPrincipal, ConteinerLivro } from './estilo';
import Livro3D from '../../imagens/livro3D.png';
import database from '../../database';
function Capa() {
  
  return (
    <ConteinerCapa>
    <Titulo temSpan={true}><span class="cabecalho">P5</span><span class="cabecalho">2015-2020</span></Titulo>
    <Titulo>{database.ptbr.principal.titulo}</Titulo>
    <ConteinerLivro>
      <Livro src={Livro3D} />
    </ConteinerLivro>
    <TituloPrincipal>Periscópio</TituloPrincipal>
    </ConteinerCapa>
  );
}

export default Capa;
