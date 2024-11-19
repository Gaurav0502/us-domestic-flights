mkdir -p raw1 clean1 derived1

mkdir -p raw/inbound raw/outbound

Rscript rawdata.R

echo "All data is downloaded successfully."

Rscript consolidate.R

echo "All data is consolidated successfully."