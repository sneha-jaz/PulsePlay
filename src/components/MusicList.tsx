import { useEffect, useState } from 'react';
import Cards from './Cards';

const MusicList = () => {
    const [cardsData, setCardsData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/src/assets/RecommendedList.json');
          const data = await response.json();
          setCardsData(data);
        } catch (error) {
          console.error('Error fetching recommended list:', error);
        }
      };
      fetchData();
    }, []);
  
    return (
        <div className="flex overflow-x-auto">
            <div className=" h-[260px] flex gap-4"> 
                {cardsData.map((card, index) => (
                <Cards key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default MusicList;