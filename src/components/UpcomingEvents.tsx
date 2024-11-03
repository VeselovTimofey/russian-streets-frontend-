import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import EventCard from './elements/EventCard.tsx';
import { BUTTON_CLASS } from '../utils/constans/buttonConstans';
import { useAppDispatch, useAppSelector } from '../service/hooks/hooks';
import { lastEventsAction } from '../service/actions/eventAction';

function UpcomingEvents() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(lastEventsAction());
  }, []);
  const events = useAppSelector(
    state => state.event.lastEvents,
  );

  return (
    <article className="upcoming-events">
      <h1 className="title-font title-font_regular title-font_size_medium">Ближайшие события</h1>
      <Link className={BUTTON_CLASS.button_hollow_size_small + ' upcoming-events__link'} to="/">Смотреть всё</Link>
      <div className="upcoming-events__cards">
        {events.map((event) => (
          <EventCard
            id={event.id}
            name={event.name}
            description={event.description}
            image_url={event.imageUrl}
            start_date={event.startDate}
            place={event.place}
          />
        ))}
      </div>
    </article>
  );
}

export default UpcomingEvents;