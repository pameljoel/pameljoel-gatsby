export function getData(data) {
  return new Promise((resolve, reject) => {
    resolve(data);
    reject('errore');
  });
}
export async function getDataAsync(data) {
  return data;
}
