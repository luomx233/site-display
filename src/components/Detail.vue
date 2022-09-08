<script setup lang="ts">
import { useDetailStore } from '@/store/projectsDetail'
import { defineProps, reactive } from 'vue';
const router = useRouter()
const { maxindex, projectname, storeprojectdetail } = defineProps(['maxindex', 'projectname', 'storeprojectdetail'])
const projectdetail = reactive(storeprojectdetail)
const detailStore = useDetailStore()
const changeto = (href: string) => {
  window.open(href);
}
const goIndex = (index) => {
  const projectname = detailStore.getNameByIndex(index)
  router.replace(`/projects/${projectname}`)
  setTimeout(() => {
    location.reload();
  }, 80);
}
</script>

<template>
  <div>
    <div>
      <div class="detail-header">
        <div class="left">
          <el-link type="primary" @click="goIndex(projectdetail.index - 1)" :disabled="projectdetail.index <= 0">&lt;
          </el-link>
        </div>
        <el-tooltip class="box-item" effect="dark" content="点击前往项目展示页！" placement="top">
          <el-image class="cover" :src="projectdetail.projectCover" fit="cover"
            @click="changeto(projectdetail.projectUrl)" />
        </el-tooltip>

        <div class="right">
          <el-link type="primary" @click="goIndex(projectdetail.index + 1)" :disabled="projectdetail.index >= maxindex">
            >
          </el-link>
        </div>
      </div>
      <div class="detail-body">
        <div>
          <h4>项目介绍</h4>
          <el-divider></el-divider>
          项目名称:{{ projectdetail.projectname }} <br>
          {{ projectdetail.introduction }}
        </div>
        <div>
          <h4>使用技术：</h4>
          <el-divider></el-divider>
          <template v-for="(skill, index) in projectdetail.skillsStack" :key="index">
            {{ skill.skillsName }}：<el-link type="primary" target="_blank" :href="skill.skillsUrl">{{ skill.skillsUrl }}

            </el-link> <br>
          </template>

        </div>
        <div>
          <h4>项目地址</h4>
          <el-divider></el-divider>
          项目展示地址：<el-link type="primary" target="_blank" :href="projectdetail.projectUrl">
            {{ projectdetail.projectUrl }}
          </el-link> <br>
          gitee源码地址：<el-link type="primary" target="_blank" :href="projectdetail.projectGitUrl">
            {{ projectdetail.projectGitUrl }}
          </el-link>
        </div>
        <div>
          <h4>项目结构</h4>
          <el-divider></el-divider>
          <xmp>{{ projectdetail.tree }}</xmp>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-header {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}

.left,
.right {
  width: 100px;
  text-align: center;
}

.cover {
  width: 70%;
  height: 400px;
  border-radius: 11px;
}

.cover:hover {
  cursor: pointer;
  box-shadow: 0px 0px 5px #409EFF;
}

.left .el-link {
  height: 100%;
  font-size: 44px !important;
}

.right .el-link {
  height: 100%;
  font-size: 44px !important;
}

.el-divider__text {
  font-size: 26px !important;
}

.detail-body>div {
  margin: 20px;
  padding: 20px;
  border: 1px solid #409EFF;
  background-color: #ecf5ff;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(92, 92, 92, 0.3)
}
</style>