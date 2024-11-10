export default function SearchForm(){
    return(
      <div>
        <form className="grid md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="search" className="font-semibold font-sans">Search</label>
                <input id="search" type="text" placeholder="Search" className="py-2 outline-none border-b border-b-slate-100"/>
            </div>
            
            <div className="flex flex-col gap-4 mr-3">
                <label htmlFor="destination" className="font-semibold font-sans">Destination</label>
                <select id="destination" className="py-2 outline-none border-b border-b-slate-100">
                    <option value="pakistan">Pakistan</option>
                    <option value="india">India</option>
                    <option value="dubai">Dubai</option>
                    <option value="america">America</option>
                    <option value="japan">Japan</option>
                </select>
                </div>
            <div className="flex flex-col gap-4 ml-1">
                <label htmlFor="duration" className="font-semibold font-sans">Duration</label>
                <select id="duration" className="py-2 outline-none border-b border-b-slate-100">
                    <option value="1 Day">1 Day</option>
                    <option value="2 Day">2 Day</option>
                    <option value="2-4 Day">2-4 Day</option>
                    <option value="1 Week">1 Week</option>
                </select>
                </div>

                <button className="bg-pink-500 text-white py-4 rounded-md font-semibold font-sans">Search</button>
        </form>
      </div>
    )
  }