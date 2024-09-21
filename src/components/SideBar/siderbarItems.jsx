import { ReactComponent as MembersIcon } from "../../assets/sideBar/mamber.svg";
import { ReactComponent as SuppliersIcon } from "../../assets/sideBar/supplaiers.svg";
import { ReactComponent as ServicesIcon } from "../../assets/sideBar/services.svg";
import { ReactComponent as ItinerariesIcon } from "../../assets/sideBar/itineraries.svg";
import { ReactComponent as BookingsIcon } from "../../assets/sideBar/booking.svg";
import { ReactComponent as RevenueIcon } from "../../assets/sideBar/revenue.svg";
import { ReactComponent as AdminsIcon } from "../../assets/sideBar/admins.svg";
import { ReactComponent as CloudIcon } from "../../assets/sideBar/cloud.svg";

// List of items for the sidebar
export const SidebarItems = [
  { text: "Members", link: "/", icon: MembersIcon },
  { text: "Suppliers", link: "/suppliers", icon: SuppliersIcon },
  { text: "Services", link: "/services", icon: ServicesIcon },
  { text: "Itineraries", link: "/itineraries", icon: ItinerariesIcon },
  { text: "Bookings", link: "/bookings", icon: BookingsIcon },
  { text: "Revenue", link: "/revenue", icon: RevenueIcon },
  { text: "Admins", link: "/admins", icon: AdminsIcon },
  { text: "Cloud", link: "/cloud", icon: CloudIcon },
];

// Function to switch icons based on index
export const switchCaseIcon = (index) => {
  switch (index) {
    case 0:
      return <MembersIcon />;
    case 1:
      return <SuppliersIcon />;
    case 2:
      return <ServicesIcon />;
    case 3:
      return <ItinerariesIcon />;
    case 4:
      return <BookingsIcon />;
    case 5:
      return <RevenueIcon />;
    case 6:
      return <AdminsIcon />;
    case 7:
      return <CloudIcon />;
    default:
      return null;
  }
};
