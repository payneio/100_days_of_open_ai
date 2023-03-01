import { Stack, Text } from '@fluentui/react'
import PromptRunner from '../components/PromptRunner'

const prompt = `A patient after-visit report:

Patient Name: Jane Doe Date of Visit: 2023-02-28 Medical Record Number: 987654321

Chief Complaint: The patient presented with a complaint of abdominal pain and diarrhea.

History of Present Illness: The patient reported experiencing abdominal pain and diarrhea for the past two weeks. The patient also reported feeling fatigued and having a low-grade fever. There was no history of nausea, vomiting, or constipation.

Medical History: The patient has a history of irritable bowel syndrome, for which she takes dicyclomine. The patient denies any allergies to medications.

Physical Examination: Vital signs were within normal limits. On abdominal examination, there was diffuse tenderness without rebound or guarding. Bowel sounds were hyperactive. There were no palpable masses or hepatosplenomegaly.

Diagnostic Tests: Stool studies were positive for Clostridium difficile toxin A and B. A colonoscopy was performed and showed diffuse erythema and friability in the colon, consistent with pseudomembranous colitis.

Assessment and Plan: The patient was diagnosed with pseudomembranous colitis secondary to Clostridium difficile infection. The patient was started on vancomycin and metronidazole, and dicyclomine was discontinued. The patient was advised to continue a low-residue diet and to stay well-hydrated. The patient was also advised to report any worsening or new symptoms.

Recommendations:

Continue vancomycin and metronidazole as prescribed.
Monitor symptoms closely and report any worsening or new symptoms.
Follow up in 2 weeks for reevaluation.
Continue a low-residue diet and stay well-hydrated.
Conclusion: The patient was diagnosed with pseudomembranous colitis secondary to Clostridium difficile infection. The patient was started on appropriate antibiotic therapy and advised on self-care measures and follow-up. The patient was advised to contact the healthcare provider if there were any concerns or questions.

The summary of this report in plain language that a high school student could understand:`

const prompt2 = `High-level information about Clostridium difficile, how one get's infected by it, the effects of an infection, and how to treat it:`

function Day03() {
  return (
    <Stack tokens={{ childrenGap: '1.5rem' }}>
      <Text variant="large">Day 3: Explain medical info</Text>
      <Text>
        GPT isn't just good at generating text, it's also good at summarizing
        and translating text. For example, if you've ever been mystified after a
        doctor's appointment when reading the "After Visit Report", take a look
        at this prompt.
      </Text>
      <PromptRunner prompt={prompt} />
      <Text>
        Now that we have a summary we can understand, let's go ahead and
        generate helpful information about the infection.
      </Text>
      <PromptRunner prompt={prompt2} />
      <Text>
        Is this information about C. difficile correct? I don't know, and{' '}
        <Text style={{ color: 'red' }}>I wouldn't trust it</Text>--this is just
        probabalistically generated text, after all. But, language models are
        prone to a phenomenon called "hallucinations", where they generate text
        that is plausible, but not true. More on this later.
      </Text>
      <Text>
        To deal with hallucinations, we need to apply additional techniques
        which I'll add examples of in future days.
      </Text>
      <Text>
        But also, let's not miss the forest for the trees. At this point, we can
        all imagine a personal health assistant for everyone.
      </Text>
    </Stack>
  )
}

export default Day03
