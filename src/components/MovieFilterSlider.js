import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { movieFilterAction } from "../redux/actions/movieFilterActions";

const MovieFilterSlider = ({ min, max, text, id }) => {
    const isMounted = useRef(false);
    const {
        keyword,
        sortBy,
        withGenres,
        includeVideo,
        releaseDateGte,
        releaseDateLte,
        voteAverageGte,
        voteAverageLte,
      } = useSelector((state) => state.filter);
      const dispatch = useDispatch();
      useEffect(() => {
        if (isMounted.current) {
          dispatch(
            movieFilterAction.getFilteredMovies(
              keyword,
              sortBy,
              withGenres,
              includeVideo,
              releaseDateGte,
              releaseDateLte,
              voteAverageGte,
              voteAverageLte
            )
          );
        } else {
          isMounted.current = true;
        }
      }, [releaseDateGte, releaseDateLte, voteAverageGte, voteAverageLte]);


      const theme = createTheme({
        palette: {
          primary: {
            light: "#ff5f52",
            main: "#c62828",
            dark: "#8e0000",
            contrastText: "#ffffff",
          },
        },
      });
    
      function valuetext(value) {
        return `${value}`;
      }
    
      const [value, setValue] = useState([min, max]);
    
      const minDistance = 1;
    
      const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {
          setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
          setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
      };

      const handleDispatch = () => {
        if (id === "year") {
          dispatch(
            movieFilterAction.releaseDateFilterStoreSuccess()
          );
    
          dispatch(movieFilterAction.getFilteredMoviesRequest());
        } else if (id === "score") {
    
          dispatch(movieFilterAction.scoreFilterStoreSuccess());
        }
      };
  return (
    <ThemeProvider theme={theme}>
    <h2>{text}</h2>
    <h2>
      {value[0]} ~ {value[1]}
    </h2>
    <Box sx={{ width: "95%" }}>
      <Slider
        id={id}
        getAriaLabel={() => "Minimum distance"}
        value={value}
        color="primary"
        onChange={handleChange}
        onChangeCommitted={handleDispatch}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={min}
        max={max}
        disableSwap
      />
    </Box>
  </ThemeProvider>
  )
}

export default MovieFilterSlider