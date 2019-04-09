export function getData(data) {
    return new Promise((resolve, reject) => {
        resolve(data);
        reject("errore");
    })
}