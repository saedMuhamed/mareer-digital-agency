import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const ContactDetail = () => {
  const contacts = [
    {
      id: 1,
      name: "Hagiesa, Somaliland",
      icon: <FiMapPin />,
    },
    {
      id: 2,
      name: "saed-xabo@gmail.com",
      icon: <FiMail />,
    },
    {
      id: 3,
      name: "+252 (63) 4026056",
      icon: <FiPhone />,
    },
  ];
};

export default ContactDetail;
