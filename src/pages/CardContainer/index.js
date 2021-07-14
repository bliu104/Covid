import React, { useState, useContext } from "react";
import { Box, Typography } from "@material-ui/core";
import Dialog from "../../Components/Dialog";
import { DataContext } from "../../Context/dataContext";

const CardContainer = () => {
  const { internationalData } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [currentCity, setCurrentCity] = useState();
  const [cityData, setCityData] = useState();
  const listOfCountries = (internationalData) => {
    const array = [];
    internationalData.forEach((country) => {
      if (!array.includes(country.country)) array.push(country.country);
    });
    return array;
  };

  const listOfProdvinceByCountry = (selectedCountry, internationalData) => {
    const array = [];
    internationalData &&
      internationalData.forEach((country) => {
        if (selectedCountry === country.country) {
          if (country.province) {
            array.push(country);
          } else {
            array.push(country);
          }
        }
      });
    return array;
  };

  console.log(show);

  return (
    <Box paddingLeft="-12px" display="flex" flexWrap="wrap">
      {internationalData &&
        listOfCountries(internationalData).map((country, index) => {
          return (
            <div
              onClick={(e) => {
                setOpen(true);
                setCurrentCity(country);
              }}
              key={index}
            >
              <Box
                border="1px solid black"
                padding="12px"
                width="100px"
                height="100px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                margin="5px"
                textAlign="center"
              >
                {country}
              </Box>
            </div>
          );
        })}
      <Dialog open={open} setOpen={setOpen}>
        <Box padding="12px">
          <Typography variant="h3">{currentCity}</Typography>
        </Box>
        <Box
          min-width="500px"
          min-height="500px"
          display="flex"
          flexWrap="wrap"
          width="100%"
        >
          {currentCity &&
            internationalData &&
            listOfProdvinceByCountry(currentCity, internationalData).map(
              (city, index) => {
                return (
                  <div key={index}>
                    {city.county || city.province ? (
                      <div
                        onClick={() => {
                          setShow(!show);
                          setCityData(city);
                        }}
                      >
                        <Box
                          border="1px solid black"
                          padding="12px"
                          width="100px"
                          height="75px"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          margin="5px"
                          textAlign="center"
                          textOverflow="wrap"
                        >
                          <Typography variant="body2">{`${city.province}${
                            city.county ? `, ${city.county}` : null
                          }`}</Typography>
                        </Box>
                      </div>
                    ) : (
                      <Box padding="12px">
                        {Object.entries(city.stats).map(([key, value]) => {
                          return (
                            <Box display="flex">
                              <Box width="100px">
                                <Typography>{key}</Typography>
                              </Box>
                              <Typography>{value}</Typography>
                            </Box>
                          ); //Remove repeat code, create component
                        })}
                      </Box>
                    )}
                  </div>
                );
              }
            )}
        </Box>
      </Dialog>
      <Dialog open={show} setOpen={setShow}>
        <Box
          marginLeft="12px"
          width="100%"
          height="200px"
          display="flex"
          flexDirection="column"
          padding="16px"
        >
          {cityData &&
            Object.entries(cityData.stats).map(([key, value]) => {
              <Box paddingBottom="12px">
                <Typography variant="h5">{`${cityData.province}${
                  cityData.county ? `, ${cityData.county}` : null
                }`}</Typography>
              </Box>;
              return (
                <Box display="flex">
                  <Box width="100px">
                    <Typography>{key}</Typography>
                  </Box>
                  <Typography>{value}</Typography>
                </Box>
              );
            })}
        </Box>
      </Dialog>
    </Box>
  );
};

export default CardContainer;
