var data = [];
var count = 0;

function addTask(){
    var taskValue = document.getElementById("task").value;
    var taskList  = {
        id: count,
        task: taskValue
    }
    data.push(taskList);
    document.getElementById("task").value = null;
    fillData();
    count++;
}

function fillData(){
    var tempHTML = "";

    for(var i = 0; i < data.length; i++){
        tempHTML += 
        '<div class="input-group mb-3">' + 
            '<p class="form-control">' + data[i].task + '</p>' + 
            '<button class="btn btn-outline-danger" onclick="deleteTask(' + data[i].id + ')"><i class="fas fa-trash-alt"></i></button>' + 
        '</div>';    
    }
    document.getElementById("yorum").innerHTML = tempHTML;
}

function deleteTask(id){
    var index = data.findIndex(x => x.id == id);
    data.splice(index, 1);

    fillData();
}

function deleteTaskAll(){
    data.splice(0, data.length);

    fillData();
}