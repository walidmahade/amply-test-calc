const COMPRESSION_RATE = 0.9; // B17
const MANAGED_COST = 0.3; // B19

// Storage Loc	Cost / TB
const STORAGE_COST = {
  "us-east": 24,
  "eu-central": 24.5,
  "ap-southeast": 25,
};

// Compute Loc	Cost / Credit
const COMPUTE_COST = {
  "us-east": 3,
  "eu-central": 3.9,
  "ap-southeast": 3.7,
};

/**
 * --------------------------------------
 * data load service / credits per year
 */
const DATA_LOAD_SERVICE = {
  Snowpipe: 2190,
  Snowpipe_ADJ: 29200,
};

function get_credits_per_year(data_ingestion_per_day: number, data_load_service: keyof typeof DATA_LOAD_SERVICE) {
  // =((A5/100/1.25)*Lookups!B12)
  return (data_ingestion_per_day / 100 / 1.25) * DATA_LOAD_SERVICE[data_load_service];
}

/**
 * --------------------------------------
 * warehouse size / credits per year
 */
const WAREHOUSE_SIZE = {
  XS: 11680,
  S: 23360,
  M: 46720,
  L: 93440,
  XL: 186880,
  "2XL": 373760,
  "3XL": 747520,
  "4XL": 1495040,
};

function get_warehouse_data(data_ingestion_per_day: number): [string, number] {
  //=IF(ISBETWEEN(A5,0,2000,TRUE,TRUE),"XS", IF(ISBETWEEN(A5,2000,5000,FALSE,TRUE), "S", IF(ISBETWEEN(A5,5000,12500,FALSE,TRUE), "M", IF(ISBETWEEN(A5,12500,25000,FALSE,TRUE), "L", IF(ISBETWEEN(A5,25000,50000,FALSE,TRUE))))))
  let size: string;

  if (data_ingestion_per_day <= 2000) {
    size = "XS";
  } else if (data_ingestion_per_day <= 5000) {
    size = "S";
  } else if (data_ingestion_per_day <= 12500) {
    size = "M";
  } else if (data_ingestion_per_day <= 25000) {
    size = "L";
  } else if (data_ingestion_per_day <= 50000) {
    size = "XL";
  } else if (data_ingestion_per_day <= 100000) {
    size = "2XL";
  } else if (data_ingestion_per_day <= 200000) {
    size = "3XL";
  } else {
    size = "4XL";
  }

  return [size, WAREHOUSE_SIZE[size]];
}

function get_total_storage(hosted_region: string, storage_size_on_disk_TB: number): number {
  // location is fixed to "us" -> ("us-east") for now ( according to notion doc)
  // =IF(B16="US", IF(A13*Lookups!E15*12 < 24, "24", A13*Lookups!E15*12)/1,IF(B16="EU", IF(A13*Lookups!E16*12 < 24.5, "24.5", A13*Lookups!E16*12)/1, IF(B16="AP", IF(A13*Lookups!E17*12 < 24.5, "24.5", A13*Lookups!E17*12)/1)))
  if (hosted_region === "us") {
    // IF(A13*Lookups!E15*12 < 24, "24", A13*Lookups!E15*12)/1
    const result =
      storage_size_on_disk_TB * STORAGE_COST["us-east"] * 12 < 24
        ? 24
        : storage_size_on_disk_TB * STORAGE_COST["us-east"] * 12;

    return Math.ceil(result * 100) / 100;
  }
}

export {
  COMPRESSION_RATE,
  MANAGED_COST,
  STORAGE_COST,
  COMPUTE_COST,
  DATA_LOAD_SERVICE,
  get_credits_per_year,
  get_warehouse_data,
  get_total_storage,
};
