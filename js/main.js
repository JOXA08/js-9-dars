let toDoList = [];
let tr = 1;
let allTask = 0;
let complateTask = 0;

function addTask(){
    let taskName = document.getElementById("taskInput").value;
    if(taskName !=""){
        let object = {
        tatib: tr++,
        name: taskName,
        complate: false
        };
        toDoList.push(object);
        chizish()
        allTask = toDoList.length
        document.getElementById("allTask").innerText = allTask;
    }
}

function chizish(){
    toDoList.forEach(function(item){
        if(item.complate){
            complateTask++;
        }
    })
    let list = "";
    toDoList.forEach(function(item){
        list += '<li class="list-group-item">' +
                    '<input '+ (item.complate ? "checked" : "") +' onchange="completed(this)" type="checkbox" id="'+ item.tartib +'"><label for="'+ item.tartib +'" class="ml-2">'+ item.name +'</label>' +
                '</li>'
    });
    document.getElementById("list").innerHTML = list;
    document.getElementById("complateTask").innerText = complateTask;
    let progressW = (complateTask * 100) / allTask;
    document.getElementById("progress").style.width = progressW + "%";
}

function completed(input){
    let searchId = input.getAttribute("id");
    let checked = input.getAttribute("checked");
    toDoList.forEach(function(item,i){
        if(item.tartib == searchId){
            toDoList[i].item.complete = item.complate ? false : true
        }
    })
    console.log(checked);
    if(checked == null){
        complateTask++;
    }
    else{
        complateTask--;
    }
    chizish();
}