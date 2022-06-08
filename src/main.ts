import './style.css'
import * as PIXI from 'pixi.js';

const createApp = () => {
  const app = new PIXI.Application({
    width: 640,
    height: 360,
  })
  document.body.appendChild(app.view);
  return app;
}

const main = async () => {
  const app = createApp();
  const sprite = PIXI.Sprite.from("../assets/sample.png");
  app.stage.addChild(sprite);
  
  let elapsed = 0.0;
  app.ticker.add((delta) => {
    elapsed += delta;
    sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
  });
}

main();