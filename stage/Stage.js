/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 251.25,
        y: 193,
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 250.5,
        y: 187,
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 251.25,
        y: 193,
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 251.25,
        y: 193,
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.svg", {
        x: 251.25,
        y: 193,
      }),
      new Costume("backdrop7", "./Stage/costumes/backdrop7.svg", {
        x: 263.91199501501495,
        y: 203.46696696696694,
      }),
      new Costume("backdrop6", "./Stage/costumes/backdrop6.svg", {
        x: 259.40749051051046,
        y: 203.46696696696694,
      }),
      new Costume("backdrop9", "./Stage/costumes/backdrop9.svg", {
        x: 251.25,
        y: 193,
      }),
      new Costume("backdrop8", "./Stage/costumes/backdrop8.svg", {
        x: 251.25,
        y: 200.43694,
      }),
      new Costume("backdrop10", "./Stage/costumes/backdrop10.svg", {
        x: 253.40148450450445,
        y: 197.46096096096093,
      }),
      new Costume("backdrop12", "./Stage/costumes/backdrop12.svg", {
        x: 251.25,
        y: 193,
      }),
      new Costume("backdrop11", "./Stage/costumes/backdrop11.svg", {
        x: 251.25,
        y: 193,
      }),
      new Costume("backdrop14", "./Stage/costumes/backdrop14.svg", {
        x: 251.89998300300294,
        y: 207.97147147147143,
      }),
      new Costume("backdrop13", "./Stage/costumes/backdrop13.svg", {
        x: 251.89998300300294,
        y: 193,
      }),
      new Costume("backdrop16", "./Stage/costumes/backdrop16.svg", {
        x: 256.40448750750744,
        y: 200.46396396396395,
      }),
      new Costume("backdrop15", "./Stage/costumes/backdrop15.svg", {
        x: 251.25,
        y: 200.46396396396395,
      }),
      new Costume("backdrop18", "./Stage/costumes/backdrop18.svg", {
        x: 257.905989009009,
        y: 194.45795795795794,
      }),
      new Costume("backdrop17", "./Stage/costumes/backdrop17.svg", {
        x: 253.40148450450445,
        y: 198.96246246246244,
      }),
      new Costume("backdrop19", "./Stage/costumes/backdrop19.svg", {
        x: 251.25,
        y: 203.46696696696694,
      }),
      new Costume("backdrop23", "./Stage/costumes/backdrop23.svg", {
        x: 251.25,
        y: 203.46695696696696,
      }),
      new Costume("backdrop20", "./Stage/costumes/backdrop20.svg", {
        x: 251.25,
        y: 193,
      }),
      new Costume("backdrop22", "./Stage/costumes/backdrop22.svg", {
        x: 253.40148450450445,
        y: 195.95945945945942,
      }),
      new Costume("backdrop21", "./Stage/costumes/backdrop21.svg", {
        x: 251.25,
        y: 201.96546546546543,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.xv = 0;
    this.vars.yv = 0;
    this.vars.deaths = 0;
    this.vars.secretRoomFinders = [
      "vangaming2012",
      "vangaming2012",
      "vangaming2012",
      "vangaming2012",
      "vangaming2012",
    ];

    this.watchers.deaths = new Watcher({
      label: "Deaths",
      style: "normal",
      visible: true,
      value: () => this.vars.deaths,
      x: 244,
      y: 166,
    });
    this.watchers.secretRoomFinders = new Watcher({
      label: "Secret room finders",
      style: "normal",
      visible: false,
      value: () => this.vars.secretRoomFinders,
      x: 276,
      y: -35,
      width: 100,
      height: 60,
    });
  }
}
