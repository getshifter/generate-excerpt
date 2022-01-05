# Generate Excerpt

Generate Post Excerpt using Post Content and OpenAI 🤖

Built using the [OpenAI API](https://openai.com/api/) and [Shifter Headless](https://www.getshifter.io).

## Usage
```
❯ node index.js --postId=38
🤖 Generated Excerpt: We redesigned the Shifter dashboard based on customer feedback. It's now more usable, with an updated UI and search functionality.
Link: https://abc123.hl-b.getshifter.co/wp-admin/post.php?post=38&action=edit
```

## Output
Sample Post:
[https://www.getshifter.io/introducing-the-new-shifter-dashboard/](https://www.getshifter.io/introducing-the-new-shifter-dashboard/)
```
We redesigned the Shifter dashboard based on customer feedback. It's now more usable, with an updated UI and search functionality.
```

## Input
Sample Post:
[https://www.getshifter.io/introducing-the-new-shifter-dashboard/](https://www.getshifter.io/introducing-the-new-shifter-dashboard/)
```
After months of work, we’re happy to introduce the new Shifter dashboard. Every design has a story to tell, and ours is no different. Like everything else at Shifter, the redesign of the new dashboard was prompted and driven by customer feedback. 

Our Process

We started by speaking directly to our customers. We listened to their feedback, identified their most common pain points, and quickly identified several areas we needed to focus on.

We then began redesigning our dashboard from the ground up, starting with an all-new design system. We invested time in creating components, colors, type scales, and other essential elements. Behind the UI, our design system uses Tailwind CSS. This implementation is ongoing as we migrate. Our devs are big fans of Tailwind, and it provides a ton of features out of the box. We gathered additional feedback and made updates as needed. There’s a lot more to discover with design systems and Tailwind; we’re especially looking forward to that.

Once the design was complete, we gathered internal feedback from the team and made updates as needed. We collected lots more feedback through a community beta that provided input that was incredibly valuable for us.

What’s new

Usability upgrades

We’ve worked to make the dashboard much more comfortable to use. We’ve changed to sidebar navigation so features can be found quickly and easily and to make room for additional features in the future. We also updated the categories to help provide some hints about how Shifter works. There have been updates to nearly every product feature so give them a try!

Learn as you go

We’ve also added helpful messages to the dashboard to explain features and processes. No more consulting docs when you want to find out what an artifact deploy is.

Updated UI

Of course, with a new design system comes a new UI. The UI is now much friendlier and accessible. 

Search

The dashboard is now fully searchable. However, it may seem like a minor feature; adding the ability to search the dashboard provides a brand new way to interact with Shifter. Jump between sites with ease and find that missing team member with a simple search. 

What’s next?

These changes are just the beginning. We’ll be rolling out additional updates and polishing things up in the next few months and will continue to iterate until Shifter becomes a product that we can all be proud to share with you. We’re not also in an excellent place to build on our product transforming from a product and a platform. 

As we discussed, user feedback was critical to our redesign process. We’re looking forward to your feedback and making future improvements. 

As always, thanks for using Shifter!
```