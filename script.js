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

  constructor(n, w, t, l, h) {
    this.reset();
    this._name = n;
  }

  // initialize players & start/restart the game
  reset() {
    this._level = "5";
    this._type = "Peasant";
    this._weapon = "Light Saber";
    this._health = 5;
  }

  // return current status on all players
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

  doBattle(goodGuy, enemy) {
    // determine who takes damage using random number
    let attackByGood = this.getRandom();
    // add damage per attack?
    // track number of blows?
    // depending on level, add new weapon with more damage?

    let attackByEnemy = this.getRandom();

    let action = document.querySelector("#action");

    if (attackByGood > attackByEnemy) {
      action.value = goodGuy.name + " attacks " + enemy.name;
      goodGuy.health++;
      goodGuy.level++;

      enemy.health--;
      enemy.level--;
    } else if (attackByGood < attackByEnemy) {
      action.value = enemy.name + " attacks " + goodGuy.name;
      goodGuy.health--;
      goodGuy.level--;

      enemy.health++;
      enemy.level++;
    }
  }
  getRandom() {
    let r = Math.floor(Math.random() * 10) + 1;
    return r;
  }
}

// set up players
let player1 = new Player("Lea");
let player2 = new Player("Bolivar");

function initGame() {
  player1.reset();
  player2.reset();

  showStatus();
}

function startGame() {
  player1.doBattle(player1, player2);

  showStatus();
}

function showStatus() {
  let playerOneInfo = document.querySelector("#p1");
  playerOneInfo.value = player1.getAllInfo();

  let playerTwoInfo = document.querySelector("#p2");
  playerTwoInfo.value = player2.getAllInfo();
}
