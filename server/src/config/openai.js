const OpenAI = require("openai");

module.exports = class Openai {
  static configuration() {
    const configuration = {
      apiKey: process.env.OPENAI_API_KEY,
    };
    return new OpenAI(configuration);
  }

  static textCompletion({ prompt }) {
    return {
      model: "gpt-3.5-turbo",
      prompt: `${prompt}`,
      temperature: 0.04,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
  }
};
