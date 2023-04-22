import { Link } from "react-router-dom";
import { Outlet, Form, useLoaderData } from "react-router-dom";
import CreateWorker from "../workers/create-worker";
import WorkerDetails from "../workers/worker-details";
import Workers from "../workers/workers";

export default function MainApp() {
  const { workers } = useLoaderData();
  console.log(workers);
  return (
    <div id="detail">
      <Workers />
    </div>
  );
}
