<script setup lang="ts">
import { useProjectStore } from "@/stores/project";
const projectStore = useProjectStore();
console.log(projectStore.projectDetail);
const gotoProjectSite = (href: string) => {
  window.open(href);
};
</script>

<template>
  <div>
    <div>
      <div class="projectStore.projectDetail-header">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="点击前往项目展示页！"
          placement="top"
        >
          <el-image
            class="cover"
            :src="projectStore.projectDetail.coverUrl"
            fit="cover"
            @click="gotoProjectSite(projectStore.projectDetail.displayUrl)"
          />
        </el-tooltip>
      </div>
      <div class="projectStore.projectDetail-body">
        <div>
          <h4>项目介绍</h4>
          <el-divider></el-divider>
          项目名称:{{ projectStore.projectDetail.title }} <br />
          {{ projectStore.projectDetail.intro }}
        </div>
        <div>
          <h4>项目地址</h4>
          <el-divider></el-divider>
          项目展示地址：<el-link
            type="primary"
            target="_blank"
            :href="projectStore.projectDetail.displayUrl"
          >
            {{ projectStore.projectDetail.displayUrl }}
          </el-link>
          <br />
          gitee源码地址：<el-link
            type="primary"
            target="_blank"
            :href="projectStore.projectDetail.repositoryUrl"
          >
            {{ projectStore.projectDetail.repositoryUrl }}
          </el-link>
        </div>
        <div>
          <h4>使用技术：</h4>
          <el-divider></el-divider>
          <template
            v-for="(skill, index) in JSON.parse(
              projectStore.projectDetail.skills
            )"
            :key="index"
          >
            {{ skill.name }}：<el-link
              type="primary"
              target="_blank"
              :href="skill.url"
              >{{ skill.url }}
            </el-link>
            <br />
          </template>
        </div>
        <div>
          <h4>使用依赖：</h4>
          <el-divider></el-divider>
          <template
            v-for="(skill, index) in JSON.parse(
              projectStore.projectDetail.package
            )"
            :key="index"
          >
            {{ skill.name }}：{{ skill.version }}
            <br />
          </template>
        </div>

        <div>
          <h4>项目结构</h4>
          <el-divider></el-divider>
          <div
            v-html="projectStore.projectDetail.tree.replaceAll('\\n', '<br />')"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projectStore.projectDetail-header {
  text-align: center;
}

.left,
.right {
  width: 100px;
  text-align: center;
}

.cover {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  height: 400px;
  border-radius: 11px;
}

.cover:hover {
  cursor: pointer;
  box-shadow: 0px 0px 5px #409eff;
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

.projectStore.projectDetail-body > div {
  margin: 20px;
  padding: 20px;
  border: 1px solid #409eff;
  background-color: #ecf5ff;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(92, 92, 92, 0.3);
}
</style>
