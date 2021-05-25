import { observable, action, decorate } from "mobx"; // computed
import LoadingStore from "../services/LoadingStore";
import Api from "../services/api";
import { handle } from "../services/utils";

class JobsStore {
  jobs = [];

  apiClient;

  loadingStore;

  constructor(loadingStore, api) {
    this.loadingStore = loadingStore;
    this.apiClient = api;
  }

  getJobs = async () => {
    const [jobsData, jobsErr] = await handle(this.apiClient.fetchJobs());

    if (jobsErr) {
      this.loadingStore.setFetchStatus(2);
      return;
    }
    this.jobs = jobsData;
    this.loadingStore.setFetchStatus(3);
  };
}
decorate(JobsStore, {
  jobs: observable,
  loaderStore: observable,
  getJobs: action,
});
export default new JobsStore(new LoadingStore(), new Api());
