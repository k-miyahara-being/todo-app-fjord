var app = new Vue({
    el: '#app',
    data: { 
        tasks: [],
        addtask: '',
        edit: -1,
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
            this.addtask = ''
        },
        save_task(){
            localStorage.setItem('items', JSON.stringify(this.tasks))
        },
        edit_task(index){
            this.edit = index
        },
        change_task(){
            this.edit = -1
            this.save_task()
        },
        delete_task(index){
            this.tasks.splice(index, 1)
            this.save_task()
        }
    },
})
