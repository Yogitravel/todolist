
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
    let message = list.map((item, index) => `<li> 

    <input type = "checkbox" >
    <a onclick="doneTask(${index})" href="#">Done</a> 
    ${item.contents}'
    <button onclick="removeItem(${index})">Delete</button>
    
    </li>`).join('')

    document.getElementById("resultArea").innerHTML = message
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

function doneTask(index) {
    if (itemList[index].isDone == true) {
        itemList[index].isDone = false
    } else {
        itemList[index].isDone = true
    }
    console.log(itemList)
}


//add "Done" field
