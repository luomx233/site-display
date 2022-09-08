import { defineStore } from "pinia";
import getlistcount from "@/network/projects/listcount";
import getlist from "@/network/projects/list";
import getByid from "@/network/projects/getByid";
export const useProjectStore = defineStore({
  id: "project",
  state: () => ({
    projectList: [],
    projectDetail: {},
    listCount: 0,
  }),
  actions: {
    async getListCount() {
      this.listCount = await getlistcount();
    },
    async getProjectList(page: number, limit: number) {
      console.log("getProjectList" + page + "--" + limit);
      const list = await getlist(page, limit);
      this.projectList = list.reverse();
    },
    async getProjectById(id: number) {
      this.projectDetail = await getByid(id);
    },
  },
});
