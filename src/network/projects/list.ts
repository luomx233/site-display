import net from "../axios/index";
export default async function (page: number,limit:number) {
  return await net.request({
    method: "get",
    url: `/project/list?page=${page}&&limit=${limit}`,
  });
}
