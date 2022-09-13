<template>
  <div class="w-full h-screen pt-40">
    <div class="bg-white pt-1 pb-1 max-w-md mx-auto rounded-lg">
      <div class="text-center">
        <h1 class="text-3xl pt-2 font-bold">Tasks</h1>
        <div class="mt-4 flex pl-2">
          <input
            class="w-80 border-b-2 border-gray-500 text-black pl-2"
            type="text"
            placeholder="Enter your task here"
            maxlength="20"
            v-model="title"
          />
          <button
            class="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
            @click.prevent="addTask"
          >
            <svg
              class="h-6 w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="9" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="12" y1="9" x2="12" y2="15" />
            </svg>
          </button>
        </div>
      </div>
      <div class="mt-8">
        <ul v-if="tasks.tasks">
          <li v-for="task in tasks.tasks" :key="task.id" class="p-2 rounded-lg">
            <div class="grid grid-cols-3 grid-rows-1">
              <div class="flex flex-row col-span-2">
              <div class="pb-2 pt-2">
                <input @click.prevent="changeStatus(false, task.id)" v-if="task.is_complete" type="checkbox" class="h-6 w-6" :value="task.is_complete" checked />
                <input @click.prevent="changeStatus(true, task.id)" v-else type="checkbox" class="h-6 w-6" :value="task.is_complete"  />
              </div>
              <div class="p-2">
                <p id="title" :class = "{'text-lg':true, 'line-through': task.is_complete, 'text-gray-400': task.is_complete}">{{ task.title }}</p>
              </div>
              </div>

              <div class="flex flex-row justify-end">
              <button
                class="flex text-green-500 border-2 border-green-500 p-2 rounded-lg"
                @click.prevent="promptEdit(task.title, task.id)"
              >
                <svg
                  class="h-6 w-6 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                </svg>
              </button>
              <button
                class="ml-2 flex text-red-500 border-2 border-red-500 p-2 rounded-lg"
                @click.prevent="deleteTask(task.id)"
              >
                <svg
                  class="h-6 w-6 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </button>
              </div>

            </div>
            <hr class="mt-2" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { useTaskStore } from "../store/task";
  import { useUserStore } from "../store/user";
  
  const tasks = useTaskStore();
  const user = useUserStore();
  
  const title = ref(null);

  const isComplete = ref(true);

  const addTask = async () => {
    await tasks.addTask(title.value, user.user.id);
    title.value = ""
  }
  onMounted(async()=>{
    await tasks.fetchTasks();
  })   

  const changeStatus = async (is_complete, task_id) => {

  await tasks.changeStatus(is_complete, task_id);
  }

  const deleteTask = async(task_id) => {

    await tasks.deleteTask(task_id);
  }

  const editTask = async(title, task_id) => {
    await tasks.editTask(title, task_id)
  }

  const promptEdit = (title, task_id) =>{
    const response = window.prompt('Edit your title', title)
    if(response === null) return
    editTask(response, task_id)
  }

  </script>

<style></style>
