import React from 'react';
import CardProvider from '../Card/CardProvider/CardProvider';
import { FlipCard } from '../Card/FlipCard';
import Loading from '../Loading/Loading';
import Head from '../Helper/Head';
import { IGetGroups } from '../../Interfaces/Interfaces.api';
import { Mock_groups } from '../../DataMock/Groups';

const Home = () => {
  const [groupRaw, setGroupRaw] = React.useState<IGetGroups[]>([]);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    try{
      setLoading(true);
      setGroupRaw(Mock_groups)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Head title="Home" description="Homepage" />
      {loading ? (
        <CardProvider>
          <Loading />
        </CardProvider>
      ) : (
        <div className='animeLeft'>
          <div>
            <div className="self-start w-full flex items-center justify-end m-4 sm:m-2">
            </div>
          </div>
          <CardProvider>
            {groupRaw.map(group => {
              return <FlipCard.Root key={`${group.id}`} group={group} />;
            })}
          </CardProvider>
        </div>
      )}
    </>
  );
};

export default Home;
