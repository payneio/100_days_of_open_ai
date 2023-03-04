import { Link as RouterLink } from 'react-router-dom'
import { Link, Separator, Stack, Text } from '@fluentui/react'

const Layout = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
      <Stack tokens={{ childrenGap: '1.5rem' }}>
        <Text>
          This is a personal exercise to continue exploring applications of
          OpenAI models by creating 100 different examples of using OpenAI.
        </Text>
        <Text>
          So, check out each of the day's exercises below and be sure to stop
          back to see new days as they are added.
        </Text>
        <Text>
          To see the examples in action, you'll need to use your own OpenAI key
          and paste it into the header above.
        </Text>
        <Text>
          To get your free OpenAI key, first register for a free account on
          OpenAI at{' '}
          <Link href="https://beta.openai.com/" target="_blank">
            https://beta.openai.com/
          </Link>
          . Then go to{' '}
          <Link href="https://beta.openai.com/account/api-keys" target="_blank">
            https://beta.openai.com/account/api-keys
          </Link>{' '}
          and click "Create API Key".
        </Text>
        <Text>
          After you paste the key you may need to refresh your browser. But,
          After that, you won't need to re-add your key for any of the rest of
          these examples until you close your browser. Your key is stored in
          your browser, I never see it or save it. Once you close your browser
          window, your key is gone.
        </Text>
        <Text color="red">
          Under no circumstances will I pay for your OpenAI usage! So, usage of
          this site is at your own risk!
        </Text>
        <Text>
          Generally, each example will incur only a few cents or less against
          your OpenAI account. If any of the examples might incur a larger cost,
          I'll try to note that in the example. When you register an account for
          the first time, OpenAI will give you $15 of free credits, so you'll
          have plenty to play with.
        </Text>
        <Separator />
        <Stack tokens={{ childrenGap: 5 }}>
          <Text variant="large">Menu</Text>
          <RouterLink to="/day-00">Day 0: Setup</RouterLink>
          <RouterLink to="/day-01">Day 1: Prompt basics</RouterLink>
          <RouterLink to="/day-02">Day 2: Write a poem</RouterLink>
          <RouterLink to="/day-03">
            Day 3: Summarize and explain complicated medical information
          </RouterLink>
          <RouterLink to="/day-04">
            Day 4: Limitations: Understanding
          </RouterLink>
        </Stack>
      </Stack>
    </main>
  )
}

export default Layout
