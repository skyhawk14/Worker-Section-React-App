import { axiosInstance } from "../../axios-setup/axios";
import { workerSlice } from "../../store/slices/worker-slice";
async function getAllWorkers() {
  try {
    let workersData = await axiosInstance.get("/workers");
    return workersData;
  } catch (err) {
    console.log(err);
  }
}
async function getWorker(workerId) {
  let workerData = await axiosInstance.get(`/workers/${workerId}`);
  return workerData;
}
async function createWorker(workerObj) {
  let { data } = await axiosInstance.post("/workers", workerObj);
  return data.id;
}
export { getAllWorkers, getWorker, createWorker };
