import { ObjectiveType, Icon } from "../../enums/enums";

/**
 * @todo
 */
export class Objective {
  type: ObjectiveType;
  icon: Icon;
  text: string;

  constructor({ type = null, icon = null, text = null } = {}) {
    this.type = type;
    this.icon = icon;
    this.text = text;
  }
}
