import axiosClient from "../api/axiosClient";
interface RegisterPayload {
  username: string;
  password: string;
  karma: number;
  displayname: string;
}
interface SignInPayload {
  username: string;
  password: string;
}
export async function signUp(payload: RegisterPayload) {
  console.log("payload", payload);
  const { data } = await axiosClient.post("auth/register", payload);
  return data;
}

export async function signIn(payload: SignInPayload) {
  console.log("payload19", payload);
  const { data } = await axiosClient.post("auth/login", payload);
  return data;
}
