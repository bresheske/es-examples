let func1 = () => {
    console.log('func1');
};

let func2 = (num) => {
    return num + 1;
};

func1();
let b = 5;
b = func2(b);
console.log(b);