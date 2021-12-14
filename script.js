// create Player class object
class Player {
  set name(n) {
    this._name = n;
  }

  set weapon(w) {
    this._weapon = w;
  }

  set type(t) {
    this._type = t;
  }

  set level(l) {
    this._level = l;
  }

  set health(h) {
    this._health = h;
  }

  get name() {
    return this._name;
  }

  get weapon() {
    return this._weapon;
  }

  get type() {
    return this._type;
  }

  get level() {
    return this._level;
  }

  get health() {
    return this._health;
  }

  constructor(n) {
    this._name = n;
  }

  // add method to initialize players & start/restart the game
  reset() {
    this._level = "5";
    this._type = "Peasant";
    this._weapon = "Light Saber";
    this._health = 1;
  }

  // add method to return current status on all properties of players
  getAllInfo() {
    if (parseInt(this._health) === 0) {
      this._health = this.name + " Died!";
      return this.health;
    } else {
      return (
        "Name: " +
        this.name +
        "\n" +
        "Type: " +
        this.type +
        "\n" +
        "Weapon: " +
        this.weapon +
        "\n" +
        "Level: " +
        this.level +
        "\n" +
        "Health: " +
        this.health
      );
    }
  }
}

// set up players
