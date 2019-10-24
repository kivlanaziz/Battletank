class Beam extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    let x = scene.player.x;
    let y = scene.player.y;

    super(scene, x, y, 'beam');
    // Add game object to the scene
    scene.add.existing(this);
  }
}