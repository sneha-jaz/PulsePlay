import { Slider } from './ui/slider';
import MainContent from './MainContent';
import LeftNavBar from './LeftNavBar';

const MusicFooter = () => {
  return (
    <>
    <div className="fixed bottom-0 w-full bg-dark-blue text-gray-800 shadow-md bg-opacity-30 p-4">
    <div className="flex items-center justify-between">
        </div>  
      <div className="flex items-center">
        <span className="mr-2 text-xs ml-2">0:00</span>
        <Slider />
        <span className="text-xs ml-2">6:36</span>
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="src/assets/shershah.jpeg" alt="Music Icon" className="w-16 h-16 mr-4 rounded-full" />
          <div>
            <h4 className="font-medium text-xl pb-1">Raataan Lambiyan</h4>
            <p className="text-xs">Asees Kaur, Jubin Nautiyal, and Tanishk Bagchi</p>
          </div>
        </div>
      </div>
    </div>
    </>   
  );
};

function HomePage() {
  return (
    <div className='flex h-screen'>
        <LeftNavBar />
        <MainContent />
        <MusicFooter />
    </div>
  );
}

export default HomePage;
