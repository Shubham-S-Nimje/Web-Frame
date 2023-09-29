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
    textcolor: "#464366",
    icon: <TbDashboard className="mr-2 text-2xl text-[#464366]" />,
    name: "Dashboard",
  },
  {
    path: "/",
    textcolor: "#464366",
    icon: <MdMarkEmailUnread className="mr-2 text-2xl text-[#464366]" />,
    name: "Email",
    messages: 10,
    submenu: <BiChevronDown className="mr-2 text-2xl text-[#7879F1]" />,
  },
  {
    path: "/",
    textcolor: "#7879F1",
    icon: <AiFillWechat className="mr-2 text-2xl text-[#7879F1] " />,
    name: "Chat",
  },
  {
    path: "/",
    textcolor: "#6418C3",
    activesidebar: "#6418C3",
    icon: <AiOutlineAppstore className="mr-2 text-2xl text-[#6418C3] " />,
    name: "Kanban",
    submenu: <MdNavigateNext className="mr-2 text-2xl text-[#7879F1] " />,
  },
  {
    path: "/",
    textcolor: "#7879F1",
    icon: <MdContactPage className="mr-2 text-2xl text-[#7879F1] " />,
    name: "Contact",
    notification: "New",
  },
  {
    path: "/",
    textcolor: "#7879F1",
    icon: <BsFillCalendarFill className="mr-2 text-2xl text-[#7879F1] " />,
    name: "Calender",
  },
  {
    path: "/",
    textcolor: "#464366",
    icon: <FaUsersRectangle className="mr-2 text-2xl  text-gray-600" />,
    name: "Courses",
    submenu: <MdNavigateNext className="mr-2 text-2xl text-[#7879F1]" />,
  },
  {
    path: "/",
    textcolor: "#464366",
    icon: <AiTwotoneShop className="mr-2 text-2xl text-[#464366]" />,
    name: "Shop",
  },
  {
    path: "/",
    textcolor: "#7879F1",
    icon: <FaFileInvoiceDollar className="mr-2 text-2xl text-[#7879F1]" />,
    name: "Invoices",
    submenu: <MdNavigateNext className="mr-2 text-2xl text-[#7879F1]" />,
  },
  {
    path: "/",
    textcolor: "#7879F1",
    icon: <RiSettings5Fill className="mr-2 text-2xl text-[#7879F1]" />,
    name: "Settings",
  },
];

export default routes;
