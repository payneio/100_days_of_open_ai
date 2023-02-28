import { Link, Stack, Text } from '@fluentui/react'
import PromptRunner from '../components/PromptRunner'
import { Link as RouterLink } from 'react-router-dom'

function Day00() {
  return (
    <Stack tokens={{ childrenGap: '1.5rem' }}>
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
      <PromptRunner prompt="Say this is a test" />
      <Text>
        If you put a valid OpenAI key in the header, when you click on the "Run"
        button, you should see a response from OpenAI after your text (it is put
        right in the textbox, which is convenient if you want to use what was
        returned for another prompt).
      </Text>
      <Text>
        If you don't see a response, you probably didn't put in a valid key.
        Check to make sure you copied the key correctly.
      </Text>
      <Text>
        So, great! Now let's go on to{' '}
        <RouterLink to="/day-01">Day 01</RouterLink>.
      </Text>
    </Stack>
  )
}

export default Day00
