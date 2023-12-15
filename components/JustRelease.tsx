"use client";
import {
  DiscoverMovieQuery,
  fetchDiscoverMovie,
} from "@/queries/discover/movie";
import { API_QUERY } from "@/types/api";
import Flicking from "@egjs/react-flicking";
import { Card, CardFooter, Image, Skeleton } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";

export default function JustRelease() {
  const [query, _] = useState<DiscoverMovieQuery>({
    "primary_release_date.gte": dayjs().startOf("month").format("YYYY-MM-DD"),
    "primary_release_date.lte": dayjs().format("YYYY-MM-DD"),
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
    with_release_type: 2,
  });
  const { data, isLoading } = useQuery({
    queryKey: [API_QUERY.JUST_RELEASE, query],
    queryFn: () => fetchDiscoverMovie(query),
  });
  return (
    <div className="mx-20">
      <h2 className="pb-6 text-2xl font-bold">Just Release</h2>
      <Flicking moveType={["snap"]} panelsPerView={4} align={"prev"} bound>
        {data &&
          data.results &&
          data.results
            .filter((release) => release.poster_path)
            .map((result) => (
              <div key={result.id}>
                <Card className="w-80">
                  <Skeleton
                    isLoaded={!isLoading}
                    className="rounded-lg w-80"
                    classNames={{ base: "rounded-lg w-80" }}
                  >
                    <Image
                      removeWrapper
                      alt={result.title}
                      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}original/${result.poster_path}`}
                      className="z-0 select-none w-full object-cover"
                    />
                  </Skeleton>
                  <CardFooter className="items-end h-1/3 z-40 absolute bottom-0 bg-gradient-to-b from-black/0 from-60% via-black/70 via-80% to-black/90">
                    <h5 className="font-bold text-lg">{result.title}</h5>
                  </CardFooter>
                </Card>
              </div>
            ))}
      </Flicking>
    </div>
  );
}
