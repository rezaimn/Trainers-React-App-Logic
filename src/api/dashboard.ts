import axios from "axios";
import {
    DashboardState

} from "../models";

export function getDashboardData(config = {}) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const xhr = axios.request<null, DashboardState[]>({
        method: "get",
        url: `/dashboard/info`,
    });
    return { xhr, cancel: (message: string) => source.cancel(message) };
}
