/**
 * @file game.js
 * @author Richard Watson (Backend Dev Team)
 */
export default class Game {
  /**
   * Constructor for a Game object.
   */
  constructor() {
    var gameName;
    var gameRating;
  }

  getName() {
    return this.gameName;
  }

  setName(name) {
    this.gameName = name;
  }

  getRating() {
    return this.gameRating;
  }

  setRating(rating) {
    this.gameRating = rating;
  }
}

export class Rpg extends Game {


  constructor() {
    super();
    var characterName;
    var characterType;
    var armorOfChoice;
  }

  setCharacterName(name) {
    this.characterName = name;
  }

  getCharacterName() {
    return this.characterName;
  }
  setCharacterType(type) {
    this.characterType = type;
  }
  getCharacterType() {
    return this.characterType;
  }
  setArmorOfChoice(armor) {
    this.armorOfChoice = armor;
  }
  getArmorOfChoice() {
    return this.armorOfChoice;
  }

}
