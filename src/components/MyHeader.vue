<template>
  <div class="header">
    <div class="title">
      <el-link type="primary" class="titleHead" @click="router.push('/')">
        LuomxProjectDisplay
      </el-link>
    </div>
    <div class="headerUser">
      <el-button @click="router.push('/')">返回列表</el-button>
      <el-button @click="router.push('/resume')">查看简历</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style>
.header {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headerUser {
  text-align: right;
  margin-right: 20px;
}

.titleHead {
  font-size: 24px;
}
</style>
