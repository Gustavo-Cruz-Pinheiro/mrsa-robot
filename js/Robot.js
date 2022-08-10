class Robot {
  constructor() {
    this._x_axis = 0;
    this._y_axis = 0;
    this._direction = "N";
  }

  get_x_axis() {
    return this._x_axis;
  }

  get_y_axis() {
    return this._y_axis;
  }

  get_direction() {
    return this._direction;
  }

  move_front() {
    switch (this._direction) {
      case "N":
        this._y_axis++;
        break;

      case "S":
        this._y_axis--;
        break;

      case "W":
        this._x_axis--;
        break;

      case "E":
        this._x_axis++;
        break;
    }
  }

  turn_left() {
    switch (this._direction) {
      case "N":
        this._direction = "W";
        break;

      case "S":
        this._direction = "E";
        break;

      case "W":
        this._direction = "S";
        break;

      case "E":
        this._direction = "N";
        break;
    }
  }

  turn_right() {
    switch (this._direction) {
      case "N":
        this._direction = "E";
        break;

      case "S":
        this._direction = "W";
        break;

      case "W":
        this._direction = "N";
        break;

      case "E":
        this._direction = "S";
        break;
    }
  }

  print_data() {
    return alert(
      "Posição atual do robô: " +
        "(" +
        this._x_axis +
        ", " +
        this._y_axis +
        ", " +
        this._direction +
        ")."
    );
  }
}
