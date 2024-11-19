# Analysis of NYC domestic flights in 2023

## Aim

An analysis of the on-time performance of all the NYC domestic flights within the United States in 2023 with following objectives:

1. To investigate the various reasons for delays.
   
2. To understand the geospatial patterns in the delays.

3. To analyse time-series patterns in the delays.

## Data

The `anyflights()` from the `anyflights` package is used to obtain data of the domestic flights such that:

- the flights that depart from or arrive at any of the airports that serve NYC region (i.e. LGA, JFK, EWR).
  
- the flights that were scheduled for throughout 2023.

The steps to download the data are explained in [data/README.md](https://github.com/Gaurav0502/us-domestic-flights/tree/main/data).

## Important Links

Rendered Quarto book: https://gaurav0502.github.io/us-domestic-flights/

## References

- `anyflights`: https://cran.r-project.org/web/packages/anyflights/anyflights.pdf
