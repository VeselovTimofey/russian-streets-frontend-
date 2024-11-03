import { useEffect } from 'react';

import Intro from '../components/Intro.tsx';
import Agency from '../components/Agency.tsx';
import Members from '../components/Members.tsx';
import AboutUs from '../components/AboutUs.tsx';
import OurOffers from '../components/OurOffers.tsx';
import OurPossibilities from '../components/OurPossibilities.tsx';
import UpcomingEvents from '../components/UpcomingEvents.tsx';
import LastNews from '../components/LastNews.tsx';
import Disciplines from '../components/Disciplines.tsx';
import Registration from '../components/Registration.tsx';
import { useAppDispatch, useAppSelector } from '../service/hooks/hooks';
import { aboutUsAction } from '../service/actions/aboutUsAction';

function Main() {
  const dispatch = useAppDispatch();
  const aboutUs = useAppSelector(
    state => state.aboutUs,
  );
  useEffect(() => {
    dispatch(aboutUsAction(aboutUs));
  }, []);

  return (
    <main className='main'>
      <Intro />
      <Agency />
      <Disciplines />
      <Members />
      <AboutUs />
      <OurOffers />
      <OurPossibilities />
      <UpcomingEvents />
      <LastNews isSixNews={true} />
      <Registration />
    </main>
  );
}

export default Main;
