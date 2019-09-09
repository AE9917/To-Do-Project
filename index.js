// var toDo = {
//   title: "",
//   description: "",
//   priority: 1,
//   completed: false
// }
var toDos = []

function makeToDo(title, description, priority){
  var id = 0

  if (toDos.length != 0){
    id = toDos[toDos.length - 1].id + 1
  }

  return {
    id: id,
    title: title,
    description: description,
    priority: priority,
    completed: false
  }
}

function showToDo(id){
  return toDos.find(function(todo){
    return  todo.id == id
  })
}

function deleteToDoByID(id){
  var index = toDos.findIndex(function(todo){
    return  todo.id == id
  })
  toDos.splice(index, 1)
}

toDos.push(makeToDo("Take out the tash", "Get the fuck up, grab trash, walk outside, put trash in bin", 10))
toDos.push(makeToDo("Beat that ass", "Call shmitty, say 'Bring that ass here'", 3))
toDos.push(makeToDo("Make some cash","Buy metrocard, take train to work", 10))
toDos.push(makeToDo("Smoke some grass", "Buy bud, crush, roll up, light up, pull", 10))

console.log(showToDo(3))
