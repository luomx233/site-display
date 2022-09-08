import net from "../axios/index";
export default async function (id: number) {
  // net.interceptors.response.use(function (response) {
  //   try {
  //     let objPackage = [];
  //     let objSkills = [];
  //     if (response.package && response.skills) {
  //       objPackage = JSON.parse(response.package);
  //       objSkills = JSON.parse(response.skills);
  //     }
  //     response.package = objPackage;
  //     response.skills = objSkills;
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
  return await net.request({
    method: "get",
    url: `/project/${id}`,
  });
}
