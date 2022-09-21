// happy coding 👻
console.log("hello world");

function fibonacci(n: number): number {
    if (n == 0) {
        return 0;
    }
    if (n <= 1) {
        return 1;
    }
    return (fibonacci(n - 1) + fibonacci(n - 2))
}

let tmp = 0;
for (let i = 0; i <= 20; i++) {
    tmp += fibonacci(i);
    console.log(fibonacci(i))
}

console.log("Vị trí của số thứ thứ 10 là :"+ fibonacci(9));
console.log("Tổng của Các số fibonacci là " + tmp);

