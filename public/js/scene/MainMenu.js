class MainMenu extends Phaser.Scene {
  constructor() {
    super('mainMenu');
  }

  create() {
    this.add.text(20, 20, 'Loading...');
  }
}