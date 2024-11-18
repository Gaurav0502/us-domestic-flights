nycflights23 <- rbind(nycflights23inbound$flights,
                      nycflights23outbound$flights)

nycflights23 <- nycflights23 |>
                  arrange(year, month, day, hour, flight)

write.csv(x = nycflights23,
          file = "raw/flights.csv")

print("Successfully consolidated flights data.")

weather <- rbind(nycflights23inbound$weather,
                 nycflights23outbound$weather)

weather <- weather |>
             arrange(origin, year, month, day, hour)

write.csv(x = weather,
          file = "raw/weather.csv")

print("Successfully consolidated weather data.")

tailnum <- unique(nycflights23$tailnum)

planes_inbound <-
  planes_inbound |>
    filter(planes_inbound$planes.tailnum %in% tailnum)

planes_outbound <-
   planes_outbound |>
     filter(!planes_outbound$planes.tailnum %in% planes_inbound$planes.tailnum)

planes <- rbind(planes_inbound, planes_outbound)

write.csv(x = planes,
          file = "raw/planes.csv")

print("Successfully consolidated planes data.")