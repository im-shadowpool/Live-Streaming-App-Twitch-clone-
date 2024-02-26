import Actions from "./Actions";
import Search from "./Search";
import Logo from "./logo";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-[49] w-full h-20 bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">

        <Logo />
        <Search />
        <Actions />
    </div>
  )
}
