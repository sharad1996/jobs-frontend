import "./Jobs.scss";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";
import { timeAgo, JobTags } from "./utils";
import { isEmptyValues } from "../services/utils";

function Job({ job }) {
  const { id, name, company, culture_values: values, tags, added_at: addedAt } = job;
  const jobImageStyle = {
    backgroundImage: `url("${company.logo_url}")`,
  };
  const history = useHistory();

  function gotoJob() {
    history.push(`/job/${id}`);
  }
  return (
    <div className="job" key={id} onClick={gotoJob} role="presentation">
      <div className="job-logo" style={jobImageStyle} />
      <div className="job-details">
        <div className="job-name">{name}</div>
        {/* <div className="job-description">{desciption}</div> */}
        <div className="job-company">@{company.name}</div>
      </div>
      <div className="job-tags job-tags-values">
        {isEmptyValues(values) ? "" : <JobTags type="values" tags={values} />}
      </div>
      <div className="job-tags job-tags-tags">
        {isEmptyValues(tags) ? "" : <JobTags type="tags" tags={tags} />}
      </div>
      <div className="job-time-ago">{timeAgo(addedAt)}</div>
      <div className="job-apply">
        <Button
          // size="large"
          component={Link}
          to={`/job/${id}`}
          // href={`apply/${id}`}
          // color="#556f60"
          variant="contained"
          disableElevation
          disableRipple
        >
          Details
        </Button>
      </div>
    </div>
  );
}

function JobSkeleton() {
  return (
    <div className="job-skeleton">
      <Skeleton animation="wave" height="75px" width="50px" />
      <Skeleton animation="wave" height="15px" />
      <Skeleton animation="wave" height="15px" />
      <Skeleton animation="wave" height="15px" />
    </div>
  );
}
export { Job, JobSkeleton };
/*
{
  "id": "ce8b0565-5d4c-498e-9ff3-988fc5c739e8",
  "added_at": "2020-04-21T14:41:45.128Z",
  "name": "DevOps Team Lead",
  "description": "AWS",
  "company": {
    "id": "e3e4f1a8-3d5b-43a1-a0cf-cb3bd61a2615",
    "name": "Facebook",
    "url": "https://facebook.com/careers"
    logo_url
  },
  "culture_values": [
    {
      "id": "c68f668a-733d-4857-a3e8-3dbe95dc97f7",
      "name": "Light Meetings",
      "type": "Daily Routines",
      "description": "Don't waste your time on endless meetings when no decision is being made"
    },
    {
      "id": "719022a5-cc06-4298-95f1-130ea8fcf739",
      "name": "Wears Many Hats",
      "type": "Organization Values",
      "description": "Experience many roles"
    }
  ],
  "tags": [
    {
      "id": "dcd0c905-3c4b-4926-9a8b-748bc1588072",
      "name": "IC",
      "description": "Individual contributor, non managerial role"
    },
    {
      "id": "3c44c0f8-368b-4b55-ae6f-1acecf5adeee",
      "name": "Director",
      "description": "Manage multiple teams and above"
    }
  ]
}
 */
