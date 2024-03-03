import { cache } from 'react'

export async function fetchCategories() {
    const rsp = {
        "code": 0,
        "data": [
            "Newest",
            "Random",
        ]
    }
    return rsp.data;
}

export const fetchVideos = cache(async () => {
    try {
        const apiURL = "https://api.collectui.com/sora/list";
        const rsp = await fetch(apiURL); // 使用 await 等待 fetch 操作完成
        if (!rsp.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await rsp.json(); // 解析 JSON 响应体
        return data.data; // 返回解析后的数据
    } catch (error) {
        console.error("Failed to fetch videos:", error);
        // 处理错误或返回错误信息
        return null; // 或者根据实际情况返回一个错误信息或默认值
    }
}

)

