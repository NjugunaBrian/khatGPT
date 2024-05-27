import openai from "./chatgpt";

const query = async (value: ChatMessage[], id: string, model: string): Promise<string | null> => {

  const res = await openai.chat.completions
    .create({
      model,
      messages: value,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.choices[0].message.content)
    .catch(
      (err) =>
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );

  return res;
};

export default query;
