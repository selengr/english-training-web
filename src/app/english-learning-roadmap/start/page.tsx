import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from 'lucide-react'

const stages = [
  {
    title: "1. Beginner",
    summary: "Start your English learning journey",
    description: "At the beginner stage, you'll lay the foundation for your English language skills. You'll start by learning the English alphabet and basic phonetics, which will help you pronounce words correctly. You'll master common greetings and introductions, allowing you to make simple social interactions. Numbers, days of the week, and months will become part of your vocabulary, enabling you to discuss dates and quantities. You'll build a foundation of about 500 common words, covering everyday objects, actions, and concepts. Basic sentence structures (Subject + Verb + Object) will be introduced, helping you form simple statements. You'll also practice the simple present tense, allowing you to talk about routines and general truths. By the end of this stage, you'll be able to introduce yourself, engage in very basic conversations, and understand simple written and spoken English."
  },
  {
    title: "2. Elementary",
    summary: "Expand your vocabulary and grammar knowledge",
    description: "The elementary stage is where your English skills start to grow more rapidly. Your vocabulary will expand to 1000-1500 words, giving you more flexibility in expression. You'll learn irregular verbs, which are crucial for forming various tenses correctly. The present continuous and simple past tenses will be introduced, allowing you to discuss ongoing actions and past events. You'll practice forming basic questions, enabling you to seek information and engage in more interactive conversations. At this level, you'll be able to introduce yourself in more detail and participate in simple conversations about familiar topics. You'll begin reading short, simple texts like basic stories or simplified news articles. Writing skills will develop as you practice composing short, simple sentences and paragraphs. By the end of this stage, you'll have a good grasp of basic English and be able to handle everyday situations with increasing confidence."
  },
  {
    title: "3. Intermediate",
    summary: "Deepen your understanding and fluency",
    description: "The intermediate stage is where your English skills really start to take off. Your vocabulary will grow significantly, reaching 3000-4000 words, allowing you to express more complex ideas and understand a wider range of content. You'll master all basic tenses, including future and perfect tenses, giving you the ability to discuss events across various time frames with accuracy. Conditionals and passive voice will be introduced, adding sophistication to your language use. You'll practice more complex sentence structures, enabling you to express ideas with greater nuance and detail. Listening skills will improve as you engage with podcasts and English media, helping you understand different accents and speech patterns. Reading skills will advance as you tackle intermediate-level books and articles, expanding both your vocabulary and cultural knowledge. Writing skills will develop further as you compose short essays and emails, learning to structure your thoughts coherently in written form. By the end of this stage, you'll be able to communicate effectively in most everyday situations, express opinions on various topics, and understand the main points of complex texts."
  },
  {
    title: "4. Upper Intermediate",
    summary: "Refine your skills and tackle more complex topics",
    description: "At the upper intermediate stage, you'll refine your English skills and start to use the language more naturally. Your vocabulary will expand to 5000-6000 words, including more specialized and abstract terms. You'll study advanced grammar topics like reported speech and relative clauses, allowing for more sophisticated expression. Idiomatic expressions and phrasal verbs will become part of your active vocabulary, making your English sound more natural and native-like. You'll engage in debates and discussions on various topics, improving your ability to articulate complex ideas and opinions. Pronunciation and intonation will be refined, reducing your accent if desired. Your reading skills will advance to the point where you can understand newspapers and watch movies without subtitles, greatly enhancing your cultural understanding and listening comprehension. Writing skills will improve as you compose longer essays and reports, learning to structure complex arguments and ideas effectively. By the end of this stage, you'll be able to use English flexibly and effectively for social, academic, and professional purposes, with only occasional difficulties with complex or specialized topics."
  },
  {
    title: "5. Advanced",
    summary: "Polish your skills to near-native proficiency",
    description: "The advanced stage is where you polish your English skills to near-native proficiency. Your vocabulary will expand beyond 7000 words, including academic and professional terms, allowing you to communicate effectively in specialized fields. You'll master nuances in grammar and style, understanding and using subtle distinctions in meaning. Your language skills will develop to the point where you can understand and use humor, sarcasm, and subtle implications, appreciating the finer points of the language. You'll be able to participate confidently in high-level academic or professional discussions, articulating complex ideas with clarity and precision. Reading skills will advance to comprehending complex literature and academic papers, broadening your intellectual and cultural horizons. Writing skills will reach a sophisticated level, enabling you to compose nuanced essays, reports, and creative pieces with style and accuracy. If desired, you can develop a personal accent reduction plan to sound more like a native speaker. At this stage, you'll be able to express yourself spontaneously, fluently, and precisely, differentiating finer shades of meaning even in complex situations. Your English will be appropriate for all contexts, from casual conversations to formal academic or professional settings."
  },
]

export default function Start() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Start your English journey&nbsp;
          <code className="font-mono font-bold">today</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">
          Welcome to Your English Learning Journey
        </h1>
        <p className="text-2xl mb-8">
          Embark on a structured path from beginner to advanced proficiency
        </p>
        <Button asChild>
          <Link href="#roadmap">Start Learning</Link>
        </Button>
      </main>

      <section id="roadmap" className="w-full max-w-5xl mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">English Learning Roadmap: From Zero to Hero</h2>
        <div className="space-y-4">
          {stages.map((stage, index) => (
            <Card key={index} className="border-primary/20">
              <CardHeader className="cursor-pointer">
                <CardTitle className="flex justify-between items-center">
                  {stage.title}
                  <Button variant="ghost" size="icon">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CardTitle>
                <CardDescription>{stage.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{stage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </footer>
    </div>
  )
}