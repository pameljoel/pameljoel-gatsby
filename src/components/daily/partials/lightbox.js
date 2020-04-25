export const createLightBoxUrl = (day, dailies) => {
  const basePath = '/images/daily/works/';
  const { format } = dailies[day > 0 ? day - 1 : day];

  let url = null;

  if (day > 0) {
    url = `${basePath}${day}.${format}`;
  }

  return url;
};
