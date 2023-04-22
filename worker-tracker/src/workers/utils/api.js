import { axiosInstance } from "../../axios-setup/axios";
// for getting all the workers
// ToDo: handle try catch
async function getAllWorkers() {
  try {
    let workersData = await axiosInstance.get("/workers");
    return workersData;
  } catch (err) {
    console.log(err);
  }
}
// for getting the worker with worker id
// ToDo: handle try catch
async function getWorker(workerId) {
  let workerData = await axiosInstance.get(`/workers/${workerId}`);
  return workerData;
}
// for creating worker Object
// // ToDo: handle try catch
async function createWorker(workerObj) {
  let { data } = await axiosInstance.post("/workers", workerObj);
  return data.id;
}
export { getAllWorkers, getWorker, createWorker };
