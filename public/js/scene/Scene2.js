class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {
    // this.background = this.add.image(0, 0, 'background');
    this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background');
    this.background.setOrigin(0, 0);

    // this.add.text(20, 20, 'Playing game', {
    //   font: '25px Arial',
    //   fill: 'yellow'
    // });

    // this.ship1 = this.add.image(config.width/2 - 50, config.height/2, 'ship1');
    // this.ship2 = this.add.image(config.width/2, config.height/2, 'ship2');
    // this.ship3 = this.add.image(config.width/2 + 50, config.height/2, 'ship3');
    this.enemySmall = this.add.sprite(config.width / 2 - 50, config.height / 2, 'enemy_small');
    this.enemyMedium = this.add.sprite(config.width / 2, config.height / 2, 'enemy_medium');
    this.enemyBig = this.add.sprite(config.width / 2 + 50, config.height / 2, 'enemy_big');

    // Player with physics
    this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, 'power_up');
    this.player.play('red_power');
    this.player.setCollideWorldBounds(true);

    // Keyboard event listener
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.powerUps = this.physics.add.group();

    for (let i = 0; i < 2; i++) {
      let powerUp = this.physics.add.sprite(16, 16, 'power_up');
      this.powerUps.add(powerUp);
      powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);

      if (Math.random() > 0.5) {
        powerUp.play('red_power');
      } else {
        powerUp.play('gray_power');
      }

      powerUp.setVelocity(100, 100);
      powerUp.setCollideWorldBounds(true);
      powerUp.setBounce(1);
    }

    this.enemySmall.play('enemy_small_anim');
    this.enemyMedium.play('enemy_medium_anim');
    this.enemyBig.play('enemy_big_anim');

    this.enemySmall.setInteractive();
    this.enemyMedium.setInteractive();
    this.enemyBig.setInteractive();

    this.input.on('gameobjectdown', this.destroyShip, this);
  }

  update() {
    this.moveShip(this.enemySmall, 1);
    this.moveShip(this.enemyMedium, 2);
    this.moveShip(this.enemyBig, 3);

    this.background.tilePositionY -= 0.5;

    this.movePlayerManager();

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {  
      console.log(this);
      this.shootBeam();
    }
  }

  shootBeam() {
    var beam = new Beam(this);
  }

  movePlayerManager() {
    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }

    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityY(0);
    }
  }

  moveShip(ship, speed) {
    if (ship.y > config.height) {
      this.resetShipPos(ship);
    }
    ship.y += speed;  
  }

  resetShipPos(ship) {
    ship.y = 0;
    ship.x = Phaser.Math.Between(0, config.width);
  }

  destroyShip(pointer, gameObject) {
    gameObject.setTexture('explosion');
    gameObject.play('explode');
  }
}