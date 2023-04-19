import { useState } from "react";
import { data } from "./data";
import WorkersTable from "./WorkersTable";

export default function Workers() {
  const [workers, setWorkers] = useState(data);
  return (
    <>
      <WorkersTable workersData={workers} />
    </>
  );
}
