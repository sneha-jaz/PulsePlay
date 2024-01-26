import { cn } from "@/lib/utils";

const Cards = ({ imageUrl, title, artist })  => {
  return (
        <div className="m-2 w-40 h-60 bg-white">
            <div className="relative h-40 w-40 rounded-l shadow-lg overflow-hidden">
                <img className={cn('w-full h-full')} src={imageUrl} alt="Cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20" />
            </div>
            <div className="relative h-20 bottom-0 left-0 items-center overflow-hidden">
                <div className="mt-2 h-1/3">
                    <p className="text-s font-semibold text-gray-800 overflow-hidden whitespace-nowrap overflow-ellipsis">{title}</p>
                    <p className="text-xs text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis">{artist}</p>
                </div>        
            </div>
        </div>
  );
};

export default Cards;
