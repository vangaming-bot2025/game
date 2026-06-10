/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 133.5,
        y: 63.483476966966975,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.costumeNumber === 20) {
        this.visible = true;
        this.goto(-139, 119);
        if (this.touching(this.sprites["Sprite1"].andClones())) {
          this.broadcast("Unlock");
        }
      } else {
        this.visible = false;
        this.goto(99999999, 9999999);
      }
      yield;
    }
  }
}
/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 133.5,
        y: 63.483476966966975,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.costumeNumber === 20) {
        this.visible = true;
        this.goto(-139, 119);
        if (this.touching(this.sprites["Sprite1"].andClones())) {
          this.broadcast("Unlock");
        }
      } else {
        this.visible = false;
        this.goto(99999999, 9999999);
      }
      yield;
    }
  }
}
