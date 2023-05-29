let input = document.querySelector("input")
let result = document.getElementById("result")


input.oninput = function() {
    result.innerHTML = (input.value / 1 / 2.204622621848776).toString().slice(0, 10)
}