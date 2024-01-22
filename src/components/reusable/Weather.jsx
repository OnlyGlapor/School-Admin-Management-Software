import { BsSun } from 'react-icons/bs';
import { GoLinkExternal } from 'react-icons/go';

const Weather = () => {
	return(
		<div className="mt-5 rounded-md p-2">
          <p className="text-sm font-semibold">Weather Status</p>
          <div className="p-3 bg-blue-300 rounded-md mt-2 text-white">
            <div className="flex items-center justify-between">
              <div className="rounded-md">
                <BsSun size={70} />
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold">35</p>
                <p className="text-xs">Fahrenheit</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="text-xs font-medium">March</p>
                <p className="text-xs font-medium">Monrovia, Liberia</p>
              </div>
              <div>
                <p className="text-sm font-medium">Sunny</p>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden mt-2 relative cursor-pointer">
              <img src="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=" />
              <div className="w-full h-full absolute top-0 left-0 hover:bg-black hover:bg-opacity-20 rounded-sm z-10 flex items-center justify-center">
                <GoLinkExternal size={25} />
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm">Wind</p><p className="text-sm">11kmph</p>
            </div>
            <div className="flex items-center justify-between my-2">
              <p className="text-sm">Prep</p><p className="text-sm">22%</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">35</p><p className="text-sm">Maroll</p>
            </div>
          </div>
        </div>
	);
}

export default Weather;