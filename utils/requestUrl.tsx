import {apiKey, mainApi} from './apiUrl';

type RequestType = {
  requestType: string;
};

const requestUrl = async ({requestType}: RequestType) => {
  return fetch(`http://eventregistry.org/api/v1/article/${requestType}`, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'getArticles',
      keyword: '',
      articlesPage: 1,
      lang: 'eng',
      articlesCount: 100,
      articlesSortBy: 'date',
      articlesSortByAsc: false,
      articlesArticleBodyLen: -1,
      resultType: 'articles',
      dataType: ['news', 'pr'],
      apiKey: apiKey,
    }),
  })
};

export {requestUrl};
