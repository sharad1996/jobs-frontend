import { decorate } from "mobx"; // observable, action, computed,
import FiltersService from "./FiltersService";

class FiltersStore {
  // queries = [];
  // code = "";
  // emptyQueryObject = { id: "", name: "", code: { code: "" } };
  // currentQuery = Object.assign({}, this.emptyQueryObject);
  FiltersService = new FiltersService();
  // emptyResponseObject = { results: [], output: "Output", error: "Error" };
  // response = Object.assign({}, this.emptyResponseObject);
  // isLoading = true;
  // //   constructor() {}
  // getQueries = async () => {
  //   this.queries = await this.queryService.getAllQueries();
  // };
  // getQueryById = (id) => {
  //   const filtered = this.queries.filter((item) => item.id === id);
  //   return filtered.length > 0 ? filtered[0] : null;
  // };
  // selectFirstQueryIfNotChosen = () => {
  //   if (this.currentQuery.id === "" && this.queries.length > 0) {
  //     this.setCurrentQuery(this.queries[0].id);
  //   }
  // };
  // executeCurrentQuery = async () => {
  //   this.isLoading = true;
  //   await this.executeQuery(this.currentQuery.code.code);
  //   this.isLoading = false;
  // };
  // executeQuery = async (codeValue) => {
  //   // console.log("executeQuery", codeValue);
  //   // this.response = mockExecute; // for now, just mock
  //   this.response = await this.queryService.execute({ code: codeValue });
  // };
  // setCurrentQuery = async (id) => {
  //   this.isLoading = true;
  //   const queryDetails = await this.queryService.getQuery(id);
  //   this.currentQuery = queryDetails;
  //   this.isLoading = false;
  //   // console.log("setCurrentQuery", this.currentQuery);
  // };
  // refreshCurrentQuery = async () => {
  //   if (!this.currentQuery.id) return;
  //   this.isLoading = true;
  //   await this.setCurrentQuery(this.currentQuery.id);
  //   this.isLoading = false;
  // };
  // newQuery = async () => {
  //   this.currentQuery = Object.assign({}, this.emptyQueryObject);
  // };
  // saveCurrentQuery = async () => {
  //   const id = this.currentQuery.id;
  //   this.isLoading = true;
  //   const queryDetails = await this.queryService.upsertQuery(id, {
  //     name: this.currentQuery.name,
  //     code: this.currentQuery.code.code,
  //   });
  //   this.currentQuery = queryDetails;
  //   if (!id) this.queries = await this.queryService.getAllQueries();
  //   this.isLoading = false;
  // };
  // deleteQuery = async () => {
  //   const id = this.currentQuery.id;
  //   this.isLoading = true;
  //   await this.queryService.deleteQuery(id);
  //   this.currentQuery = Object.assign({}, this.emptyQueryObject);
  //   this.getQueries();
  //   this.selectFirstQueryIfNotChosen();
  //   this.isLoading = false;
  // };
  // setCode = (codeValue) => {
  //   this.currentQuery.code.code = codeValue;
  // };
  // setName = (nameValue) => {
  //   this.currentQuery.name = nameValue;
  // };
  // setIsLoading = (value) => {
  //   this.isLoading = Boolean(value);
  // };
  // get currentId() {
  //   return this.currentQuery ? this.currentQuery.id : null;
  // }
  // get isNewMode() {
  //   return !Boolean(this.currentQuery.id);
  // }
  // get results() {
  //   return this.response.results.length ? this.response.results : [];
  // }
  // clearResults = () => {
  //   this.response = Object.assign({}, this.emptyResponseObject);
  // };
  // get hasResultsData() {
  //   return Boolean(this.csvData.length);
  // }
  // get isNameValid() {
  //   return Boolean(this.currentQuery.name);
  // }
  // get csvData() {
  //   /*
  //       format to download
  //       const csvData = [
  //         ["firstname", "lastname", "email"],
  //         ["Ahmed", "Tomi", "ah@smthing.co.com"],
  //         ["Raed", "Labes", "rl@smthing.co.com"],
  //         ["Yezzi", "Min l3b", "ymin@cocococo.com"],
  //       ];
  //   */
  //   if (this.response.results.length) {
  //     return [
  //       Object.keys(this.results[0]),
  //       ...this.results.map((item) => Object.values(item)),
  //     ];
  //   } else {
  //     return [];
  //   }
  // }
  // get output() {
  //   return this.response.output;
  // }
  // get error() {
  //   return this.response.error;
  // }
}
decorate(FiltersStore, {
  // queries: observable,
  // currentQuery: observable,
  // currentId: computed,
  // newQuery: action,
  // saveCurrentQuery: action,
  // deleteQuery: action,
  // isNewMode: computed,
  // code: observable,
  // getQueries: action,
  // setCurrentQuery: action,
  // refreshCurrentQuery: action,
  // setCode: action,
  // setName: action,
  // isNameValid: computed,
  // selectFirstQueryIfNotChosen: action,
  // executeCurrentQuery: action,
  // response: observable,
  // results: computed,
  // clearResults: action,
  // hasResultsData: computed,
  // csvData: computed,
  // output: computed,
  // error: computed,
  // isLoading: observable,
  // setIsLoading: action,
});
export default new FiltersStore();

// const addAutonumber = (arr) => {
//   let autonum = 1;
//   return arr.map((item) => {
//     Object.assign(item, { idx: autonum++ });
//     return item;
//   });
// };
