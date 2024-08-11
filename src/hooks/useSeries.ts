import { useEffect, useState } from "react";
import { getSingleSeries } from '../api/tmdb-api'
import { SeriesDetailsProps } from '../types/interfaces'

type SeriesHookReturnType = [SeriesDetailsProps | undefined, React.Dispatch<React.SetStateAction<SeriesDetailsProps | undefined>>];

const useSeries  = (id: string):SeriesHookReturnType  => {
    const [series, setSeries] = useState<SeriesDetailsProps>();
    useEffect(() => {
			getSingleSeries(id).then(series => {
				setSeries(series);
        });
    }, [id]);
    return [series, setSeries];
};

export default useSeries