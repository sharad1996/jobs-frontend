import "./Jobs.scss";
import React from "react";
import { observer } from "mobx-react";
import Alert from "@material-ui/lab/Alert";
import JobsStore from "./JobsStore";
import Filters from "./Filters";
import { Job, JobSkeleton } from "./Job";

const JobList = () => {
  React.useEffect(() => {
    JobsStore.getJobs();
  }, []);

  return (
    <>
      <Filters />
      <aside id="sidebar-left" />
      <article id="main-content">
        <div className="jobs-list">
          {(() => {
            if (!JobsStore.loadingStore) return "";
            if (JobsStore.loadingStore.showContentPlaceholder)
              return (
                <>
                  <JobSkeleton />
                  <JobSkeleton />
                  <JobSkeleton />
                  <JobSkeleton />
                  <JobSkeleton />
                </>
              );
            if (JobsStore.loadingStore.isError)
              return (
                <Alert variant="outlined" severity="error">
                  Error while fetching data
                </Alert>
              );
            return JobsStore.jobs.map((job) => <Job key={job.id} job={job} />);
          })()}
        </div>
      </article>
      <aside id="sidebar-right" />
    </>
  );
};
export default observer(JobList);
