import { observable, action, computed, decorate } from "mobx";

class LoadingStore {
  fetchStatus = 0;

  setFetchStatus = (value) => {
    this.fetchStatus = Number(value);
  };

  get showContentPlaceholder() {
    return this.fetchStatus === 0 || this.fetchStatus === 1;
  }

  get isError() {
    return this.fetchStatus === 2;
  }
}
decorate(LoadingStore, {
  fetchStatus: observable,
  setFetchStatus: action,
  showContentPlaceholder: computed,
  isError: computed,
});

export default LoadingStore;
