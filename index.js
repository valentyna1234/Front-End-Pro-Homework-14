//Реалізувати рекурсивну функцію, яка зводить число в ступінь.
//Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
//Ступінь передається як другий аргумент у функціюpow (num, degree).

function numInDegree (num, degree) {
    if (num == 1 || num == 0) return num;
    if (degree > 1) return num * numInDegree(num, --degree);
    if (degree < 1) return 1 / num * numInDegree(num, ++degree);
    return num;
}
console.log(numInDegree(3, 3))
