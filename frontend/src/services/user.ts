import axiosClient from "../api/axiosClient";
interface RegisterPayload {
  username: string;
  password: string;
  karma: number;
  displayname: string;
}
export async function signUp(payload: RegisterPayload) {
  console.log("payload", payload);
  const { data } = await axiosClient.post("auth/register", payload, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  return data;
}
