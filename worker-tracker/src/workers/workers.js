import { useState } from "react";
import { data } from "./data";
import WorkersGrid from "./workers-grid";
import WorkersTable from "./WorkersTable";

export default function Workers() {
  const [workers, setWorkers] = useState(data);
  return (
    <>
      <WorkersGrid />
      <WorkersTable workersData={workers} />
    </>
  );
}
