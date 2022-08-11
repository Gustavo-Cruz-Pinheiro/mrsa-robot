function start() {
  const max_x_axis = 4;
  const max_y_axis = 4;

  var comandos = true;

  alert(
    "Olá, esta é a aplicação para controle do robô da MRSA! A posição inicial do robô é (0, 0, N). O tamanho do terreno é de 5x5."
  );

  var robot = new Robot();

  do {
    comandos = prompt(
      "Qual a sequência de movimentos que deseja executar? \nLembrando que são eles: \n M - Para mover o robô para frente; \n L - Para rotacionar o robô 90° para esquerda; \n R - Para rotacionar o robô 90° para direita; \n S - Sair."
    );

    for (let i = 0; i < comandos.length; i++) {
      var comando;
      comando = comandos[i].toUpperCase();

      switch (comando) {
        case "M":
          if (robot.get_direction() == "E" || robot.get_direction() == "W") {
            if (robot.get_direction() == "E" && robot.get_x_axis() < max_x_axis) {
                robot.move_front();
            }
            else if (robot.get_direction() == "W" && robot.get_x_axis() - 1 >= 0) {
              robot.move_front();
            } else {
              alert(
                "O robô acabou atingindo o limite do terreno, por favor, atente-se para não o ultrapassar!"
              );
              i = comandos.length;
            }
          } else {
            if (robot.get_direction() == "N" && robot.get_y_axis() < max_y_axis) {
                robot.move_front();
            } else if (robot.get_direction() == "S" && robot.get_y_axis() - 1 >= 0) {
              robot.move_front();
            } else {
              alert(
                "O robô acabou atingindo o limite do terreno, por favor, atente-se para não o ultrapassar!"
              );
              i = comandos.length;
            }
          }
          break;

        case "L":
          robot.turn_left();
          break;

        case "R":
          robot.turn_right();
          break;

        case "S":
          comandos = false;
          break;

        default:
          alert("Por favor, insira apenas os caracteres 'M', 'L', 'R' ou 'S'.");
          i = comandos.length;
          break;
      }
    }
    robot.print_data();
  } while (comandos !== false);

  alert("Obrigado pela oportunidade e por utilizar minha aplicação!");
}
