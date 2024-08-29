function solution(number){
    let sum = 0;
    for(let i = 1; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}
// results in 0,7k ms to 0,8 ms

// function sumOfMultiples(factor, limit) {
//     const n = Math.floor((limit - 1) / factor);
//     return factor * n * (n + 1) / 2;
// }

// function solution(number) {
//     return sumOfMultiples(3, number) + sumOfMultiples(5, number) - sumOfMultiples(15, number);
// }
// results in 0,703k ms to 0,822 ms

console.log(solution(10));