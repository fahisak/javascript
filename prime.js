const arr = [19, 12, 23, 45, 66, 3, 7, 11]

function check_prime(arr_element) {
    var flag = 0
    const div = Math.floor(arr_element / 2)
    for (i = 1; i <= div; i++) {
        const res = Math.floor(arr_element % i)
        if (res == 0) {

            flag = flag + 1

        }

    }
    if (flag == 1) {

        return ("is prime")

    } else {

        return (" is not prime")
    }

}

const status = check_prime(arr[0])
console.log(arr[0], status)