import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ArticleType} from '../../types/ArticleType';

export interface ArticleState {
  news: ArticleType[];
  saved: ArticleType[];
}

const initialState = {news: [], saved: []} as ArticleState;

const articleReducer = createSlice({
  name: 'article',
  initialState,
  reducers: {
    getNews(state, action) {
      return {...state, news: action.payload.results};
    },
    savedNews(state, action) {
      return {...state, saved: [...state.saved, action.payload]};
    },
    removeNews(state, action) {
      return {
        ...state,
        saved: state.saved.filter(s => s.title === action.payload),
      };
    },
  },
});

export const {getNews, savedNews, removeNews} = articleReducer.actions;
export default articleReducer.reducer;
