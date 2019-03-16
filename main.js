let buildings;

function preload() {
    buildings = [
        new Building('Singer Building', 'images/SingerBuilding.jpg', 612.1, 1908, 1909),
        new Building('Metropolitan Life Tower', 'images/MetLifeTower.jpg', 700, 1908, 1930),
        new Building('Bank of Manhattan Trust Building', 'images/BOMTrustBuilding.jpg', 928, 1930, 1930),
        new Building('Chrysler Building', 'images/ChryslerBuilding.jpg', 1046, 1930, 1931),
        new Building('Empire State Building', 'images/EmpireStateBuilding.gif', 1250, 1931, 1971),
        new Building('1 World Trade Center', 'images/OneWorldTradeCenter.gif', 1368, 1971, 1973),
        new Building('Sears Tower', 'images/SearsTower.png', 1450, 1973, 1988),
        new Building('Petronas Towers', 'images/PetronasTowers.jpg', 1483, 1998, 2004),
        new Building('Tapei 101', 'images/Tapei101.png', 1671, 2004, 2010),
        new Building('Burj Khalifa', 'images/BurjKhalifa.png', 2717, 2010, new Date().getFullYear())
    ];
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    const totalWidth = buildings.reduce((acc, cur) => {
        return acc + cur.image.width;
    }, 0);
    const scale = totalWidth / width / 0.9;
    let offset = 25;
    for (let building of buildings) {
        offset += building.image.width * building.height / scale / building.image.height / 2 + 10;
        building.show(offset, scale);
        offset += building.image.width * building.height / scale / building.image.height / 2;
    }
    noLoop();
}
