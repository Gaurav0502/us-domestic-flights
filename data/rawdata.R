library(anyflights)
library(dplyr)

# constants
API_REQ_TIMEOUT = 1500
STATIONS = c("LGA", "JFK", "EWR")
YEAR = 2023
DATA_DIR = "data"

options(timeout = API_REQ_TIMEOUT)

# Utility function
save_data <- function(data, flight_type){
 
  tables <- c("flights", "planes", "airlines", "airports", "weather")
  csv_path <- ""
  
  for(table_name in tables){
     
    if(!any(table_name %in% c("airlines", "airports"))){
      
      csv_path = file.path(DATA_DIR, "raw", flight_type, 
                           paste(table_name, "csv",
                                 sep = "."))
    }else{
      csv_path = file.path(DATA_DIR, "raw", 
                           paste(table_name, "csv",
                                 sep = "."))
    }
    
    if(!file.exists(csv_path)){
      
      write.csv(x = data[table_name],
              file = csv_path)
      
      cat("\n")
      cat("Saved", paste(table_name, "csv",
                         sep = "."), "at",
          csv_path, "\n")
       
    }
    
  }

}

nycflights23outbound <- anyflights::anyflights(station = STATIONS,
                                               year = YEAR,
                                               month = 1)

save_data(data = nycflights23outbound,
          flight_type = "outbound")

print("Inbound flights data downloaded and saved succesfully.")

all_airports <- nycflights23outbound$airports$faa

dest_airports <- nycflights23outbound$flights |>
                     filter(dest %in% all_airports & !dest %in% STATIONS) |>
                        select("dest") |>
                           unique()

dest_airports <- dest_airports$dest

nycflights23inbound <- anyflights::anyflights(station = dest_airports,
                                               year = YEAR)

nycflights23inbound$flights <- nycflights23inbound$flights |>
                                   filter(dest %in% STATIONS)

save_data(data = nycflights23inbound,
          flight_type = "inbound")

print("Outbound flights data downloaded and saved succesfully.")