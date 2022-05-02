function mapGenerate(map, height, width, bomb, firstCellY, firstCellX) {
    map = setBomb(map, height, width, bomb, firstCellY, firstCellX);
    map = calculate(map, height, width, bomb);

    return map;
}

function setBomb(map, height, width, bomb, firstCellY, firstCellX) {
    for (let i = 0; i < bomb; i++) {
        let tmp = 1
        while (tmp == 1) {
            const y = Math.floor(Math.random() * height);
            const x = Math.floor(Math.random() * width);
            if (map[y][x] === 0 && x !== firstCellX && y !== firstCellY) {
                map[y][x] = -10;
                tmp = 0;
            }
        }
    }
    return map;
}

function calculate(map, height, width, bomb) {
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(map[i][j] < 0) { //爆弾セル
                map = calAround(map, i, j, height, width);
                bomb --;
                if(bomb <= 0) { return map }
            }
        }
    }
}

function calAround(map, x, y, h, w) {
    if(x-1 >= 0 && y-1 >= 0){map[x-1][y-1] ++;}
    if(x-1 >= 0)            {map[x-1][y] ++;}
    if(x-1 >= 0 && y+1 < w) {map[x-1][y+1] ++;}
    if(y-1 >= 0)            {map[x][y-1] ++;}
    if(y+1 < w)             {map[x][y+1] ++;}
    if(x+1 < h && y-1 >= 0) {map[x+1][y-1] ++;}
    if(x+1 < h)             {map[x+1][y] ++;}
    if(x+1 < h && y+1 < w)  {map[x+1][y+1] ++;}

    return map;
}

export default mapGenerate;