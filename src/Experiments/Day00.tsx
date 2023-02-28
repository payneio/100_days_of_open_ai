import { Link, Stack, Text } from '@fluentui/react'
import PromptRunner from '../components/PromptRunner'

function Day00() {
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
      <PromptRunner />
    </Stack>
  )
}

export default Day00
