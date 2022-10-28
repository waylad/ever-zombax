declare let WebFont: any

export class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'PreloaderScene',
    })
  }

  preload(): void {
    const progressBar = this.add.graphics()
    const progressBox = this.add.graphics()
    progressBox.fillStyle(0x222222, 0.8)
    progressBox.fillRect(this.sys.canvas.width / 2 - 160, this.sys.canvas.height / 2 - 25, 320, 50)

    const percentText = this.make.text({
      x: this.sys.canvas.width / 2,
      y: this.sys.canvas.height / 2,
      text: '0%',
      style: {
        font: '18px monospace',
      },
    })
    percentText.setOrigin(0.5, 0.5)

    const assetText = this.make.text({
      x: this.sys.canvas.width / 2,
      y: this.sys.canvas.height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
      },
    })
    assetText.setOrigin(0.5, 0.5)

    this.load.on('progress', (value: number) => {
      percentText.setText(`${Math.floor(value * 100)} %`)
      progressBar.clear()
      progressBar.fillStyle(0xffffff, 1)
      progressBar.fillRect(this.sys.canvas.width / 2 - 150, this.sys.canvas.height / 2 - 15, 300 * value, 30)
    })

    this.load.on('fileprogress', (file: any) => {
      assetText.setText('Loading asset: ' + file.key)
    })

    this.load.on('complete', () => {
      progressBar.destroy()
      progressBox.destroy()
      percentText.destroy()
      assetText.destroy()
      this.scene.start(process.env.STARTING_SCENE || 'ConnectWallet')
    })

    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js')

    this.load.image('background', './assets/background.png')
    this.load.image('bg-home', './assets/bg-home.png')
    this.load.image('bg-garage', './assets/bg-garage.png')

    this.load.svg('button-play', './assets/button-play.svg')
    this.load.svg('car-bg', './assets/car-bg.svg')
    this.load.svg('button-big', './assets/button-big.svg')
    this.load.svg('button-small', './assets/button-small.svg')


    this.load.svg('car0', './assets/parts/car0.svg')

    this.load.svg('boost0', './assets/parts/boost0.svg')
    this.load.svg('boost1', './assets/parts/boost1.svg')
    this.load.svg('boost2', './assets/parts/boost2.svg')
    this.load.svg('boost3', './assets/parts/boost3.svg')

    this.load.svg('weight0', './assets/parts/weight0.svg')
    this.load.svg('weight1', './assets/parts/weight1.svg')
    this.load.svg('weight2', './assets/parts/weight2.svg')
    this.load.svg('weight3', './assets/parts/weight3.svg')

    this.load.svg('gun0', './assets/parts/gun0.svg')
    this.load.svg('gun1', './assets/parts/gun1.svg')
    this.load.svg('gun2', './assets/parts/gun2.svg')
    this.load.svg('gun3', './assets/parts/gun3.svg')

    this.load.svg('gear0', './assets/parts/gear0.svg')
    this.load.svg('gear1', './assets/parts/gear1.svg')
    this.load.svg('gear2', './assets/parts/gear2.svg')
    this.load.svg('gear3', './assets/parts/gear3.svg')

    this.load.svg('armor0', './assets/parts/armor0.svg')
    this.load.svg('armor1', './assets/parts/armor1.svg')
    this.load.svg('armor2', './assets/parts/armor2.svg')
    this.load.svg('armor3', './assets/parts/armor3.svg')

    this.load.svg('wheel0', './assets/parts/wheel0.svg')
    this.load.svg('wheel1', './assets/parts/wheel1.svg')
    this.load.svg('wheel2', './assets/parts/wheel2.svg')
    this.load.svg('wheel3', './assets/parts/wheel3.svg')

    this.load.svg('fuel0', './assets/parts/fuel0.svg')
    this.load.svg('fuel1', './assets/parts/fuel1.svg')
    this.load.svg('fuel2', './assets/parts/fuel2.svg')
    this.load.svg('fuel3', './assets/parts/fuel3.svg')
  }

  create(): void {
    WebFont.load({
      custom: {
        families: ['Ethnocentric', 'Electrolize'],
      },
      active: function () {},
    })
  }

  update(): void {}
}
