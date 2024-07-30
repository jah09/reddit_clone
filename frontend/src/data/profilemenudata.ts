import { v4 as uuidv4 } from "uuid";
import { PiTShirt } from "react-icons/pi";
import { IconType } from "react-icons/lib";
import { BsBoxArrowInRight } from "react-icons/bs";

export interface ProfileMenu {
  id: string;
  name: string;
  icon: IconType;
}
function profileMenuData() {
  const menu: ProfileMenu[] = [
    {
      id: uuidv4(),
      name: "Edit Avatar",
      icon: PiTShirt,
    },
    {
      id: uuidv4(),
      name: "Log Out",
      icon: BsBoxArrowInRight,
    },
  ];

  return menu;
}

export default profileMenuData;
