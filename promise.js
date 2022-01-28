var res = new Promise((resolve, reject) => {

    function div(value, divisor) {
        if (devisor != 0) {
            var div = value / divisor
            promise.then(resolve("result", div))


        } else {
            reject("error")

        }

    }
})
div(10, 2)
    // let promise = new Promise((resolve, reject) => {
    //     // Code to perform the promised task
    //     let task_performed = true;
    //     if (task_performed) {
    //         resolve('The promised task was performed successfully.');
    //     } else {
    //         reject('The promised task was not performed.');
    //     }
    // });
    // promise.then((fromRes) => console.log(fromRes)).
    // catch ((fromRej) => console.log(fromRej));