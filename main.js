
let itemList = []

//can gia tri false ban dau, de sau nay click on it
let addItem = () => {
    let todo = {
        contents: document.getElementById("itemInput").value,
        isDone: false
    }
    itemList.push(todo)
    showList(itemList)
}


//su dung index de chon ngau nhien
let showList = (list) => {

    let message = list.map((item, index) => {
        if (item.isDone) {
            return `<li>  ${item.contents}'
        <button onclick="removeItem(${index})">Delete</button>
        <a href="#" onclick ="toggle(${index})"> UNDONE </a> </li>`.strike()

        } else {
            return `</li >  ${item.contents}'
            
    <button onclick="removeItem(${index})">Delete</button>
    <a href="#" onclick ="toggle(${index})"> DONE </a> </li>`

        }
    }).join('')

    document.getElementById("resultArea").innerHTML = message
}

let toggle = (index) => {
    console.log("running")
    itemList[index].isDone = !itemList[index].isDone
    showList(itemList)

}

document.getElementById("btn-add").addEventListener("click", addItem)

//khi nao click vao nut delete thi mat di du lieu
function removeItem(index) {
    itemList.splice(index, 1);
    showList(itemList)
}

///tao linh trong js, ben canh chu delete
//neu bam vao link thi gach ngang cai dong do
// va chuyen thuoc tinh isDone = true

// function doneTask(index) {
//     if (itemList[index].isDone == true) {
//         itemList[index].isDone = false
//     } else {
//         itemList[index].isDone = true
//     }
//     console.log(itemList)
// }


//add "Done" field
