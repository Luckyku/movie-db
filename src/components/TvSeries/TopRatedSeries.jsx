import React, { useEffect, useState } from "react";
import { getTopRatedTvSeries } from "../../utils/api";
import usePagination from "../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import SeriesCard from "../Card/TvSeries/TvSeriesCard";
import Loading from "../Loading/Loading";

const TopRatedSeries = ({ title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    currentPage,
    totalPages,
    setTotalPages,
    handleNextPage,
    handlePreviousPage,
    onSetPage,
  } = usePagination();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await getTopRatedTvSeries(currentPage);
        setData(results);
        if (totalPages > 500) {
          setTotalPages(500);
        } else {
          setTotalPages(total_pages);
        }
        setTotalPages(500);
      } catch (error) {
        console.log("there's an error while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);
  //   console.log(`data ${data} total pages: ${totalPages}`);

  return (
    <div>
      {!loading ? (
        <>
          <h4 className="text-xl font-bold mb-4 mt-8">{title}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {data.map((series) => (
              <SeriesCard
                key={series.id}
                title={series.name}
                date={series.first_air_date}
                poster={series.poster_path}
                vote_average={series.vote_average}
                id={series.id}
                movieRating={true}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
            onSetPage={onSetPage}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TopRatedSeries;
