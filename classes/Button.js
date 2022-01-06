export default class Button {
  constructor() {}

  iconInactive() {
    //Button nur mit Icon
  }
  iconActive() {
    //Button nur mit Icon
  }
  mainInactive() {
    //Button farbig mit text -> z.B. Start, Weiter, etc.
  }
  mainActive() {
    //Button farbig mit text -> z.B. Start, Weiter, etc.
  }
  textInactive() {
    //Button nur Text -> z.B. im Menu
  }
  textActive() {
    //Button nur Text -> z.B. im Menu
  }
  slideBar() {
    //bei Aktion bewwegt sich die Artefaktenliste hoch oder runter
  }
  boxSlider() {
    //Bei Swipe nächstes Bild/Text
  }
}

export class Action extends Button() {
  constructor() {}
}
