import { useAppSelector } from '../service/hooks/hooks';
import MemberCard from './elements/MemberCard.tsx';

function Members() {

  const ourMember = useAppSelector(
    state => state.aboutUs.aboutUs.ourMember,
  );

  return (
    <section className="members section section_grid-column">
      <h1 className="members__title title-font title-font_regular title-font_size_medium">Наши участники</h1>
      {ourMember.map((member) => {
        return (
          <MemberCard
            key={member.id}
            imageurl={member.imageUrl}
            profession={member.role}
            name={member.name}
            description={member.description}
          />
        );
      })}
    </section>
  );
}

export default Members;