<template>
    <section class = "lists-container" id = "lists-container">
        <div class = "list" v-for = "(board) in boards" :key = "board.id" :id = "board.id">
            <span class = "addButton" @click = "addButton(board.id)">+</span>
            <h3 class = "list-title">{{board.name}} <span class="countTask">{{board.tasks.length}}</span> </h3>
            <ul class = "list-items" >
                <draggable v-model = "board.tasks" group = "tasks" @change = "checkMove" item-key = "id">
                    <template #item = "{element}">
                        <li style="word-break: break-all;">
                            <strong>{{element.name}}</strong>
                            <p>{{element.description}}</p>
                        </li>
                    </template>
                </draggable>
            </ul>
            <div class = "divtext" v-click-away = "onClickAway" v-if = "(textInputShow[board.id] &&
            board.tasks.length==0) || addTaskTextarea[board.id]">

                 <textarea id = "mess" ref = "task" style = "width: 100%"
                         class = "textArea" v-model = "taskName[board.id]" name = "" cols = "15" rows = "3"
                 placeholder="Name"
                 >
                 </textarea>

                <textarea  style = "width: 100%"
                         class = "textArea" v-model = "taskDescription[board.id]" name = "" cols = "15" rows = "3"
                        placeholder="Description">

                 </textarea>

                <div>
                    <button @click = "addTask()"  class = "card-task-green">Add a
                        card
                    </button>
                    <a  class = "card-a" @click = "removeText(board.id)">X</a>
                </div>
            </div>
            <button v-if = "!textInputShow[board.id] && board.tasks.length==0 && !addTaskTextarea[board.id]" class =
                    "card-task"
                    @click = "showText(board.id)">+Add a task
            </button>
        </div>
        <button v-if = "buttonShow" @click = "addList()" class = "add-list-btn btn">Add a Board</button>
        <div class = "list" v-if = "!buttonShow">
            <h3 class = "list-title" style="width: 100%!important;">
                <input v-model = "textInput" @blur = "blurInput()" type = "text" class = "textInput">
            </h3>
            <button class = "card-task-green" style="margin-left: 10px" @click = "addTask()">Add a Board</button>
        </div>
    </section>
</template>
<script>
    import axios from "axios";
    import {directive} from "vue3-click-away";
    import draggable from 'vuedraggable'

    export default {

        name: "Boards.vue",
        directives: {
            ClickAway: directive
        },
        components: {
            draggable,
        },
        data() {
            return {
                buttonShow: true,
                textInput: "",
                boards: [],
                taskName: [],
                token: "",
                textInputShow: [],
                drag: false,
                addTaskTextarea: [],
                taskDescription:[]
            }
        },
        methods: {
            addButton(id) {
                this.addTaskTextarea=[]
                this.textInputShow = []
                this.addTaskTextarea[id] = true;
            },
            checkMove(evt) {
                if (evt.added) {

                    let board_id;
                    for (let i in  this.boards) {
                        for (let j in this.boards[i]['tasks']) {
                            if (this.boards[i]['tasks'][j]["id"] == evt.added.element.id) {

                                board_id = this.boards[i]["id"];
                            }
                        }
                    }


                    axios.post("http://localhost:8000/api/task/board/update", {
                        board_id: board_id,
                        task_id: evt.added.element.id
                    }, {
                        headers: {
                            Authorization: "Bearer " + this.token,
                        }
                    }).then(async () => {
                        // await this.fetchData()
                        // this.buttonShow = true
                        this.textInputShow=[]
                        this.taskDescription=[]
                        this.addTaskTextarea=[]
                    })


                }
            },
            changeFunc() {

            },
            onClickAway() {
                if (this.taskName.length) {
                    this.addTask()
                }
            },
            addList() {
                this.buttonShow = false;
            },
            blurInput() {

                axios.post("http://localhost:8000/api/board/add", {name: this.textInput}, {
                    headers: {
                        Authorization: "Bearer " + this.token,
                    }
                }).then(async () => {
                    await this.fetchData()
                    this.buttonShow = true
                    this.textInput=""
                })


            },
            fetchData() {
                axios.post("http://localhost:8000/api/boards", {}, {
                    headers: {
                        Authorization: "Bearer " + this.token
                    }
                }).then((e) => {
                    this.boards = e.data.data

                    for (let j in e.data.data) {
                        if (e.data.data[j]["tasks"].length > 0) {
                            this.textInputShow[e.data.data[j]["id"]] = true;
                        }
                    }
                })
            },
            addTask() {



                axios.post("http://localhost:8000/api/task/add", {task: this.taskName,description:this.taskDescription}, {
                    headers: {
                        Authorization: "Bearer " + this.token
                    }
                }).then(() => {
                    this.fetchData()
                    this.taskName = []
                    this.taskDescription = []
                    this.textInputShow = []
                    this.addTaskTextarea = []
                })
            },
            showText(id) {
                this.textInputShow = []
                this.addTaskTextarea=[]
                this.textInputShow[id] = true;
                this.taskName = []
                this.taskDescription = []





            },
            removeText() {
                this.textInputShow = []
                this.addTaskTextarea = []
            },

        },
        mounted: function () {
            var token = localStorage.getItem("token");
            this.token = token;

            this.fetchData()

        },
    }
</script>
<style scoped>
    .textInput {
        width: 100%;
        padding: 3px;
        outline: none;
    }

    .textArea {
        outline: none;
        margin: 5px;

        width: 96%!important;
        height: 50px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        font-size: 1.4rem;
        resize: none;
    }

    .card-task {
        background-color: darkgrey;
        padding: 8px;
        cursor: pointer;
        border: 2px solid darkgrey;
        border-radius: 5px;
        margin: 4px;
    }

    .card-task-green {
        background-color: blue;
        padding: 8px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        margin: 4px;
        width: 100px;
        color: white;
        float: left;
        margin-bottom: 15px;
    }

    .card-a {
        float: left;
        margin: 10px;
        cursor: pointer;
    }

    .addButton {
        position: absolute;
        width: 32px;
        background: blue;
        text-align: center;
        color: white;
        border-radius: 30px;
        padding: 5px;
        top: 13px;
        right: 5px;
        cursor: pointer;
    }

    .list {
        position: relative;
    }
    .textInput{
        outline: none;

        width: 96%!important;
        height: 30px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        font-size: 1.4rem;
        resize: none;
    }
    .countTask{
        background: darkgrey;
        padding: 3px;
        width: 28px;
        display: inline-block;
        text-align: center;
        border-radius: 6px;
    }
</style>