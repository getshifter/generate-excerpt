// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
// Generate WordPress Post Excerpt
// using Post Content and OpenAI 🤖
// Buzzwords: 🐝 GPT-3, AI, AGI
// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨

require("dotenv").config();

const siteID = process.env.HEADLESS_SITE_ID;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const username = process.env.HEADLESS_USERNAME;
const password = process.env.HEADLESS_PASSWORD;
const username_password = `${username}:${password}`;
const buffer = new Buffer.from(username_password);
const token = buffer.toString("base64");

const headlessURL = `hl-b.getshifter.co`;
const baseURL = `https://${siteID}.hl-b.getshifter.co`;
const restURL = `${baseURL}/wp-json/wp/v2`;

const axios = require("axios");
const { convert } = require("html-to-text");
const OpenAI = require("openai-api");
const openai = new OpenAI(OPENAI_API_KEY);

async function generatePostExcerpt({ postId }) {
  try {
    let {
      data: { content, guid, id },
    } = await axios({
      headers: {
        Authorization: `Basic ${token}`,
      },
      method: "get",
      url: `${restURL}/posts/${postId}`,
    });

    const response = await openai.complete({
      engine: "davinci-instruct-beta-v3",
      prompt: `${convert(content.rendered).replace(
        /(\r\n|\n|\r)/gm,
        ""
      )}\ntl;dr:`,
      maxTokens: 75,
      temperature: 0.5,
      topP: 1,
      presencePenalty: 0,
      frequencyPenalty: 0,
      bestOf: 1,
      n: 1,
      stream: false,
    });

    const excerpt = response.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, "");

    await axios({
      headers: {
        Authorization: `Basic ${token}`,
      },
      method: "post",
      url: `${restURL}/posts/${postId}`,
      data: {
        excerpt: excerpt,
      },
    });

    console.log(
      `🤖 Excerpt: ${excerpt}\nLink: ${baseURL}/wp-admin/post.php?post=${postId}&action=edit`
    );
  } catch (error) {
    console.error(error);
  }
}

generatePostExcerpt({ postId: 56 });
