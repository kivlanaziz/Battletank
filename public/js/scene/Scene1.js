class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {

    // this.load.image('ship1', 'public/assets/images/ship.png');
    // this.load.image('ship2', 'public/assets/images/ship2.png');
    // this.load.image('ship3', 'public/assets/images/ship3.png');

    this.load.image('background', 'public/assets/backgrounds/desert-background.png');

    this.load.spritesheet('enemy_small', 'public/assets/spritesheets/enemy-small.png', {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.spritesheet('enemy_medium', 'public/assets/spritesheets/enemy-medium.png', {
      frameWidth: 32,
      frameHeight: 16
    });
    
    this.load.spritesheet('enemy_big', 'public/assets/spritesheets/enemy-big.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet('explosion', 'public/assets/spritesheets/explosion.png', {
      frameWidth: 16,
      frameHeight: 16
    });
    
    this.load.spritesheet('power_up', 'public/assets/spritesheets/power-up.png', {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.spritesheet('player_ship', 'public/assets/spritesheets/ship.png', {
      frameWidth: 16,
      frameHeight: 24
    });
    
    this.load.spritesheet('beam', 'public/assets/spritesheets/laser-bolts.png', {
      frameWidth: 16,
      frameHeight: 16
    });
  }

  create() {
    this.add.text(20, 20, 'Loading game...');
    this.scene.start('playGame');

    this.anims.create({
      key: 'enemy_small_anim',
      frames: this.anims.generateFrameNumbers('enemy_small'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'enemy_medium_anim',
      frames: this.anims.generateFrameNumbers('enemy_medium'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'enemy_big_anim',
      frames: this.anims.generateFrameNumbers('enemy_big'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion'),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: 'red_power',
      frames: this.anims.generateFrameNumbers('power_up', {
        start: 0,
        end: 1
      }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'gray_power',
      frames: this.anims.generateFrameNumbers('power_up', {
        start: 2,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'thrust',
      frames: this.anims.generateFrameNumbers('player_ship'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'beam_anim',
      frames: this.anims.generateFrameNumbers('beam', {
        start: 2,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });
  }
}