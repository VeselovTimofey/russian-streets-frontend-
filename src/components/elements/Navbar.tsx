import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../service/hooks/hooks';
import { disciplineContent, disciplinesNames } from '../../service/actions/disciplineAction';
import { DEFAULT_DISCIPLINE } from '../../utils/constans/defaultDisciplineConstans';

function Navbar() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(disciplinesNames());
  }, []);

  const disciplines = useAppSelector(
    state => state.discipline.disciplines,
  );
  const onDisciplinesChange: React.MouseEventHandler<HTMLButtonElement> = (e) => dispatch(
    disciplineContent(disciplines.find(discipline => discipline.name === (e.target as HTMLButtonElement).name) || DEFAULT_DISCIPLINE),
  );

  return (
    <section className="disciplines__list">
      {disciplines.map(discipline => (
        <button
          className=
          {
            discipline.isCurrentDiscipline
              ? 'disciplines__element disciplines__element_active text-font text-font_regular text-font_size_big' 
              : 'disciplines__element text-font text-font_regular text-font_size_big'
          }
          onClick={onDisciplinesChange}
          name={discipline.name}
        >
          {discipline.name}
        </button>
      ))}
    </section>
  );
}

export default Navbar;
