const LookingForComponent = ({lookingForData, lookingFor, handleLookingFor}) => {
  console.log(lookingFor);
    return(
      <div className="flex items-center mt-2">
        {lookingForData.map((item, index) => (
          <div key={index} onClick={() => handleLookingFor(item)} className={lookingFor === item ? "bg-blue-500 text-white font-medium cursor-pointer rounded-full p-1 px-2 mr-1" : "cursor-pointer hover:bg-blue-50 rounded-full p-1 px-2 mr-1"}>
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>
    );
}

export default LookingForComponent;