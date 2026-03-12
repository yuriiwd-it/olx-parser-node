import axios from "axios";

export const BASE_URL = "https://www.olx.ua/api/v1/offers";
export const HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    Accept: "application/json",
};

export async function fetchPage(url) {
    try {
        const res = await axios.get(url, { headers: HEADERS });
        return res.data;
    } catch (err) {
        console.error("Request error:", err.message);
        return null;
    }
}