import axiosClient from "@/api/axiosClient";
import { SubReddit } from "@/components/modals/SubredditForm";

export async function storeCommunity(payload: SubReddit) {
  console.log("payload", payload);
  const { data } = await axiosClient.post("create/subreddit", payload);
  return data;
}
