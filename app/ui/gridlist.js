"use client";
import React, { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import GridItem from "@/app/ui/griditem"; // 确保这个路径是正确的

// Client Component默认导出函数
export default function GridList() {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [nextPageURL, setNextPageURL] = useState("https://api.collectui.com/sora/list?page=2");
    const [isLoadFirstPage, setIsLoadFirstPage] = useState(false);
 
    // 使用useEffect进行数据的异步加载
    const fetchMoreData = async () => {
        if (!hasMore || !isLoadFirstPage) return; // 如果没有更多数据，就不执行网络请求
        await fetchData(nextPageURL);
    };

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setItems(prevItems => [...prevItems, ...data.data]);
            setHasMore(data.current_page < data.last_page);
            const nextUrl = data.next_page_url.replace("http", "https");
            setNextPageURL(nextUrl);
        } catch (error) {
            console.error('An error has occurred: ', error);
        } finally {
            setIsLoadFirstPage(true);
        }
    }

    useEffect(() => {
        const apiURL = "https://api.collectui.com/sora/list";
        fetchData(apiURL);
    }, []);

    return (
        <section className="relative">
            <div className="container mx-auto py-6 max-w-7xl">
                <p className="text-lg font-semibold text-gray-800 mb-4">OpenAI Sora Videos & Prompts</p>
                <InfiniteScroll
                    dataLength={items.length}
                    next={() => fetchMoreData()} // 作为函数调用，以避免直接在JSX中引用异步函数
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="mb-8 gap-5 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
                        {Array.isArray(items) && items.map((item, index) => (
                            <GridItem key={index} item={item} />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </section>
    );
}
