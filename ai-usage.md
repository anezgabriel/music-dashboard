# AI Usage Overview
This document aims to explain the AI usage to build this app.

This app took about 4-5 hours (on and off) of development time, most of this
app was build using AI tools like v0, cursor and t3.chat

## Beginning of the project

I decided to use the [t3 stack](https://create.t3.gg/) since I've used it before and it pre installs nextjs with app router and the latest version of tailwind css. I used the CLI and removed all of the other pre-installed libraries that this template starter offers.

## v0

The heavy lifting of this project was done by [v0](https://v0.app/) which defines itself as

"A generative chat interface with in-depth knowledge on modern web technologies. It can provide technical guidance while building on the web, generate UI with client-side functionality, write and execute code in JavaScript and Python, build diagrams explaining complex programming topics, and more."

here is the template that v0 provided: https://v0.app/chat/music-artist-dashboard-dZpLMp6Uzlm

The prompt what was used to generate this project was the following:

"BUild a music artist dashboard, the dashboard should have 3 main pages and some sort of navigation, it should work on both mobile and desktop viewports. The pages are:

Recent releases: it should be a list/grid of music releases
Sales Analytics: A viosual representation of sales data with some sort of graphs/charts to show the music artist
Fan Engagement - Some form of fan interaction metrics.
All the data to display can be mock data in .ts/json files no need to mock API requests It would be a plus to have animations but not needed"

### Steps after v0

Given that I didn't have as much time for this project since I had to stop working on it and resume multiple times, I took this first result of v0 and started copying manually all of the components, tailwind styles and the pages, fixing the errors/imports one by one in the process.

I tried to use git to commit each of these steps separately to be reviewed later.

## Cursor

After copying the components and pages provided by v0 I used cursor to start fixing and making small tweaks to make the web app look to my liking. I ran into some small errors where I prompted cursor for help some examples are

- "I created this project with biome instead of prettier and now it won't format on save"
- "The images in the public folder are not loading correctly in the releases page"
- "The chart in mobile viewport is fixed but now in desktop is not taking the full with of the container"

Overall I used Cursor from small errors like the one mentioned above to bigger features like implementing ISR and Skeleton loading with suspense with overall ok results, most of the prompts required validation and small tweaks to work as I wanted them to.

This was used in Agent mode using Claude-4.5-sonnet.

## t3.chat

For some small questions about nextjs in general I asked t3.chat which is an alternative to chatgpt, I don't really use chats that much most of the time I stick to Cursor itself.
