import { Link } from 'react-router-dom';

import NewsCard from './elements/NewsCard.tsx';
import { BUTTON_CLASS } from '../utils/constans/buttonConstans';
import { useEffect } from 'react';
import { lastNewsAction } from '../service/actions/newsAction';
import { useAppDispatch, useAppSelector } from '../service/hooks/hooks';

type InputProps = {
  isSixNews: boolean,
};

function LastNews(props: InputProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(lastNewsAction());
  }, [dispatch]);

  const lastNewsData = useAppSelector(
    state => state.news.lastNews,
  );

  return (
    <article className="last-news">
      <h1 className="title-font title-font_regular title-font_size_medium">{props.isSixNews ? 'Новости' : 'Последние новости'}</h1>
      <Link className={BUTTON_CLASS.button_hollow_size_small + ' upcoming-events__link'} to="/">Смотреть всё</Link>
      <div className="last-news__cards">
        {Object.keys(lastNewsData).map((keyName, i) => (
          (i < 3 || props.isSixNews) && 
          <NewsCard
            id={Number(lastNewsData[i].id)}
            name={lastNewsData[i].name}
            image_url={lastNewsData[i].imageUrl}
            description={lastNewsData[i].description}
          />
        ))}
      </div>
    </article>
  );
}

export default LastNews;