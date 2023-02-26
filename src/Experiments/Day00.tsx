import { useState } from 'react'
import {
  Label,
  Link,
  PrimaryButton,
  Stack,
  Text,
  TextField,
} from '@fluentui/react'
import useOpenAI from '../lib/hooks/useOpenAI'
import { hasOpenAIKey } from '../lib/state'

function Day00() {
  const [prompt, setPrompt] = useState('Say this is a test')
  const [response, setResponse] = useState('No response yet')
  const openai = useOpenAI()
  const [runDisabled, setRunDisabled] = useState(!hasOpenAIKey())

  const handlePrompt = (
    _: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    setPrompt(newValue || '')
  }

  const handleClick = async () => {
    if (!openai) return
    setRunDisabled(true)
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0,
      max_tokens: 1024,
    })
    setRunDisabled(!hasOpenAIKey())
    setResponse(response.data.choices[0].text || 'error')
  }

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <Text variant="large">Day 00</Text>
      <Text>
        You'll need to get your OpenAI key and paste it into the header above.
        Once you do that, you can confirm it works by entering a prompt in the
        box below, clicking the "Run" button and seeing if you get a response.
      </Text>
      <Text>
        After you paste the key you may need to refresh your browser. But, After
        that, you won't need to re-add your key for any of the rest of these
        examples until you close your browser. Your key is stored in your
        browser, I never see it or save it. Once you close your browser window,
        your key is gone.
      </Text>
      <Text>
        To get your free OpenAI key, first register for a free account on OpenAI
        at{' '}
        <Link href="https://beta.openai.com/" target="_blank">
          https://beta.openai.com/
        </Link>
        . Then go to{' '}
        <Link href="https://beta.openai.com/account/api-keys" target="_blank">
          https://beta.openai.com/account/api-keys
        </Link>{' '}
        and click "Create API Key".
      </Text>
      <TextField
        label="Prompt"
        multiline
        rows={6}
        value={prompt}
        onChange={handlePrompt}
      />
      <PrimaryButton text="Run" onClick={handleClick} disabled={runDisabled} />
      <Stack
        style={{
          minHeight: '150px',
          backgroundColor: 'lightgray',
          padding: '1rem',
        }}
        tokens={{ childrenGap: 10 }}
      >
        <Label>GPT response:</Label>
        <Text variant="large">{response}</Text>
      </Stack>
    </Stack>
  )
}

export default Day00
