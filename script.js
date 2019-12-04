
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (i=1; i<=1000; i++) {
    let dice1 = Math.floor(Math.random()*6)+1;
    let dice2 = Math.floor(Math.random()*6)+1;
    let rollOfDice = dice1+dice2;
    count[rollOfDice] = count[rollOfDice]+1;
}


for (let i=2; i<=12; i++) {
    document.write(count[i]+' ')
}


for (let i=2; i<=12; i++) {
    let newElement = document.createElement("div");
    newElement.style.height = "20px";
    newElement.style.width = (count[i]+200)+"px";
    newElement.style.backgroundColor = "#cccccc";
    newElement.style.margin = "10px";
    let newText = document.createTextNode (i+" was rolled "+count[i]);
    newElement.appendChild(newText);
    document.body.appendChild(newElement)
}