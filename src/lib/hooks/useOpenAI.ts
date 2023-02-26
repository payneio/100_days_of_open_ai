import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

function useOpenAI(): OpenAIApi | undefined {
  const [openai, setOpenAI] = useState<OpenAIApi>();
  const openAIKey = sessionStorage.getItem('openAIKey');

  useEffect(() => {
    if (!openAIKey) {
      return;
    }

    const configuration = new Configuration({
      apiKey: openAIKey,
    });
    const openAIClient = new OpenAIApi(configuration);
    setOpenAI(openAIClient);
  }, []);

  return openai;
}

export default useOpenAI;
