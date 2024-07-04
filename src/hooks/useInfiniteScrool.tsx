import { useInfiniteQuery } from "@tanstack/react-query";
import blogService from "../services/blog/blog.service";
import { useCallback, useMemo, useRef } from "react";

export const useInfiniteScroll = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["articles"],
      queryFn: ({ pageParam }) => {
        return blogService.getArticles({ page: pageParam });
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.offset,
    });

  const handleObserver = useRef<IntersectionObserver>();

  const lastElement = useCallback(
    (element: HTMLDivElement) => {
      if (isLoading) return;
      if (handleObserver.current) handleObserver?.current?.disconnect();
      handleObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          console.log("fetchNextPage");
          fetchNextPage();
        }
      });
      if (element) handleObserver.current.observe(element);
    },
    [isLoading, hasNextPage]
  );
  const articles = useMemo(
    () => (data ? data?.pages.flatMap((item) => item.results) : []),
    [data]
  );

  return {
    articles,
    lastElement,
    isLoading,
    isFetching,
    hasNextPage,
  };
};
