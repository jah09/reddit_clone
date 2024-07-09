import axiosClientTest from "../api/axiosClientTest";

interface GetTestPayload {
  token: string;
}
export async function getTest(payload: GetTestPayload) {
  console.log("payload in 7", payload);
  const { data } = await axiosClientTest.get("/test", {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  });
  return data;
}
 