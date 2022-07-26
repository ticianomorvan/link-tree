// Configuration
import * as config from "./config.json";
import platforms from "./platforms";
import externalLinks from "./externalLinks";

// Libraries
import anime from "animejs";
import { FaGlobeAmericas } from "react-icons/fa";
import { useEffect } from "react";

export type LinkType = {
  platform: string; // Platform where the link is from. e.g.: 'twitch'
  description: string; // Description of the link. e.g.: 'My twitch channel'
  url: string; // URL of the link. e.g.: 'https://twitch.tv/Ti7oyan'
  customColor?: string; // Custom color, if desired. USES TAILWIND CLASSES e.g.: 'bg-blue-500'
};

const LinkItem = ({ platform, description, url, customColor }: LinkType) => {
  let backgroundColor = "bg-white";
  let icon = <FaGlobeAmericas />;
  if (platform in platforms) {
    backgroundColor = platforms[platform].backgroundColor;
    icon = platforms[platform].icon;
  }

  if (customColor) backgroundColor = customColor;

  return (
    <a
      href={url}
      className="m-auto w-max"
      id={`${config.name}-${platform}`}
      rel="noreferrer"
      target="_blank"
    >
      <li
        className={
          `${backgroundColor} w-64 min-w-max p-2
          rounded-xl transition duration-150
          hover:scale-105 sm:w-72`
        }
      >
        <div className="p-0.5 rounded-xl w-full flex justify-between">
          <span className="self-center text-2xl">{icon}</span>
          <p>{description}</p>
        </div>
      </li>
    </a>
  );
};

const App = () => {

  // Animations
  useEffect(() => {
    let timeline = anime.timeline({
      easing: 'easeOutQuad',
      duration: 700,
      delay: 300
    })

    timeline.add({
      // Animating the profle picture and description.
      targets: document.getElementById('profile'),
      opacity: ['0%', '100%'],
      translateY: ['-0.5em', '0'],
      scale: ['0.95', '1']
    })
    .add({
      // Animating the external links.
      targets: document.getElementById('external-links'),
      opacity: ['0%', '100%'],
      translateY: ['-1em', '0'],
    })
  }, [])
  return (
    <main className={`w-full min-h-screen max-h-max bg-neutral-900 font-sans`}>
      <section id="profile" className="p-8 pb-0">
        { /* Profile picture and its description */ }
        <article id="profile-details" className="text-center text-white">
          <img
            src={config.profilePhoto}
            alt={`${config.name}'s profile picture`}
            className="w-32 m-auto my-4 rounded-full"
          />
          <h1 className="text-xl">{config.name}</h1>
          <h2 className="text-md text-gray-400">{`< ${config.nickname} >`}</h2>
        </article>
      </section>
      <section id="external-links" className="p-8">
        { /* External links */}
        <ul className="grid grid-cols-1 gap-y-2.5">
          { externalLinks.map((link) => {
            return (
              <LinkItem
                platform={link.platform}
                description={link.description}
                url={link.url}
                customColor={link.customColor}
              />
            )
          }) }
        </ul>
      </section>
    </main>
  );
};

export default App;
