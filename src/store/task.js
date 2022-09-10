// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },
    // Hacer POST
      async addTask(title, id) {
        await supabase
        .from('tasks')
        .insert([{ title: title, user_id: id }])
        this.fetchTasks();
      },
    // Hacer el PUT (edit)
    async editTask(title, task_id) {
      await supabase
      .from('tasks')
      .update([{ title: title }])
      .match( {id: task_id})
      this.fetchTasks();
    },

    // Hacer el delete
    async deleteTask(task_id) {
      await supabase
      .from('tasks')
      .delete()
      .match({id: task_id})
      this.fetchTasks();
    },
    // Hacer el PUT (cambiar entre completada y pendiente)
    async changeStatus(is_complete, task_id) {
      await supabase
      .from('tasks')
      .update([{ is_complete: is_complete }])
      .match( {id: task_id})
      this.fetchTasks();
    }
  },
});
