let action = prompt("While would you like to do?").toLowerCase();
const toDo = ['eggs', 'milk'];
while(action !== "quit" ) {
    if(action === "list") {
        console.log("**********");
        for(let i = 0; i < toDo.length; i++) {
            console.log(`${i+1}. ${toDo[i]}`)
        }
        console.log("**********")
    } else if(action === "new") {
        let newToDo = prompt("What would you like to add?").toLowerCase();

        while(newToDo !== "done") {

            if(validate(toDo, newToDo)) {
                console.log(`${newToDo} already exists in your list!`)
                newToDo = prompt("What would you like to add?").toLowerCase();

            } else {
                toDo.push(newToDo);
                console.log(`${newToDo} added to the list.`);
                newToDo = prompt("What would you like to add?").toLowerCase();
            }
        }
    } else if(action == "delete") {
        const item = prompt("What would you like to delete?").toLowerCase();
        for(let i = 0; i < toDo.length; i++) {
            if(toDo[i] === item) {
                const index = i;
                console.log(index);
                toDo.splice(index,1);
                console.log(`${item} at the index of ${index} was deleted`);
            }
        }
    }


    action = prompt("What would you like to do?")
}

function validate(arr, check) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === check) {
            return true;
            // console.log(`${check} already exists in your list!`)
        } 
    }
}