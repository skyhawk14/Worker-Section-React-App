import { axiosInstance } from "../../axios-setup/axios";
async function getAllWorkers() {
  let workersData = await axiosInstance.get("/workers");
  return workersData;
}
async function getWorker(workerId) {
  let workerData = await axiosInstance.get(`/workers/${workerId}`);
  return workerData;
}
async function createWorker(workerObj) {
  let {data} = await axiosInstance.post("/workers", workerObj);
  return data.id;
}
export { getAllWorkers, getWorker, createWorker };
