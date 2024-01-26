import { cn } from "@/lib/utils";

const LeftNavBar = () => {
  
  const menuItems = ["Home", "Music Library", "Video Library", "Play Queue", "Playlists"];

  return (
      <div className="w-2/12 shadow-lg h-screen top-0 left-0 p-4 bg-gray-100 border-r border-gray-200" >
          <img className={cn('w-[206px] p-4')} src="src/assets/iconDark.svg" alt="Cover" />
          <div className="p-4 text-gray-800">
              <ul>
                  {menuItems.map((item, index) => (
                      <li key={index} className="py-2">
                      <button className="w-full text-left text-gray-800 rounded px-4 py-2 hover:bg-dark-blue hover:bg-opacity-10 focus:outline-none focus:bg-dark-blue focus:text-white focus:ring focus:ring-gray-100 cursor-pointer">
                          {item}
                      </button>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
};

export default LeftNavBar;