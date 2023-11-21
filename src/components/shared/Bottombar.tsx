import { bottombarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";


export const Bottombar = () => {
  const { pathname } = useLocation();


  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            key={`bottombar-${link.label}`}
            to={link.route}
            className={cn('flex-center flex-col gap-1 p-2 transition', {'rounded-[10px] bg-primary-500': isActive})}
            >
            <img
              src={link.imgURL}
              alt={link.label}
              width={16}
              height={16}
              className={cn({"invert-white": isActive})}
            />

            <p className="tiny-medium text-light-2">{link.label}</p>
          </Link>
        );
      })}
    </section>
  )
}