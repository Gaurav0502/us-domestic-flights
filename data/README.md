# Data Reproducibility

To download the raw data, execute the `rawdata.sh` file.

```sh
cd data
sh rawdata.sh
```

# Directory structure

The directory structure for the `data` sub-directory must be as follows:

```sh
.
├── README.md
├── clean
├── consolidate.R
├── derived
├── interactive
│   └── delayfactors.csv
├── raw
│   ├── airlines.csv
│   ├── airports.csv
│   ├── flights.csv
│   ├── inbound
│   │   ├── flights.csv
│   │   ├── planes.csv
│   │   └── weather.csv
│   ├── outbound
│   │   ├── flights.csv
│   │   ├── planes.csv
│   │   └── weather.csv
│   ├── planes.csv
│   └── weather.csv
├── rawdata.R
└── rawdata.sh

```

This is required for the code in this repository to work correctly.

# Code logic

To understand the logic behind the code in *.R scripts, kindly refer to the data.qmd file.