const TIME = 1000

setTimeout(
    () => {
        setTimeout(
            () => {
                setTimeout(
                    () => {
                        // debugger
                        console.log('Inside 3rd timeout!')
                    },
                    TIME
                )
                console.log('Inside 2nd timeout!')
            },
            TIME
        )
        console.log('Inside 1st timeout!')
    },
    TIME
)

console.log('Outside timeout!')