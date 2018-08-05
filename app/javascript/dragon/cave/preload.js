import TilesSprite from "../../images/tiles-sprite.png"
import PlayerSprite from "../../images/player-sprite2.png"

export default function preload() {
  this.load.tilemapTiledJSON("cave_map", "/dragon/cave_map.json?t=" + new Date())
  this.load.spritesheet("tiles", TilesSprite, {
    frameWidth: 64, frameHeight: 64
  })
  this.load.spritesheet("player", PlayerSprite, {
    frameWidth: 48, frameHeight: 64
  })
}export const BACK_1 = 0
export const BACK_2 = 2
export const RIGHT_1 = 3
export const RIGHT_2 = 5
export const FRONT_1 = 6
export const FRONT_2 = 8
export const LEFT_1 = 9
export const LEFT_2 = 11
