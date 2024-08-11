import React, { useState, useEffect } from "react";
import SeriesHeader from "../headerSeries";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getSeriesImages } from "../../api/tmdb-api";
import { SeriesImage, SeriesDetailsProps } from "../../types/interfaces";

const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTile: {
        width: 450,
        height: '100vh',
    },
};

interface TemplateSeriesPageProps {
		series: SeriesDetailsProps;
    children: React.ReactElement;
}


const TemplateSeriesPage: React.FC<TemplateSeriesPageProps> = ({series, children}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
			getSeriesImages(series.id).then((images) => {
            setImages(images);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <SeriesHeader {...series} />

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div>
                        <ImageList cols={1}>
                            {images.map((image: SeriesImage) => (
                                <ImageListItem
                                    key={image.file_path}
                                    sx={styles.gridListTile}
                                    cols={1}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                        alt={'Image alternative'}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Grid>

                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateSeriesPage;