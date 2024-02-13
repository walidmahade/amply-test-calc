import { formattedNumber } from "./helpers-functions";
import { COMPRESSION_RATE, get_credits_per_year, get_total_storage, get_warehouse_data } from "./lookups";

console.log("Calculator script loaded ");

/**
 * fixed values based on notion doc instructions
 * comment includes the cell reference from Google sheet
 */
const managed_instance = true; // B6
const hosted_region = "us"; // B16
const credit_price = 3; // B17
const margin = 0.3; // B22 -> 30%

// user input values
let data_ingestion_per_day = 7000; // A5
let data_retention_in_days = 365; // B5

// calculated values
const data_load_service = "Snowpipe"; // B9, "Snowpipe" here is hard coded(according to Google sheet), but can be collected from input if needed.
const data_credits_per_year = get_credits_per_year(data_ingestion_per_day, data_load_service); // B9,
const [warehouse_size, warehouse_credits_per_year] = get_warehouse_data(data_ingestion_per_day); // [A11, B11]
const storage_size_on_disk_TB = ((data_ingestion_per_day * data_retention_in_days) / 1024) * (1 - COMPRESSION_RATE); // A13, =((A5*B5)/1024)*(1-Lookups!B17)
let total_compute = 0; // B18
let total_storage = 0; // B19
let anvilogic_cost = 0; // B20
let anvilogic_profit = 0; // B21
let customer_estimate = 0; // B23

// DOM elements
const $totalCompute = document.getElementById("total_compute") as HTMLSpanElement;
const $totalStorage = document.getElementById("total_storage") as HTMLSpanElement;
const $anvilogicCost = document.getElementById("anvilogic_cost") as HTMLSpanElement;

/**
 * ------------------------------------------
 * Calculations
 */
function calculate_totals() {
  // recalculate the values
  total_compute = formattedNumber(credit_price * (warehouse_credits_per_year + data_credits_per_year));
  total_storage = get_total_storage(hosted_region, storage_size_on_disk_TB);
  anvilogic_cost = formattedNumber(total_compute + total_storage); // =sum(B18+B19)
  anvilogic_profit = formattedNumber(managed_instance ? total_compute * margin : 0); // =IF(B6=FALSE(), 0, B18*B22)
  customer_estimate = anvilogic_cost + anvilogic_profit; // =sum(B20+B21)

  // update DOM elements

  // console.log(data_ingestion_per_day, data_retention_in_days);
  console.log("---------------------------------------------------------");
  console.log("Total compute: ", total_compute);
  console.log("Total storage: ", total_storage);
  console.log("Anvilogic cost: ", anvilogic_cost);
  console.log("Anvilogic profit: ", anvilogic_profit);
  console.log("Customer estimate: ", customer_estimate);
}

/**
 * ------------------------------------------
 * Event listeners
 */
// Get the input element
const dataSizeInput = document.getElementById("Data-size") as HTMLInputElement;
const dataRetentionDaysInput = document.getElementById("Number-of-days") as HTMLInputElement;

// handle the input change event
function handleInputChange(event: Event) {
  const inputElement = event.target as HTMLInputElement;

  if (inputElement.id === "Data-size") {
    data_ingestion_per_day = parseInt(inputElement.value);
  } else {
    data_retention_in_days = parseInt(inputElement.value);
  }

  // recalculate the values
  calculate_totals();
}

// Attach the event listener to the input element (can be optimized using debounce)
dataSizeInput.addEventListener("input", handleInputChange);
dataRetentionDaysInput.addEventListener("input", handleInputChange);

/**
 * ------------------------------------------
 * on load, set the initial values
 * and calculate the totals
 */
document.addEventListener("DOMContentLoaded", function () {
  dataSizeInput.value = data_ingestion_per_day.toString();
  dataRetentionDaysInput.value = data_retention_in_days.toString();
  calculate_totals();
});
// --- END onload ---
