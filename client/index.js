// https://github.com/vercel/swr/issues/345 -_____________-
// cannot pass deep values as params, I decided to have this format [url, 'limit', 100, key, value]
import chunk from 'lodash.chunk';

export const fetcher = (...props) => {
  const [url, ...params] = props;
  const parsedURL = new URL(`${process.env.BASE_URL}${url}.json`);

  const paramsKeys = chunk(params, 2);
  paramsKeys.forEach(([key, value]) => {
    if (key && value) {
      parsedURL.searchParams.append(key, value);
    }
  });

  return fetch(parsedURL).then(res => {
    return res.json();
  });
};

export const swrConfig = {
  fetcher,
  suspense: true
};
