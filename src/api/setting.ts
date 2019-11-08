import axios from "axios";
import { SettingState } from "../models";

export function getSettigns(id: number) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const xhr = axios.request<SettingState, any>({
    method: "get",
    url: `/setting/${id}`
  });
  return { xhr, cancel: (message: string) => source.cancel(message) };
}

export function updateSettings(id: number, data: SettingState) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const xhr = axios.request<SettingState, any>({
    method: "put",
    url: `/setting/${id}`,
    data
  });
  return { xhr, cancel: (messgae: string) => source.cancel(messgae) };
}
