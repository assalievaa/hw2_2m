
for(var i = 20; i >= 0; i--) {
    console.log(i);
}



var color = prompt('enter your color: ').toLocaleLowerCase().trim()

var obj = {
    data:"red",
    data2:"green",
    data3:"yellow"
}

if (color === obj.data) {
    alert('stop!')
}else if (color === obj.data2) {
    alert('wait')
}else if (color === obj.data3) {
    alert('go')
}else {
    alert('use only these colors (green, red, yellow)')
}





var list = [10, 20, 30, 50, 235, 3000]
var newList = []

for (var num of list) {
    var str = String(num)[0]
    if (str === '1' || str === '2' || str === '5') {
        newList.push(num)
    }
}
console.log(newList)