import { Stack, Text } from '@fluentui/react'
import PromptRunner from '../components/PromptRunner'

const prompt = `A poem of three lines, the first with two words, the second with three, and the third with four:`
const prompt2 = `A poem of three lines. The first line of the poem must have two words. The second line of the poem must have three words. The third line of the poem must have four words. Like this:
1 2
1 2 3
1 2 3 4

or

A day
The sun rises
Making the earth warm

Here it is:`

function Day04() {
  return (
    <Stack tokens={{ childrenGap: '1.5rem' }}>
      <Text variant="large">Day 4: Limitations of LLMs: Understanding</Text>
      <Text>
        LLM models have glaring limitations and challenges remain with applying
        them to real-world problems. One of the most obvious limitations is that
        they don't understand the meaning of the text they are generating. They
        are trained to predict the next word in a sequence, but they don't
        understand the meaning of the words they are predicting. This is a big
        problem for many applications of language models.
      </Text>
      <Text>
        Because LLMs are so good at things we've previously understood are only
        possible by sentient beings, we tend to assume that they must understand
        the meaning of the text they are generating. But, they don't.
      </Text>
      <Text>
        We can see this limitation in action by trying to generate a poem with
        this prompt the following prompt. Run it and see if you can see what it
        does wrong.
      </Text>
      <PromptRunner prompt={prompt} lines={6} />
      <Text>
        Go ahead and try to modify the prompt to make it work like you, a human,
        easily understand it should. Here's my best attempt:
      </Text>
      <PromptRunner prompt={prompt2} lines={17} />
      <Text>
        Now, LLMs, when trained on a large enough corpus of text sometimes
        exhibit emergent behavior. What they were unable to before emerges as a
        new capability. So, it's possible that LLMs will eventually be able to
        be able in the future to accomplish this task, or even develop the
        capability to work with arithmetic and words and lines better, but even
        then, they don't reason or understand like we do, even if we really
        think they seem like they do.
      </Text>
    </Stack>
  )
}

export default Day04
