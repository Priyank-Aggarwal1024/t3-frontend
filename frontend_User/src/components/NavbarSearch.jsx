import SearchPage from "./SearchPage";
import { RxCross2 } from "react-icons/rx";

function NavbarSearch({ setShowSearchPage }) {
  return (
    <>
      <div className="fixed top-0 left-0 z-[20] w-screen h-screen backdrop-blur-md bg-opacity-80 flex justify-center items-center search-page">
        <div className="sm:w-[90%] sm:h-[90%] w-full h-full dark:bg-black bg-white overflow-y-auto relative">
          <RxCross2
            className="sticky z-[20] top-4 ml-auto text-black dark:text-white xl:text-4xl text-3xl cursor-pointer"
            onClick={() => setShowSearchPage(false)}
          />
          <SearchPage setShowSearchPage={setShowSearchPage} />
        </div>
      </div>
    </>
  );
}

export default NavbarSearch;
