    const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
    var modifiedFood = [];
    // slicing of array
    modifiedFood = foods.slice(1, 4)
    console.log(modifiedFood);
    let modFood = [];

    // splicing of array
    modFood = foods.splice(1, 1, "burger", "noodles", "icecream")
    console.log(modFood);

    const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
    // use of filter method to find even number
    let filterp = numberArray.filter(function (num) {
        let d = num % 2 == 0;
        // we can use (return num&0) to find even number
        return d;

    });
    console.log(filterp)

    // reject function to find all non prime number

    function primeArr(numberArray) {

        //Test for Prime Number 

        function isPrime(testNo) {

            var result = false;
            for (var n = testNo - 1; n > 1; n--) {
                result = (testNo % n === 0) + result;
            }

            if (result === 0 && testNo > 1) {
                return true;
            }
            return false;
        }

        //Test for Prime Number 

        var newArr = [];

        for (n = 0; n < arr.length; n++) {
            if (isPrime(arr[n])) {
                newArr.push(arr[n]);
            }
        }
        return newArr;
    }

    // use of map to return square of number

    const myArray = [11, 34, 20, 5, 53, 16];
    let mapp = myArray.map(function (num) {
        return num * num;
    })
    console.log(mapp);


    // use of reduce to get multiplication value of all numbers in the given array.

    myArray = [2, 3, 5, 10];
    let mul = myArray.reduce(function (init, item) {
        return init * item;
    }, 1);
    console.log(mul);