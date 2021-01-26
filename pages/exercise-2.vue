<template>
  <div>
    <form @submit.prevent="UyeOlmadanDevamEt">
      <input type="text" v-model="newTask" placeholder="Giris yap" />
      <button type="submit">submit</button>
    </form>
    <h2>Tasks</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        {{ task }}
        <button @click="remove(index)">Done</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: ''
    };
  },
  methods: {
    UyeOlmadanDevamEt() {
      if (this.newTask.trim().length === 0) return;
      this.tasks.push(this.newTask);
      
    },
    
  }
};
</script>
