import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

type Props = {
  addressLine1?: string;
  streetAddress?: string;
  city?: string;
  phone?: string;
  email?: string;
};

export const SidebarContactInfo = ({
  addressLine1,
  streetAddress,
  city,
  phone,
  email,
}: Props) => {
  return (
    <div>
      <h2 className="text-sm font-bold my-2 px-1">Contact</h2>
      <div className="">
        <div className="px-1 py-2  flex items-center gap-2">
          <FaMapMarkerAlt />
          <span className="text-xs">
            {addressLine1}, {city}, {streetAddress}
          </span>
        </div>
        <div className="px-1 py-2  flex items-center gap-2">
          <IoMdMail />
          <span className="text-xs">{email}</span>
        </div>
        <div className="px-1 py-2 flex items-center gap-2">
          <FaPhoneAlt /> <span className="text-xs">{phone}</span>
        </div>
      </div>
    </div>
  );
};
