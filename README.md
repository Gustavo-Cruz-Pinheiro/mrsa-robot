# Desafio - Lógicade Programação (Frontend Junior)

## Problema
Um robô deve ser colocado pela MRSA (Mercado Radar Space Agency) para explorar
um terreno em Marte.
Esse terreno, retangular, precisa ser navegado pelo robô de tal forma que suas
câmeras acopladas possam obter uma visão completa da região, enviando essas
imagens novamente para o QG da Mercado Radar.
A posição do robô é representada pela combinação de coordenadas cartesianas (x, y)
e por uma letra, que pode representar uma das quatro orientações: NORTH, SOUTH,
EAST e WEST.
Para simplificar a navegação, a região “marciana” a ser explorada foi subdividida em
sub-regiões retangulares.
Uma posição válida do robô, seria (0, 0, N), que significa que o robô está posicionado
no canto esquerdo inferior do terreno, voltado para o Norte.
Para controlar o robô, a MRSA envia uma string simples, que pode conter as letras ‘L’,
‘R’ e ‘M’. As letras ‘L’ e ‘R’ fazem o robô rotacionar em seu próprio eixo 90 graus para
esquerda ou para direita, respectivamente, sem se mover da sua posição atual. A letra
‘M’ faz o robô deslocar-se
uma posição para frente.
Assuma que o robô se movimenta para o NORTE em relação ao eixo y. Ou seja, um
passo para o NORTE da posição (x, y), é a posição (x, y+1)
Exemplo: Se o robô está na posição (0, 0, N), o comando "MML" fará ele chegar na
posição (0, 2, W).

### Requisitos do desafio

* O terreno deverá ser iniciado com 5x5 posições.
* O robô inicia na coordenada (0,0,N).
* Deverá ser possível enviar um comando para o Robô que me retorne a posição final dele.
* O Robô não pode se movimentar para fora da área especificada.
* Não deve guardar estado do robô para consulta posterior.

## Aplicação
### Tecnologias

Para o desenvolvimento da aplicação foram utilizadas as seguintes tecnologias:

* JavaScript
* HTML
* CSS

## Executando

Para a execução é necessário apenas abrir o arquivo "index.html" que o navegador já executará os scripts.
