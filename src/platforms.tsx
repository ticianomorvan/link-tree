// Icons
import {
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaSpotify,
  FaPatreon,
  FaGithub,
} from "react-icons/fa";

// Supported platforms
const platforms: { [index: string]: any } = {
  instagram: {
    backgroundColor: "bg-gradient-to-tr from-amber-500 to-fuchsia-700",
    icon: <FaInstagram />,
  },
  twitch: {
    backgroundColor: "bg-purple-500",
    icon: <FaTwitch />,
  },
  twitter: {
    backgroundColor: "bg-blue-500",
    icon: <FaTwitter />,
  },
  youtube: {
    backgroundColor: "bg-red-600",
    icon: <FaYoutube />,
  },
  linkedin: {
    backgroundColor: "bg-blue-300",
    icon: <FaLinkedinIn />,
  },
  facebook: {
    backgroundColor: "bg-blue-600",
    icon: <FaFacebookF />,
  },
  spotify: {
    backgroundColor: "bg-green-500",
    icon: <FaSpotify />,
  },
  patreon: {
    backgroundColor: "bg-red-600",
    icon: <FaPatreon />,
  },
  github: {
    backgroundColor: "bg-gray-500",
    icon: <FaGithub />,
  },
};

export default platforms;
