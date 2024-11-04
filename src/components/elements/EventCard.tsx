import MoreLink from './MoreLink.tsx';

type InputProps = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  start_date: string | undefined;
  place: string;
};

function EventCard(props: InputProps) {
  return (
    <article className="event-card" key={props.id}>
      <img className="event-card__image" src={props.image_url} />
      <div className="event-card__info">
        <p className="text-font text-font_regular text-font_size_medium">{props.start_date}</p>
        <p className="text-font text-font_regular text-font_size_medium">{props.place}</p>
      </div>
      <h2 className="event-card__title title-font title-font_regular title-font_size_small">{props.name}</h2>
      <p className="text-font text-font_regular text-font_size_big">{props.description}</p>
      <MoreLink to="/" />
    </article>
  );
}

export default EventCard;