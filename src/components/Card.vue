<template>
  <el-card shadow="hover" class="card">
    <el-row :gutter="20">
      <el-col :span="14">
        <el-image :src="project.coverUrl" class="image" fit="cover" />
      </el-col>
      <el-col :span="10">
        <p>项目名称：{{ project.title }}</p>
        <p>项目介绍：{{ project.intro }}</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
defineProps({
  project: Object,
});
</script>

<style>
.card {
  margin-bottom: 14px;
}

.card:hover {
  cursor: pointer;
}

.image {
  width: 100%;
  height: 200px;
}
</style>
