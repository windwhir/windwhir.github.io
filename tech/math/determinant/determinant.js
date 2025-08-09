function determinant() {
  let matrix= getMatrixValues("matrix", size);
  switch(matrix.length){
    case 1:document.querySelector("b").innerHTML= matrix[0][0];break; // 1x1矩阵
    case 2:document.querySelector("b").innerHTML= matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];break;
    default:
  let det = 0;
    // 创建矩阵副本，避免修改原始数组
    const mat = matrix.map(row => row.slice());
    let sign = 1; // 记录行交换导致的符号变化
    
    // 使用部分主元消元法
    for (let i = 0; i < size; i++) {
      // 寻找当前列的最大主元（从第i行开始）
      let maxRow = i;
      for (let j = i + 1; j < size; j++) {
        if (Math.abs(mat[j][i]) > Math.abs(mat[maxRow][i])) {
          maxRow = j;
        }
      }
      
      // 交换行（如果找到更大主元）
      if (maxRow !== i) {
        [mat[i], mat[maxRow]] = [mat[maxRow], mat[i]];
        sign *= -1; // 行交换改变行列式符号
      }
      
      // 如果主元接近0，行列式为0
      if (Math.abs(mat[i][i]) < 1e-10) {
        document.querySelector("b").innerHTML=0
      }
      
      // 使用高斯消元法消除下方行
      for (let j = i + 1; j < size; j++) {
        const factor = mat[j][i] / mat[i][i];
        for (let k = i; k < size; k++) {
          mat[j][k] -= factor * mat[i][k];
        }
      }
    }
    
    // 计算对角线元素的乘积
    let result = sign;
    for (let i = 0; i < size; i++) {
      result *= mat[i][i];
    }
    
    // 处理浮点误差（保留10位小数精度
  document.querySelector("b").innerHTML=parseFloat(result.toFixed(10))
  }
}