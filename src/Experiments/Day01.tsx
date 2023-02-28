import { Link, Stack, Text } from '@fluentui/react'
import PromptRunner from '../components/PromptRunner'

function Day01() {
  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <Text variant="large">Day 1: Prompt basics, a.k.a. text completion</Text>
      <Text>
        So, what this example is doing is taking the prompt you enter and
        sending to{' '}
        <Link
          href="https://platform.openai.com/docs/api-reference/completions"
          target="_blank"
        >
          OpenAI's GPT-3 `completion` endpoint
        </Link>{' '}
        using the DaVinci language model. The `completions` endpoint will return
        a response that includes the prompt you sent, plus a completion of the
        prompt.
      </Text>
      <Text>
        The `completion` endpoint has a lot of options, including the model you
        want to use (we're using the DaVinci model here), the number of
        completions you want, the maximum number of "tokens" you want, and
        various options that let you control how the completions are generated.
        We'll explore those options in later examples.
      </Text>
      <Text>
        For now, let's just talk about what a "prompt" consists of. A prompt is
        a string of text that you want to use as the starting point for the
        completion. The can be a single sentence, or a paragraph. It's important
        to think of the prompt as the start of a, let's say "document", and the
        completion that gets returned as the rest of the document. DaVinci will
        do it's best to guess what the completion of the document should be.
      </Text>
      <Text>
        Finally, let's talk about "tokens". Input and output of the OpenAI text
        models are limited by the number of tokens. Currently, DaVinici allows
        2048 tokens for input and 2048 tokens for output, for example.
        Understanding tokens is also important because that's how OpenAI charges
        you... a very tiny amount per token. So what is a token? The way I think
        of a token is anything that has a unique semantic meaning that needs to
        be pulled apart from the rest of the text. Oftentimes, a word is a
        token, but a token can also be a group of words (like "The United
        States"), or part of a word, or even a punctuation mark, a number, at
        times, a space. Generally, though, you can think of a token as roughly
        being equivalent to "a word".
      </Text>
      <Text>
        Some tips:
        <ul>
          <li>Don't end the prompt with a space.</li>
          <li>
            DaVinci won't generate anything if your prompt looks like it is
            already complete. If nothing changes when you click "Run", try
            changing your prompt to something more incomplete.
          </li>
        </ul>
      </Text>
      <Text>
        Go ahead and use this example prompt or enter your own prompt to have
        completed.
      </Text>

      <PromptRunner prompt="Once upon a time, AI entered into the world and" />
    </Stack>
  )
}

export default Day01
