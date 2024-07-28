import { ReactNode } from "react";

import {
  BadgeCheckedOutlineIcon,
  BookOutlineIcon,
  ObjectsColumnOutlineIcon,
  ShieldCheckedOutlineIcon,
  UserCircleOutlineIcon,
} from "@anhthi-projects/usy-ui";
import { usePathname, useRouter } from "next/navigation";

import { DashboardSubRoute } from "@/constants/routes";

import { BrandTypography, MenuItem, MenuList } from "./sidebar.styled";

interface MenuItemProps {
  label: string;
  icon: ReactNode;
  section: string;
}

export const SideBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const renderMenuItem = ({ label, icon, section }: MenuItemProps) => {
    return (
      <MenuItem
        $isActive={pathname.endsWith(section)}
        onClick={() => {
          router.push(`/dashboard/${section}`);
        }}
      >
        {icon}
        {label}
      </MenuItem>
    );
  };

  return (
    <>
      <BrandTypography>Dashboard</BrandTypography>
      <MenuList>
        {renderMenuItem({
          label: "Profile",
          icon: <UserCircleOutlineIcon />,
          section: DashboardSubRoute.PROFILE,
        })}
        {renderMenuItem({
          label: "Articles",
          icon: <BookOutlineIcon />,
          section: DashboardSubRoute.ARTICLES,
        })}
        {renderMenuItem({
          label: "Portfolios",
          icon: <ObjectsColumnOutlineIcon />,
          section: DashboardSubRoute.PORTFOLIOS,
        })}
        {renderMenuItem({
          label: "Experience",
          icon: <BadgeCheckedOutlineIcon />,
          section: DashboardSubRoute.EXPERIENCE,
        })}
        {renderMenuItem({
          label: "Skills",
          icon: <ShieldCheckedOutlineIcon />,
          section: DashboardSubRoute.SKILLS,
        })}
      </MenuList>
    </>
  );
};