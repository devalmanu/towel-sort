
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix !== null && matrix !== 0 && Array.isArray(matrix)) {
        arr = matrix.reduce((acc, cur, i) => {
            cur.sort((a, b) => i % 2 == 0 ? a - b : b - a).map(el => acc.push(el));
            return acc;
        }, []);
    } else {
        return arr;
    }

    return arr;
}


