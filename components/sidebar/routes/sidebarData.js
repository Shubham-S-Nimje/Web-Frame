import { TbDashboard } from "react-icons/tb";
import {
  MdContactPage,
  MdMarkEmailUnread,
  MdNavigateNext,
} from "react-icons/md";
import { AiFillWechat, AiOutlineAppstore, AiTwotoneShop } from "react-icons/ai";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { RiSettings5Fill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";

const routes = [
  {
    path: "/",
    icon: <TbDashboard className="mr-2 text-2xl text-gray-600" />,
    name: "Dashboard",
  },
  {
    path: "/", // url
    icon: <MdMarkEmailUnread className="mr-2 text-2xl text-gray-600" />, // icon component
    name: "Email",
    messages: 10,
    submenu: <BiChevronDown className="mr-2 text-2xl text-[#7879F1]" />, // name that appear in Sidebar
  },
  {
    path: "/", // url
    icon: <AiFillWechat className="mr-2 text-2xl text-[#7879F1] " />, // icon component
    name: "Chat", // name that appear in Sidebar
  },
  {
    path: "/", // url
    icon: <AiOutlineAppstore className="mr-2 text-2xl text-[#6418C3] " />, // icon component
    name: "Kanban",
    submenu: <MdNavigateNext className="mr-2 text-2xl text-[#7879F1] " />, // name that appear in Sidebar
  },
  {
    path: "/", // url
    icon: <MdContactPage className="mr-2 text-2xl text-[#7879F1] " />, // icon component
    name: "Contact",
    notification: "New", // name that appear in Sidebar
  },
  {
    path: "/", // url
    icon: <BsFillCalendarFill className="mr-2 text-2xl text-[#7879F1] " />, // icon component
    name: "Calender", // name that appear in Sidebar
  },

  {
    path: "/", //no url needed as this has submenu
    icon: <FaUsersRectangle className="mr-2 text-2xl  text-gray-600" />, // icon component
    name: "Courses",
    submenu: <MdNavigateNext className="mr-2 text-2xl text-[#7879F1]" />,
  },
  {
    path: "/", //no url needed as this has submenu
    icon: <AiTwotoneShop className="mr-2 text-2xl text-gray-600" />, // icon component
    name: "Shop",
  },
  {
    path: "/", //no url needed as this has submenu
    icon: <FaFileInvoiceDollar className="mr-2 text-2xl text-[#6418C3]" />, // icon component
    name: "Invoice",
    submenu: <MdNavigateNext className="mr-2 text-2xl text-[#7879F1]" />,
  },
  {
    path: "/", //no url needed as this has submenu
    icon: <RiSettings5Fill className="mr-2 text-2xl text-[#6418C3]" />, // icon component
    name: "Setting",
  },
];

export default routes;
