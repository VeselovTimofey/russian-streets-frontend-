import CallForRegistration from './elements/CallForRegistration.tsx';
import OurPartners from './elements/OurPartners.tsx';
import skateBoard from '../images/skateBoard.png';
import snowBoarder from '../images/snowBoarder.png';

function OurPossibilities() {
  return (
    <section className="our-possibilities">
      <CallForRegistration />
      <img className="our-possibilities__element" src={skateBoard} />
      <img className="our-possibilities__element" src={snowBoarder} />
      <OurPartners />
    </section>
  );
}

export default OurPossibilities;