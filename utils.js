module.exports = {
    //Ex1
    matrixProduct: function (mat1, mat2){
        let matProd = [];
        for(let row = 0; row < mat1.length; row++){
           matProd.push([]);
               
            for(let col = 0; col < mat2[0].length; col++){
                let sum = 0;
               for(let i = 0; i < mat1[0].length; i++){
                sum += (mat1[row][i] * mat2[i][col]);
               }
               matProd[row].push(sum);
            }
            
        }
    
    return matProd;
    
    },



    //Ex2
    sumOfMatrices: function (mat1, mat2){
        let result = [];
         for(let row = 0; row < mat1.length; row++){
            result.push([]);
            for(let col = 0; col < mat1[row].length; col++){
                 result[row][col] = mat1[row][col] + mat2[row][col];
             }
         }
         return result;
    },

    //Ex3
    sumOfArray: function (arr){
        let sum = [];
        for(let i = 0; i < arr.length; i++){
            sum = Number(sum) + arr[i];
        }
        return sum;
    },
    sumOfEachRow: function (mat){
        let result = [];
        for(let row = 0; row < mat.length; row++){
            result.push(this.sumOfArray(mat[row]));
        }
        return result;
    }
}













