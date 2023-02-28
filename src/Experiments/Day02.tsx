import { Link, Stack, Text } from '@fluentui/react'
import PromptRunner from '../components/PromptRunner'

function Day02() {
  return (
    <Stack tokens={{ childrenGap: '1.5rem' }}>
      <Text variant="large">Day 2: Write a poem</Text>
      <Text>
        Let's use OpenAI's <em>completion</em> API to write a poem about what
        some of us may be feeling right now.
      </Text>
      <PromptRunner prompt="A poem about being wistful at the prospect of being no longer useful to the world, with no repeated stanzas, in the style of Dylan Thomas:" />
      <Text>
        Ok. Maybe that was a bit sad. Let's try something more upbeat.
      </Text>
      <PromptRunner prompt="A poem with no repeated stanzas about the feeling of standing at the precipice of a new age of discovery in which the suffering of the world may finally be resolved in the style of Langston Hughes:" />
      <Text>
        Note in these examples I add the phrase "with no repeated stanzas". This
        is because without it I noticed that DaVinci would get into a loop and
        repeat the same stanza over and over. "Prompt engineering" can be an
        art. That's why we're starting to see{' '}
        <Link href="https://promptbase.com/" target="_blank">
          marketplaces
        </Link>{' '}
        for prompts already. In the future, though, I think we will see that we
        don't need to write prompts like this anymore, we'll just ask AI to give
        us what we want, like a chatbot, and it will understand us much better
        than just "completing" text.
      </Text>
      <Text>
        Go ahead and modify the prompt above to try writing your own poetry.
      </Text>
      <Text>
        Are these <em>good</em> poems? Who gets to say?{' '}
        <Link
          to="https://www.theredhandfiles.com/chat-gpt-what-do-you-think/"
          target="_blank"
        >
          Some artists
        </Link>{' '}
        thing they're not only absolute rubbish, but that AI will <em>never</em>{' '}
        be able to produce something like a <em>true</em> artist, which raises
        the following thoughts:
      </Text>
      <Text>
        <ul>
          <li>A better prompt is likely to make a better poem.</li>
          <li>
            The large language models exhibit what is called "emergent
            behavior". They are terrible at something (like math) up to some
            specific point when given enough data and training time, and then
            they take a great leap. We're starting to understand that this is
            due to the language models learning to "embed" neural networks that
            handle specific task subsets. We may see the model at some point
            create the "anguished artist" subnet.
          </li>
          <li>These models are increasing in capability exponentially.</li>
          <li>
            Mr. Cave suggests that his human experience is his unasailable
            value. We need to remember, though, that language models have been
            trained on the experiences of millions or billions of us. Certainly
            we can imagine AI, at some point when tasked with teasing it out,
            understanding aspects of human experience better than we do.
          </li>
          <li>
            Let's be honest, most poetry in the world is rubbish--pirate
            shanties and greeting cards. It's still useful.
          </li>
        </ul>
      </Text>
    </Stack>
  )
}

export default Day02
