<script setup lang="ts">
//  "package":[{"name":"@nestjs/common","version":"^9.0.0"},{"name":"@nestjs/core","version":"^9.0.0"},{"name":"@nestjs/mapped-types","version":"*"},{"name":"@nestjs/platform-express","version":"^9.0.0"},{"name":"@nestjs/swagger","version":"^6.1.2"},{"name":"@nestjs/typeorm","version":"^9.0.1"},{"name":"crypto","version":"^1.0.1"},{"name":"mysql2","version":"^2.3.3"},{"name":"reflect-metadata","version":"^0.1.13"},{"name":"rimraf","version":"^3.0.2"},{"name":"rxjs","version":"^7.2.0"},{"name":"swagger-ui-express","version":"^4.5.0"},{"name":"typeorm","version":"^0.3.9"}],
//  "skills":[,{"name":"nestjs","url":"www.nestjs.com"},{"name":"typeorm","url":"https://typeorm.bootcss.com/"},{"name":"docker","url":"www.docker.com/"}]
//  }

import Card from "@/components/Card.vue";
import { ref, onMounted } from "vue";
import router from "@/router";

// 通过store获取列表数据
import { useProjectStore } from "@/stores/project";
const projectStore = useProjectStore();

const currentPage = ref(0);
const pageSize = ref(6);
const handleCurrentChange = async () => {
  projectStore.getProjectList(
    (currentPage.value - 1) * pageSize.value,
    pageSize.value
  );
};
const gotoDetail = (id: number) => {
  projectStore.getProjectById(+id);
  router.push(`/detail/${id}`);
};
</script>

<template>
  <el-row class="row" :gutter="20">
    <el-col
      class="col"
      v-for="(project, index) in projectStore.projectList"
      :xs="24"
      :sm="24"
      :md="24"
      :lg="12"
      :xl="12"
    >
      <Card :project="project" @click="gotoDetail(project.id)"></Card>
    </el-col>
  </el-row>
  <el-pagination
    class="pages"
    @current-change="handleCurrentChange"
    background
    layout="prev, pager, next"
    :total="projectStore.listCount"
    v-model:currentPage="currentPage"
    v-model:page-size="pageSize"
  />
</template>

<style scoped>
.pages {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
</style>
