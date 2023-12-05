export type ArticleType = {
  authors: unknown[];
  body: string;
  dataType: string;
  date: string;
  dateTime: string;
  dateTimePub: string;
  eventUri: string | null;
  image: string;
  isDuplicate: boolean;
  lang: string;
  relevance: number;
  sentiment: number;
  sim: number;
  source: {
    dataType: string;
    title: string;
    uri: string;
  };
  time: string;
  title: string;
  uri: string;
  url: string;
  wgt: number;
};
