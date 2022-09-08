import net from "../axios/index";
export default async function (): Promise<number> {
  return await net.request({
    method: "get",
    url: `/project/listcount`,
  });
}
