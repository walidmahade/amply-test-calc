import { formattedNumber } from "./helpers-functions";

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

/**
 * --------------------------------------
 * total storage calculation
 * location is fixed to "us" -> ("us-east") for now ( according to notion doc)
 * =IF(B16="US", IF(A13*Lookups!E15*12 < 24, "24", A13*Lookups!E15*12)/1,IF(B16="EU", IF(A13*Lookups!E16*12 < 24.5, "24.5", A13*Lookups!E16*12)/1, IF(B16="AP", IF(A13*Lookups!E17*12 < 24.5, "24.5", A13*Lookups!E17*12)/1)))
 */
function get_total_storage(hosted_region: string, storage_size_on_disk_TB: number): number {
  if (hosted_region === "us") {
    // IF(A13*Lookups!E15*12 < 24, "24", A13*Lookups!E15*12)/1
    const result =
      storage_size_on_disk_TB * STORAGE_COST["us-east"] * 12 < 24
        ? 24
        : storage_size_on_disk_TB * STORAGE_COST["us-east"] * 12;

    return Math.ceil(result * 100) / 100;
  }
}

/**
 * --------------------------------------
 * calculate compared costs
 */
// [GB/Year: A25, Splunk: B25, Splunk Cloud: C25, Azure Sentinel: D25
const COMPARED_COSTS = [
  [100, 600, 800, 715.4], // A26, B26, C26, D26
  [500, 500, 710, 631.45], // A27, B27, C27, D27
  [1024, 390.63, 683.59, 620.5], // A28, B28, C28, D28
  [5120, 366.21, 488.28, 587.65], // A29, B29, C29, D29
  [10240, 292.97, 390.63, 550], // A30, B30, C30, D30
  [25600, 244.14, 341.8, 510], // A31, B31, C31, D31
  [51200, 195.31, 195.31, 470], // A32, B32, C32, D32
];
function get_compared_costs(data: number) {
  let result = {
    splunk_val: 0,
    splunk_cloud_val: 0,
    azure_val: 0,
  };
  /*
  =IF(
    A5<Lookups!A27,A5*Lookups!B26,
    IF(
      A5<Lookups!A28,A5*Lookups!B27,
      IF(
        A5<Lookups!A29,A5*Lookups!B28,IF(
          A5<Lookups!A30,A5*Lookups!B29,
          IF(
            A5<Lookups!A31,A5*Lookups!B30,
            IF(
              A5<Lookups!A32,A5*Lookups!B31,A5*Lookups!B32
            )
          )
        )
      )
    )
  )
   */
  COMPARED_COSTS.every(([gb_per_year, splunk, splunk_cloud, azure]) => {
    if (data <= gb_per_year) {
      result = {
        splunk_val: formattedNumber(data * splunk),
        splunk_cloud_val: formattedNumber(data * splunk_cloud),
        azure_val: formattedNumber(data * azure),
      };
      return false;
    }
  });

  return result;
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
  get_compared_costs,
};
