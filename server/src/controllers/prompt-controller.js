const openai = require('../config/openai');
const InputPrompt = require('../models/input-prompt');

module.exports = {
  async sendText(req, res) {
    console.log('Início da função sendText');
    const OpenAI = openai.configuration();
    const InputModel = new InputPrompt(req.body);
    
    try {
      const response = await OpenAI.chat.completions.create(
        openai.textCompletion(InputModel)
      );
      return res.status(200).json({ success: true, data: response.choices[0].text });
    } catch (error) {
      console.error('Erro:', error);
      return res.status(500).json({ success: false, error: error.response ? error.response.data : "There was an error creating" });
    }
  }
};
