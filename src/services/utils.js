export function handle(promise) {
  return promise
    .then((data) => [data, undefined])
    .catch((error) => Promise.resolve([undefined, error]));
}

export function isEmptyValues(value) {
  return (
    value === undefined ||
    value === null ||
    value === NaN || // eslint-disable-line use-isnan
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length() === 0)
  );
}
