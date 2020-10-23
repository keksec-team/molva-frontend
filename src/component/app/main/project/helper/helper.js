const getMaxCnt = (val) => {
    for (let i = 7; i >= 0; i--) {
        if (val - i >= 0) {
            return i;
        }
    }
}
export const getGrid = (files) => {
    let k = files.length;
    files.sort((a, b) => {
        if (a.type === "video" && b.type !== "video") {
            return -1;
        }
        if (a.type !== "video" && b.type === "video") {
            return 1;
        }
        return 0;
    })
    let blocks = [
        [1],
        [2],
        [1, 2],
        [1, 2, 1],
        [1, 3, 1],
        [1, 2, 1, 2],
        [1, 3, 1, 2]
    ]
    let totalCells = [];
    const amountOfVideos = files.filter(file => file.type === "video").length;
    for (let i = 0; i < amountOfVideos; i++) {
        totalCells.push(blocks[0]);
        k -= blocks[0][0];
    }
    while (k > 0) {
        let maxDivisor = getMaxCnt(k);
        Array.prototype.push.apply(totalCells, blocks[maxDivisor - 1]);
        k -= blocks[maxDivisor - 1].reduce((a, b) => a + b, 0);
    }
    let result = []
    totalCells.forEach(cellsPerRow => {
        for (let i = 0; i < cellsPerRow; i++) {
            result.push(3 / cellsPerRow);
        }
    })
    return result;
}
