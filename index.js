//Реалізувати рекурсивну функцію, яка зводить число в ступінь.
//Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
//Ступінь передається як другий аргумент у функціюpow (num, degree).

function numInDegree (num, degree) {
    return degree === 1 || 0 ? num : degree > 1 ? num * numInDegree(num, --degree) : 1 / num * numInDegree(num, ++degree);
}    
console.log(numInDegree(5, 5));






