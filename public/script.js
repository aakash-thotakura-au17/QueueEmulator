
var queueInput = document.querySelector("#queueInput")
var add = document.querySelector("#add")
var remove = document.querySelector("#remove")
var ansStrip = document.querySelector("#ansStrip")

var userStack = []

add.addEventListener("click", function(e) {
    userStack.push(queueInput.value)
    // console.log("pushed", queueInput.value, "into", userStack)

    console.log(userStack, userStack.length)
    // console.log(ansStrip.lenght)
    console.log(ansStrip[0])

    ansStrip.innerText = userStack
    console.log(ansStrip[0])
    // ansStrip.style.color = "red";
    ansStrip.style.color = "black"
    
})

remove.addEventListener("click", function(e) {
    userStack.shift(queueInput.value)
    console.log("pushed", queueInput.value, "into", userStack)

    ansStrip.innerText = userStack

})

for (let ele = 0; userStack.length > 0; ele++) {
    
}