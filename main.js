var app = new Vue({
    el: '#app',
    data: { 
        addtask: '',
        tasks: []
    },
    methods:{
        add_task(){
            this.tasks.push({
                task: this.addtask,
                isDone: false
            })
            this.addtask = ''
        },
        delete_task(index){
            this.tasks.splice(index, 1)
        }

    }
})
