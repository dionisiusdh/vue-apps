<template>
  <h3>Version 1.0.0</h3>
  <router-link to="/"><button class="back-btn">Go Back</button></router-link>
</template>

<style scoped>
.back-btn {
  display: inline-block;
  background: #555;
  color: #fff;
  border: none;
  padding: 8px 15px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  transition: 0.3s;
}

.back-btn:hover {
  background: rgba(150, 150, 150, 0.8);
  color: #333;
}
</style>
