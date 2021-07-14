import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import CardContainer from "../CardContainer";
import { covidCaseAll } from "../../API/covidAPI";

const Landing = () => {
  const [data, setData] = useState();

  useEffect(() => {
    covidCaseAll().then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Box marginLeft="10%" marginRight="10%" paddingTop="50px">
      <Box letterSpacing="4px" paddingBottom="24px">
        <Typography variant="h2">Pandemic</Typography>
        <Typography variant="h5">By Bobby Liu</Typography>
        <Typography variant="body1">I Own Nothing On This Website</Typography>
        <Typography variant="body2">Enjoy</Typography>
      </Box>
      <Box paddingTop="24px">
        {data ? (
          <>
            <Box paddingBottom="18px" whiteSpace="nowrap">
              <Typography variant="h6">{`Total ${data.active} active case of Covid-19.`}</Typography>
              <Typography variant="h6">{`Found in ${data.affectedCountries} Countries.`}</Typography>
              <Typography variant="h6">{`Total ${data.deaths} deaths.`}</Typography>
            </Box>
            <Box whiteSpace="nowrap">
              <Typography variant="h6">{`Today ${data.todayCases} people tested positive for Covid-19. Total ${data.todayDeaths} Deaths Today.`}</Typography>
            </Box>
          </>
        ) : (
          <Typography> Loading </Typography>
        )}
      </Box>
      <Box paddingTop="16px">
        <Box>
          <Typography variant="h4">
            International Data From John Hopkins University
          </Typography>
        </Box>
        <Box paddingTop="16px">
          <CardContainer />
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
