import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 1.5,
  },
};

interface HeaderProps {
  title: string;
  path: string;
}

const Header: React.FC<HeaderProps> = (headerProps) => {
  const { pg } = useParams();
  const thisPage = pg ? Number(pg) : 1;
  const [page, setPage ] = useState<number>(thisPage);
  let prevPage;
  const nextPage = page + 1;

  page == 1 ? prevPage = 1 : prevPage= page -1;

  const title = headerProps.title;
  const path = headerProps.path;

  return (
    <Paper component="div" sx={styles.root}>
      <Link to={`/movies/${path}/${prevPage}`}>
        <IconButton aria-label="go back" onClick={() => {(page != 1)?setPage(page-1):setPage(1)}}>
          <ArrowBackIcon color="primary" fontSize="large" />
        </IconButton>
      </Link>
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <Link to={`/movies/${path}/${nextPage}`}>
        <IconButton aria-label="go forward"onClick={() => {setPage(page+1)}}>
          <ArrowForwardIcon color="primary" fontSize="large" />
        </IconButton>
      </Link>
    </Paper>
  );
};

export default Header;
