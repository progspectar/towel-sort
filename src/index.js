// You should implement your task here.

function towelSort(matrix) {
    if (!matrix) return [];

    const arr = matrix.map((subarr, idx) => {
        return idx % 2 === 0
            ? subarr.sort((a, b) => a - b)
            : subarr.sort((a, b) => b - a);
    });
    return arr.flat();
}

module.exports = towelSort;
