import { useEffect } from 'react';

import MoreLink from './MoreLink.tsx';

import { useAppDispatch, useAppSelector } from '../../service/hooks/hooks';
import { disciplineContent } from '../../service/actions/disciplineAction';

function Contents() {
  const dispatch = useAppDispatch();

  const disciplines = useAppSelector(
    state => state.discipline.disciplines,
  );
  const { name, description, imagesUrl } = useAppSelector(
    (state) => state.discipline.currentDiscipline,
  );

  useEffect(() => {
    dispatch(disciplineContent(disciplines[0]));
  }, [disciplines[0].name]);

  return (
    <div className="disciplines__content">
      <img className="disciplines__image" src={imagesUrl[0]} alt={name} />
      <h2 className="title-font title-font_bold title-font_size_small">{name}</h2>
      <p className="text-font text-font_regular text-font_size_big">{description}</p>
      <MoreLink to="/" />
    </div>
  );
}

export default Contents;
