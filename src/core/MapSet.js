function mapSet(height, width) {
    let tmpMap = new Array(height);

    for(let i = 0; i < height; i++) {
        tmpMap[i] = new Array(width);
    }

    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            tmpMap[i][j] = 0;
        }
    }
    return tmpMap;
}

export default mapSet;