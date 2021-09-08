const say = (something) => {
    console.log(something)
}

setTimeout(say, 1000, "hi")

console.log("bye")

setTimeout(say, 2000, "hi")

console.log("bye")

setTimeout(say, 3000, "hi")

console.log("bye")

let cronometro = 0
setInterval(() => {
    cronometro++
    console.log(cronometro, "segundos")
}, 1000)
