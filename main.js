var app = new Vue({
    el: '#app',
    data: { 
        tasks: null,
        addtask: null,
        edit: null,
    },
    mounted(){
        this.tasks = JSON.parse(localStorage.getItem('items'))
    },
    methods:{
        add_task(){
            this.tasks.push({
                task: this.addtask,
                isDone: false
            })
            this.save_task()
            this.addtask = null
        },
        save_task(){
            localStorage.setItem('items', JSON.stringify(this.tasks))
        },
        edit_task(index){
            this.edit = index
        },
        change_task(){
            this.edit = null
            this.save_task()
        },
        delete_task(index){
            this.tasks.splice(index, 1)
            this.save_task()
        }
    },
})
