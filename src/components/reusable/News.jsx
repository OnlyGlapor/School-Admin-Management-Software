
const News = () => {
	const viewNews = () => {
	    window.open('https://frontpageafricaonline.com/news/liberia-the-american-international-school-of-monrovia-unveils-state-of-the-art-science-wing-elevating-education-for-future-innovators/', '_blank');
	}
	return(
		<div>
          <div className="p-2">
            <p className="text-sm font-semibold">Anouncements & News</p>
          </div>
          <div className="mt-2 px-2">
            <NewsItem viewNews={viewNews} />
            <NewsItem />
            <NewsItem />
          </div>
          <div className="flex justify-center mt-2 mx-2 bg-blue-100 cursor-pointer hover:bg-blue-200 p-1 rounded-md">
            <p className="text-sm text-blue-500">View more</p>
          </div>
        </div>
	);
}

export default News;

const NewsItem = ({viewNews}) => {
	return(
		<div 
		title="The MOE has order all schools to a closure because of the upcoming Presidential elections"
	    onClick={viewNews} 
	    className="flex items-start mt-2 border-t cursor-pointer hover:bg-gray-200 p-2 rounded">
	      <div className="w-16 h-10 bg-blue-500 rounded-md">
	        <img />
	      </div>
	      <div className="ml-2">
	        <p className="text-xs">The MOE has order all schools to a closure...</p>
	        <p className="text-xs">Posted 20 mins ago</p>
	      </div>
	    </div>
	);
}