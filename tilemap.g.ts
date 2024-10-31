// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101020101010101010101010b0b0b0b0b0102010b0b0b0b0b0b01010b0b0b0b0b0102010b0b0b0b0b0b01010b0b0b0b0b0102010b0b0b0b0b0b01010b0b0b0b0b0102010b0b0b0b0b0b01010c01010101010201010c01010101010205050202020202050502020202020203070704090209030707020101010101030807040902090308070201161616010307080409020903070802010b0b0b0103080704090209030807020116160b0102060602020202020606020d0b0b0b0101010101010e01010101020116160b01010a0a0a0a0a0a0a0a0102010b0b0b0101110f0f0f0f0f0f100102010115010101121414141414141301020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . 2 2 2 2 2 . 2 2 . 2 2 2 2 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . . . . . 2 . . . 2 
. . . . . . . . . . . 2 . . . 2 
. . . . . . . . . . . 2 . . . 2 
. . . . . . . . . . . . . . . 2 
2 2 2 2 2 . 2 2 2 2 . 2 . . . 2 
2 . . . . . . . . 2 . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 2 
2 2 . . . . . . 2 2 . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.swamp.swampTile0,sprites.swamp.swampTile9,sprites.swamp.swampTile16,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorOpenEast,sprites.dungeon.doorOpenSouth,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection4,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.stairNorth,sprites.builtin.field0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
