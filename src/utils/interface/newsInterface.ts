export interface INews {
  id: string,
  name: string,
  imageUrl: string,
  description: string,
  pubDate?: string,
}

export interface INewsState {
  lastNews: INews[],
  pageNews: INews[],
  currentNews: INews | undefined,
  savedNewsId: string[],
  news: INews[],
  isLoading: boolean,
  error: string | undefined,
}

export interface IAnswerNewsAction {
  id?: string,
  news?: INews,
  alreadyInStore: boolean,
}