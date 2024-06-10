import {
  IconCalendarWeek,
  IconCash,
  IconChartBar,
  IconChartPie,
  IconCreditCard,
  IconEmergencyBed,
  IconFileInvoice,
  IconHeadphones,
  IconLayoutDashboard,
  IconStethoscope,
  IconUser,
  IconUsers,
  IconVaccineBottle,
} from "@tabler/icons-react";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "~/lib/util";
import { NavLink } from "@remix-run/react";

export type SidebarProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function Sidebar({ children, className }: SidebarProps) {
  return (
    <aside className={cn("h-screen", className)}>
      <nav className="flex h-full flex-col border-r bg-base-200/10 shadow-sm">
        <div className="flex min-h-16 items-center justify-between p-4 pb-2">
          <img
            src="https://img.logoipsum.com/262.svg"
            className="w-32 overflow-hidden transition-all"
            alt=""
          />
        </div>

        <SidebarItems />
      </nav>
    </aside>
  );
}

export type SidebarItemProps = {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
};

export function SidebarItems() {
  return (
    <>
      <ul className="menu">
        <li>
          <a>
            <IconLayoutDashboard /> Dashboard
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu-title">Clinic</li>
        <li>
          <NavLink to={`reservations`} className="active">
            <IconCalendarWeek />
            Reservations
          </NavLink>
        </li>
        <li>
          <a>
            <IconUser />
            Patients
          </a>
        </li>
        <li>
          <a>
            <IconStethoscope />
            Treatments
          </a>
        </li>
        <li>
          <a>
            <IconUsers />
            Staff List
          </a>
        </li>
      </ul>

      <ul className="menu">
        <li className="menu-title">Finance</li>
        <li>
          <a>
            <IconCash />
            Accounts
          </a>
        </li>
        <li>
          <a>
            <IconChartBar />
            Sales
          </a>
        </li>
        <li>
          <a>
            <IconFileInvoice />
            Purchases
          </a>
        </li>
        <li>
          <a>
            <IconCreditCard />
            Payment Method
          </a>
        </li>
      </ul>

      <div className="divide-y">
        <ul className="menu">
          <li className="menu-title">Physical Asset</li>
          <li>
            <a>
              <IconVaccineBottle />
              Stocks
            </a>
          </li>
          <li>
            <a>
              <IconEmergencyBed />
              Peripherals
            </a>
          </li>
        </ul>

        <ul className="menu">
          <li>
            <a>
              <IconChartPie />
              Report
            </a>
          </li>
          <li>
            <a>
              <IconHeadphones />
              Customer Support
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
