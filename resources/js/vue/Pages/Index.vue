<template>
  <div class="todoListContainer">
    <div class="heading">
        <h2 id="title">Todo List</h2>
            <add-item-form />
    </div>
    <list-view />
  </div>
</template>

<script>
import AddItemForm from "../Components/AddItemForm.vue"
import ListView from "../Components/ListView.vue"
export default {
    AddItemForm,
    ListView
}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}

.heading {
    background: #e6e6e6;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>
