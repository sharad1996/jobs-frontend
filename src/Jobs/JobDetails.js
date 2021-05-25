import React from "react";
import Markdown from "react-markdown";
import { useParams, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";
import LoadingStore from "../services/LoadingStore";
import Api from "../services/api";
import { timeAgo, JobTags } from "./utils";
import { isEmptyValues } from "../services/utils";
import ApplyToJobModal from "./ApplyToJobModal";

const loadingStore = new LoadingStore();

export default function () {
  const [job, setJob] = React.useState({ company: {}, culture_values: [], tags: [] });
  const [id] = React.useState(useParams().id);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAlert, setIsAlert] = React.useState(false);

  const makeCompany = (name) => (!name ? "" : `@${name}`);
  const jobImageStyle = () => {
    return {
      backgroundImage: `url("${job.company.logo_url}")`,
    };
  };

  const history = useHistory();

  function gotoMain() {
    history.push(`/`);
  }

  const handleApplyJob = () => {
    setIsOpen(true)
  };

  const handleSubmit = (values) => {
    const apiClient = new Api();

    apiClient
      .applyToJob(id, values)
      .then((data) => {
        setIsAlert(true);
        setIsOpen(false)
      })
      .catch((error) => {
        console.log(error)
        setIsOpen(false)
      });
  }

  React.useEffect(() => {
    const apiClient = new Api();

    apiClient
      .fetchJob(id)
      .then((jobData) => {
        loadingStore.setFetchStatus(3);
        setJob(jobData);
      })
      .catch(() => {
        loadingStore.setFetchStatus(2);
      });
  }, [id]);
  return (
    <>
      <Box component="div" id="top-bar" className="job-details-topbar">
        {isAlert && <Alert onClose={() => setIsAlert(false)} severity="success">Success fully applied</Alert>}
        <Breadcrumbs aria-label="navigation" className="navigation-bar">
          <Typography color="textPrimary" onClick={gotoMain} className="navigation-link">
            Jobs
          </Typography>

          <Typography color="textPrimary">{job.name}</Typography>
        </Breadcrumbs>
        <h2 className="job-details-name">{job.name}</h2>
        <h3 className="job-details-time-agot">{timeAgo(job.addedAt)}</h3>
        <h3 className="job-details-company">{makeCompany(job.company.name)}</h3>
        <div className="job-details-logo" style={jobImageStyle()} />
        <div className="job-details-tags job-details-tags-tags">
          {isEmptyValues(job.tags) ? "" : <JobTags type="tags" tags={job.tags} />}
        </div>
        <div className="job-details-tags job-details-tags-values">
          {isEmptyValues(job.culture_values) ? (
            ""
          ) : (
            <JobTags type="values" tags={job.culture_values} />
          )}
        </div>
        <div className="job-details-apply">
          <Button
            variant="contained"
            color="primary"
            onClick={handleApplyJob}
            disableRipple
            disableElevation
          >
            Apply to Position
          </Button>
        </div>
      </Box>
      <aside id="sidebar-left" />
      <article id="main-content">
        <div className="jobs-details">
          {(() => {
            if (loadingStore.showContentPlaceholder) return <JobDetailsSkeleton />;
            if (loadingStore.isError)
              return (
                <Alert variant="outlined" severity="error">
                  Error while fetching job&apos;s details
                </Alert>
              );
            return (
              <div>
                <Markdown source={job.description} />
              </div>
            );
          })()}
        </div>
      </article>
      <aside id="sidebar-right" />
      <ApplyToJobModal
        open={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={handleSubmit}
      />
    </>
  );
}

function JobDetailsSkeleton() {
  return (
    <div className="job-skeleton">
      <Skeleton animation="wave" height="75px" width="50px" />
      <Skeleton animation="wave" height="50px" />
      <Skeleton animation="wave" height="50px" />
      <Skeleton animation="wave" height="50px" />
      <Skeleton animation="wave" height="50px" />
      <Skeleton animation="wave" height="50px" />
    </div>
  );
}
