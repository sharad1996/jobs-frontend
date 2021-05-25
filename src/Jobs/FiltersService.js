// import Encoder from "./Encoder";

class FiltersService {
  // #get = async ({ path, urlParams }) => {
  //   const options = {
  //     method: "GET",
  //   };
  //   const query = `${webApiUrl}${path}${padQuestionMark(urlParams)}`;
  //   const request = new Request(query, options);
  //   const response = await fetch(request);
  //   return response.json();
  // };
  // getAllQueries = async () => {
  //   return await this.#get({ path: "query/" });
  // };
  // getQuery = async (id) => {
  //   return await this.#get({ path: `query/${id}` });
  // };
  // #post = async ({ path, urlParams = "", formData } = {}) => {
  //   const options = {
  //     method: "POST",
  //     body: formData,
  //     redirect: "follow",
  //   };
  //   const query = `${webApiUrl}${path}${padQuestionMark(urlParams)}`;
  //   const request = new Request(query, options);
  //   const response = await fetch(request);
  //   return await response.json();
  // };
  // upsertQuery = async (id = "", { name, code } = {}) => {
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("code", code);
  //   if (id !== "") {
  //     return await this.#post({ path: `query/${id}/`, formData });
  //   } else {
  //     return await this.#post({ path: `query/`, formData });
  //   }
  // };
  // execute = async ({ code } = {}) => {
  //   const formData = new FormData();
  //   formData.append("code", Encoder.encodeQuery(code));
  //   const response = await this.#post({ path: `query/execute/`, formData });
  //   return response;
  // };
  // /*put = async (model) => {
  //   const headers = new Headers();
  //   headers.append("Content-Type", "application/json");
  //   var options = {
  //     method: "PUT",
  //     headers,
  //     body: JSON.stringify(model),
  //   };
  //   const request = new Request(webApiUrl, options);
  //   const response = await fetch(request);
  //   return response;
  // };*/
  // #delete = async ({ path, urlParams }) => {
  //   const options = {
  //     method: "DELETE",
  //     redirect: "follow",
  //   };
  //   const query = `${webApiUrl}${path}${padQuestionMark(urlParams)}`;
  //   const request = new Request(query, options);
  //   return await fetch(request);
  // };
  // deleteQuery = async (id) => {
  //   return await this.#delete({ path: `query/${id}/` });
  // };
}
export default FiltersService;
