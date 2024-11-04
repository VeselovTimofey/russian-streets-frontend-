type InputProps = {
  key: string;
  imageurl: string;
  profession: string;
  name: string;
  description: string;
};

function MemberCard(props: InputProps) {
  return (
    <section className="member-card" key={props.key}>
      <img className="member-card__image" src={props.imageurl} />
      <p className="member-card__profession text-font text-font_regular text-font_size_medium">{props.profession}</p>
      <h2 className="member-card__name title-font title-font_regular title-font_size_small">{props.name}</h2>
      <p className="member-card__description text-font text-font_regular text-font_size_big">{props.description}</p>
    </section>
  );
}

export default MemberCard;