import { useState } from 'react';
import { Label, PrimaryButton, Stack, Text, TextField } from '@fluentui/react';


function Day00() {

  const openAIKey = sessionStorage.getItem("openAIKey");

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: openAIKey
  });
  const openai = new OpenAIApi(configuration);

  const [ prompt, setPrompt ] = useState("Say this is a test");
  const [ response, setResponse ] = useState("No response yet");
  const [ runDisabled, setRunDisabled ] = useState(openAIKey === null);

  const handlePrompt = (_: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setPrompt(newValue || '');
  }

  const handleClick = async () => {
    setRunDisabled(true)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 1024,
    });
    setRunDisabled(openAIKey === null)
    setResponse(response.data.choices[0].text)
  }
  
  return (
    <Stack tokens={{childrenGap: 10}}>
      <Text variant="large">Day 00</Text>
      <Text>
        You'll need to get your OpenAI key and paste it into the header above.
        Once you do that, you can confirm it works by entering a prompt in the box below, clicking
        the "Run" button and seeing if you get a response.
      </Text>
      <TextField label="Prompt" multiline rows={3} value={prompt} onChange={handlePrompt}/>
      <PrimaryButton text="Run" onClick={handleClick} disabled={runDisabled}/>
      <Stack style={{minHeight: '150px', backgroundColor: 'lightgray', padding: "1rem"}} tokens={{childrenGap: 10}}>
        <Label>GPT response:</Label>
        <Text variant="large">{response}</Text>
      </Stack>
    </Stack>
  );
}

export default Day00;
