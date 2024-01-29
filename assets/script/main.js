// CONSEGNA - Rifare l'esercizio della to do list.

// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
    //- text, una stringa che indica il testo del todo
    //- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1 - Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2 - Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3 - Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. //LINK 

// BONUS - oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

const { createApp } = Vue  

createApp({
    data(){ 
        return{
            newTask: null, 
            taskList: [
                {
                    task: "Do The Chores",
                    done: true
                },
                {
                    task: "Do The Laundry",
                    done: false
                },
                {
                    task: "Do The Dishes",
                    done: true
                }
            ]
        }
    },
    created(){

    },
    methods:{
        addTask(){ // we add the task to the list 
            if(this.newTask.length !== ""){
                this.taskList.unshift({
                    task: this.newTask, 
                    done: false // still to do task 
                })
            }
            this.newTask = "" // we clear the input
        },
        removeTask(index){
            this.taskList.splice(index, 1)
        },
        check(index){
            this.taskList[index].done = !this.taskList[index].done
        }
    }, 
}).mount("#app") 