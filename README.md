# link-tree
Simple, mobile-friendly link tree for your socials.

## How to edit it?

1. Fork the repository and clone it.
2. Open it with your favourite editor and install the required dependencies with `npm install`
3. Locate the following files: `src/externalLinks.ts` and `src/config.json`
3. In `config.json`, you will have to change `name` to your name, `nickname` to your nickname or something you want to say about you and `profilePhoto` to your profile photo (I recommend using the GitHub profile photo's link)
4. In `externalLinks.ts` you will have to add/edit the platforms you want to display. For example:
```
{
    platform: 'youtube',
    description: 'my youtube channel!',
    url: 'https://youtube.com/c/your_channel',
    customColor: 'bg-green-200'
}
```
This will add a **YouTube** button with the label "my youtube channel!" that redirects to the given url, but will replace the default YouTube color for the custom color we declared.
5. Once you're done, save both files and run `npm run dev` or `npm run preview` to check if it's all correct.
6. Now, to publish it to GitHub Pages (if you want to do it another way, you're free from now), you will have to run `npm run deploy` and check at your repository's settings for GitHub Pages configuration.

## NOTES
- `customColor` property uses TailwindCSS's background color class, so you will have to use `bg-{color}-{value}` to apply a custom color.
- You can add more platforms if you don't find what you need. You will have to locate `platforms.tsx` and:
    1. Import the icon from your desired platform (check [react-icons](https://react-icons.github.io/react-icons/))
    2. Add an entry at `platforms` object. For example:
    ```
    steam: {
        backgroundColor: 'bg-gray-300',
        icon: <FaSteam />
    }
    ```
After doing this, you can now place your links from your platform.
- You are free to contribute to this project.