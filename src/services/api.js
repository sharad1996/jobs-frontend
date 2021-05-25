const urlJoin = require("url-join");

const toJson = (r) => r.json();

const getData = (d) => {
  let toReturn = null;
  if (Object.prototype.hasOwnProperty.call(d, "data")) toReturn = Promise.resolve(d.data);
  else toReturn = Promise.reject("Error, no data");
  return toReturn;
};

class Api {
  static baseUrl;

  requestBase = {
    headers: { "content-Type": "application/json; charset=utf-8" },
  };

  constructor() {
    this.baseUrl = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_DOMAIN}/${process.env.REACT_APP_PATH}`; // eslint-disable-line max-len
  }

  #sendRequest = ({ url, method = "GET", body = null }) => {
    const requestBody = Object.assign(this.requestBase, { method });
    if (body) {
      Object.assign(requestBody, { body: JSON.stringify(body) });
    }
    return fetch(url, requestBody).then(toJson);
  };

  async fetchJobs() {
    const url = urlJoin(this.baseUrl, "/jobs");
    return this.#sendRequest({ url, method: "GET" }).then(getData);
  }

  async fetchJob(jobId) {
    const url = urlJoin(this.baseUrl, `/jobs/${jobId}`);
    return this.#sendRequest({ url, method: "GET" }).then(getData);
  }

  async postSubscriber(email) {
    const url = urlJoin(this.baseUrl, `/subscribers`);
    return this.#sendRequest({ url, method: "POST", body: { email } }).then(getData);
  }

  async applyToJob(jobId, values) {
    const url = urlJoin(this.baseUrl, `/jobs/${jobId}/apply`);
    return this.#sendRequest({ url, method: "POST", body: values }).then(getData);
  }
}

export default Api;

/*

[
  {
    added_at: "2020-04-21T14:41:45.128Z",
    name: "Fullstack Developer",
    description: "Node.js + React.js",
    company: {
      id: "e3e4f1a8-3d5b-43a1-a0cf-cb3bd61a2615",
      name: "Facebook",
      url: "https://facebook.com/careers",
    },
    culture_values: [
      {
        id: "bfe2712b-903c-4a59-9ad5-2e8344ec4411",
        name: "Diverse Team",
        type: "Organization Values",
        description: "We hire everyone as a value",
      },
      {
        id: "2076a7b6-1a0b-4be0-9f63-c712ca28569d",
        name: "BDD",
        type: "Engineering",
        description: "Behavior driven development",
      },
      {
        id: "e0d7ca41-b4fe-4734-aaf5-bc9de490aed6",
        name: "Scallable System",
        type: "Engineering",
        description: "Built for 1000x users from day one",
      },
    ],
    tags: [
      {
        id: "8d953174-c0d3-4735-a0c8-5b4b9f9986f8",
        name: "Leadership",
        description: "Managerial role",
      },
      {
        id: "24ad7834-9457-4c97-82f7-edcb3508baba",
        name: "Mid Level",
        description: "Between a junior and a senior",
      },
      {
        id: "b24f9d10-1d40-48f4-9734-3a8447c1cd04",
        name: "Senior",
        description: "Experienced",
      },
    ],
  },
];


*/
