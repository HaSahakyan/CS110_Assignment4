const matUtil = require('./utils.js');

matrix1 = [
    [0],
    [-4, -7, 0],
    [1, 2, 3, 11],
    [4, 5, 6],
    [7, 8, 9, 19999],
];
matrix2 = [
    [1, 2, 3, 11],
    [4, 5, 6],
    [7, 8, 9]
];
matrix3 = [
    [1, 2, 3, -11],
    [4, 0, 6],
    [-2, 8, -6]
];
matrix4 = [
    [1, 1, 1, 11],
    [22, 222, 2],
    [10, 100, 1000, 10000]
];
matrix5 = [
    [0, 0, 1],
    [-1, -1, -1],
    [-100, 0, 0]
];
matrix6 = [
    [0, 0, -1],
    [1, 1, 1],
    [100, 0, 0]
];

let matrix7 = [
    [1, 2, 3],
    [4, 5, 6]
];
let matrix8 = [
    [7, 8],
    [9, 10],
    [11, 12]
];

//Tests for Ex1
const ex1Test1 = matUtil.matrixProduct(matrix7, matrix8);
console.log(matrix7);
console.log(matrix8);
console.log(`The product of above two matrices is `);
console.log(ex1Test1);
const ex1Test2 = matUtil.matrixProduct(matrix5, matrix6);
console.log(matrix5);
console.log(matrix6);
console.log(`The product of above two matrices is `);
console.log(ex1Test2);


//Tests for Ex2
const ex2Test1 = matUtil.sumOfMatrices(matrix2, matrix3);
console.log(matrix2);
console.log(matrix3);
console.log(`The sum of above two matrices is `);
console.log(ex2Test1);

const ex2Test2 = matUtil.sumOfMatrices(matrix5, matrix6);
console.log(matrix5);
console.log(matrix6);
console.log(`The sum of above two matrices is `);
console.log(ex2Test2);


//Tests for Ex3
const ex3Test1 = matUtil.sumOfEachRow(matrix1);
console.log(matrix1);
console.log(`The sum of every row in above matrix is `);
console.log(ex3Test1);

const ex3Test2 = matUtil.sumOfEachRow(matrix2);
console.log(matrix2);
console.log(`The sum of every row in above matrix is `);
console.log(ex3Test2);

const ex3Test3 = matUtil.sumOfEachRow(matrix4);
console.log(matrix4);
console.log(`The sum of every row in above matrix is `);
console.log(ex3Test3);

