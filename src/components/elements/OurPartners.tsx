import { useAppSelector } from '../../service/hooks/hooks';

function OurPartners() {
  const partners = useAppSelector(
    state => state.aboutUs.aboutUs.partners,
  );

  return (
    <section className="partners our-possibilities__element">
      <h2 className="partners__title title-font title-font_regular title-font_size_small">Наши партнеры</h2>
      {partners.map((partner) => {
        return (
          <img className="partners__image" src={partner.imageUrl} alt={partner.name} />
        );
      })}
    </section>
  );
}

export default OurPartners;