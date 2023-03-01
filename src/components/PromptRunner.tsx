import {
  CommandBar,
  Label,
  Text,
  Stack,
  TextField,
  ICommandBarItemProps,
  PrimaryButton,
  StackItem,
  ITextField,
} from '@fluentui/react'
import useOpenAI from '../lib/hooks/useOpenAI'
import { hasOpenAIKey } from '../lib/state'
import { useState, useRef } from 'react'

// component params type
type PromptRunnerProps = {
  id?: string
  prompt: string
  maxTokens?: number
}

const PromptRunner = ({ id, prompt, maxTokens }: PromptRunnerProps) => {
  id = id || 'prompt-runner-' + Math.random().toString(36).substring(2, 7)
  maxTokens = maxTokens || 256

  const [response, setResponse] = useState('No response yet')
  const [myPrompt, setPrompt] = useState(prompt)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<ITextField>(null)

  const runDisabled = !hasOpenAIKey()
  const hasMenu = false
  const hasOutput = false

  const openai = useOpenAI()

  const handlePrompt = (
    _: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    setPrompt(newValue || '')
  }

  const handleClick = async () => {
    if (!openai || !inputRef?.current?.value) return
    setLoading(true)

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: inputRef.current.value,
      temperature: 0,
      max_tokens: maxTokens,
    })
    setLoading(false)
    setPrompt(myPrompt + response.data.choices[0].text)
    setResponse(response.data.choices[0].text || 'error')
  }

  const _items: ICommandBarItemProps[] = []

  const _farItems: ICommandBarItemProps[] = [
    {
      key: 'play',
      text: 'Play',
      ariaLabel: 'play',
      iconOnly: true,
      iconProps: {
        iconName: loading ? 'ProgressRingDots' : 'Play',
      },
      disabled: runDisabled,
      onClick: () => handleClick() as any,
    },
  ]

  // light blue background with transparent buttons
  const commandBarStyles = {
    root: {
      backgroundColor: 'lightblue',
      // transparent buttons
      selectors: {
        '.ms-Button': {
          backgroundColor: 'transparent',
        },
      },
    },
  }

  return (
    <Stack tokens={{ childrenGap: '10px' }}>
      <StackItem>
        {hasMenu && (
          <CommandBar
            items={_items}
            farItems={_farItems}
            styles={commandBarStyles}
          />
        )}
        <TextField
          multiline
          rows={15}
          value={myPrompt}
          onChange={handlePrompt}
          componentRef={inputRef}
          id={`prompt-runner-${id}`}
        />
      </StackItem>
      <Stack horizontal tokens={{ childrenGap: '10px' }}>
        <PrimaryButton onClick={handleClick} disabled={runDisabled || loading}>
          Run
        </PrimaryButton>
      </Stack>
      {hasOutput && (
        <Stack
          style={{
            minHeight: '150px',
            backgroundColor: 'lightgray',
            padding: '1rem',
          }}
          tokens={{ childrenGap: 10 }}
        >
          <Label>Output:</Label>
          <Text variant="large">{response}</Text>
        </Stack>
      )}
    </Stack>
  )
}

export default PromptRunner
