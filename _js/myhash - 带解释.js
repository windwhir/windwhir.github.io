function myhash(input) {  
    // 初始化一个足够大的数组来存储哈希状态  
    // 在这里，我们使用一个长度为256的数组，每个元素都是一个数字  
    // 这只是一个示例，真实的哈希算法会有更复杂的状态表示  
    let hashState = new Array(256).fill(0);  
  
    // 定义一些常量，用于在哈希过程中进行运算  
    // 这些常量是随机选择的，仅用于示例  
    const primes = [2,0,2,4,1,0,1,2,3,1,5];  
    const rotations = [1,1,4,5,1,4,1,0,0,8,6];   
  
    // 将输入字符串转换为UTF-8编码的字节数组  
    let inputBytes = new TextEncoder().encode(input);  
  
    // 处理每个字节，更新哈希状态  
    for (let byte of inputBytes) {  
        // 对每个字节进行一系列运算，模拟哈希算法中的压缩函数  
        for (let i = 0; i < hashState.length; i++) {  
            hashState[i] += byte * primes[i % primes.length];  
            hashState[i] = (hashState[i] >>> 0) % (2 ** 32); // 无符号32位整数取模  
            hashState[i] = ((hashState[i] << rotations[i % rotations.length]) | (hashState[i] >>> (32 - rotations[i % rotations.length]))) >>> 0; // 循环左移  
        }  
    }  
  
    // 将哈希状态转换为十六进制字符串表示  
    let hashValue = '';  
    for (let i = 0; i < hashState.length; i++) {  
        hashValue += hashState[i].toString(16).padStart(8, '0'); // 每个元素转换为8位十六进制字符串  
    }  
  
    // 返回哈希值的截断版本，以简化输出（在实际应用中，你可能会返回完整的哈希值）  
    return hashValue.slice(0, 16); // 返回前16个字符作为示例  
}  
  
// 示例使用  
let password = "my_secret_password";  
let hashedPassword = simplifiedHash(password);  
console.log("The simplified hashed password is:", hashedPassword);