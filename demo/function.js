// function func(x=1,y){
//     console.log(x,y)
// }

// console.log(func.length)

function func(a, b, ...values) {
    console.log(a, b, values);
}

func(1, 2, 3, 4, 5)
