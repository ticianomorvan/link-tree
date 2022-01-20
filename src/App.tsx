import * as config from './config.json'

// Libraries
// const validator = Node.require('validator');

// Icons
import {
  FaInstagram, FaTwitch, FaTwitter, FaYoutube, FaLinkedinIn, 
  FaFacebookF, FaSpotify, FaPatreon, FaGlobeAmericas, FaGithub
} from 'react-icons/fa';

// Supported platforms
const platforms: {[index: string]: any} = {
  instagram: {
    backgroundColor: "bg-gradient-to-tr from-amber-500 to-fuchsia-700",
    icon: <FaInstagram />
  },
  "twitch": {
    backgroundColor: "bg-purple-500",
    icon: <FaTwitch />
  },
  "twitter": {
    backgroundColor: "bg-blue-500",
    icon: <FaTwitter />
  },
  "youtube": {
    backgroundColor: "bg-red-600",
    icon: <FaYoutube />
  },
  "linkedin": {
    backgroundColor: "bg-blue-300",
    icon: <FaLinkedinIn />
  },
  "facebook": {
    backgroundColor: "bg-blue-600",
    icon: <FaFacebookF />
  },
  "spotify": {
    backgroundColor: "bg-green-500",
    icon: <FaSpotify />
  },
  "patreon": {
    backgroundColor: "bg-red-600",
    icon: <FaPatreon />
  },
  "github": {
    backgroundColor: "bg-gray-500",
    icon: <FaGithub />
  }
}

type LinkType = {
  platform: string,
  description: string,
  url: string,
  customColor?: string
}

const LinkItem = ({platform, description, url, customColor}: LinkType) => {
  let backgroundColor = 'bg-white';
  let icon = <FaGlobeAmericas />
  if (platform in platforms) {
    backgroundColor = platforms[platform].backgroundColor
    icon = platforms[platform].icon
  }

  if (customColor) backgroundColor = customColor;

  return (
    <a 
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <li
      id={`${config.name}-${platform}`}
      className={`${backgroundColor} p-2 rounded-xl`}
      >
        <div className="p-0.5 rounded-xl w-full flex justify-between">
          <span className="self-center text-2xl">
            {icon}
          </span>
          <p>{description}</p>
        </div>
      </li>
    </a>
  )
}

const App = () => (
  <main className={`w-screen h-full bg-neutral-900 font-sans`}>
    <section id="profile" className="p-8">
      <article
        id="profile-details" 
        className="text-center text-white"
      >
        <img
          src={config.profilePhoto}
          alt={`${config.name}'s profile picture`}
          className="w-16 m-auto my-4 rounded-full"
        />
        <h1 className="text-xl">{config.name}</h1>
        <h2 className="text-md text-gray-400">{`< ${config.nickname} >`}</h2>
      </article>
    </section>
    <section id="external-links" className="p-8">
      <ul className="grid grid-cols-1 gap-y-2">
        <LinkItem platform="twitch" description="Ti7oyan" url="https://instagram.com/ticianomorvan" />
        <LinkItem platform="youtube" description="Ti7oyan" url="https://instagram.com/ticianomorvan" />
        <LinkItem platform="instagram" description="ticianomorvan" url="https://instagram.com/ticianomorvan" />
        <LinkItem platform="website" description="Mi sitio web 🚀" url="https://ticianomorvan.me" customColor="bg-blue-500" />
        <LinkItem platform="linkedin" description="Ticiano Morvan" url="https://instagram.com/ticianomorvan" />
        <LinkItem platform="github" description="Ti7oyan" url="https://github.com/Ti7oyan" />
      </ul>
    </section>
  </main>
)

export default App;
