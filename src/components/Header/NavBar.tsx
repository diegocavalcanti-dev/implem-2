export function NavBar() {
  return (
    <nav className="flex justify-between items-center px-6 py-2.5 h-14 bg-white shadow-[0_3px_4px_rgba(0,0,0,0.15)]">
      <div className="flex gap-14 items-center">
        <i className="ti ti-menu-2" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/18ec5520f44713c019b43158fa26f964ca198028"
          alt="Phooto logo"
          className="h-[25px] w-[84px]"
        />
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center py-0 pr-6 pl-2 h-8 rounded bg-zinc-100 w-[34px]">
          <i className="ti ti-search text-base text-amber-500" />
        </div>
        <div className="relative h-[27px] w-[29px]">
          <i className="ti ti-shopping-cart" />
          <span className="absolute top-0 right-0 text-xs bg-amber-500 rounded h-[11px] text-zinc-900 w-[11px]">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}
