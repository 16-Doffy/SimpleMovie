
import SearchWithDebounce from "../Components/present/SearchWithDebounce";
import SearchWithoutDebounce from "../Components/present/SearchWithoutDebounce";


export default function DemoSearchPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        DEMO SO SÁNH SEARCH CÓ/KHÔNG DEBOUNCE
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SearchWithoutDebounce />
        <SearchWithDebounce />
      </div>

   
    </div>
  );
}