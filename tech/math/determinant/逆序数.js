function inversionNum(arr) {
    // 创建原数组的副本
    let array = [...arr];
    let inversions = 0; // 存储逆序数计数
    // 归并排序的合并过程
    function merge(left, right) {
        const merged = [];
        let leftIndex = 0;
        let rightIndex = 0;
        
        // 比较左右数组的元素
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] <= right[rightIndex]) {
                merged.push(left[leftIndex]);
                leftIndex++;
            } else {
                merged.push(right[rightIndex]);
                rightIndex++;
                // 当右数组元素 < 左数组元素时，左数组当前及之后所有元素均构成逆序对
                inversions += left.length - leftIndex;
            }
        }
        
        // 添加剩余元素
        return [...merged, ...left.slice(leftIndex), ...right.slice(rightIndex)];
    }
    
    // 归并排序递归函数
    function mergeSort(start, end) {
        if (start >= end) return [array[start]];
        
        const mid = Math.floor((start + end) / 2);
        const left = mergeSort(start, mid);
        const right = mergeSort(mid + 1, end);
        return merge(left, right);
    }
    
    // 执行归并排序并计数
    mergeSort(0, array.length - 1);
    return inversions;
}
