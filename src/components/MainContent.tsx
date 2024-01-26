import MainList from './MusicList';

const MainContent = () => {
    return (
        <div className="w-9/12 text-gray-800">
            <div className="mt-6 ml-6 text-xl font-semibold">Welcome to Pulse Play!</div>
            <div className="p-4 text-l font-medium">
                <p className="p-2">Recommended List</p>
                <MainList /> 
                <p className="p-2">My List</p>
                <MainList />
            </div>
        </div>
    );
}

export default MainContent;