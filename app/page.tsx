import Projects from "@/components/Projects";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaTwitch } from "react-icons/fa";
function Home() {
  return (
    <>
      <main className="flex-1">
        <section className="h-[calc(100vh-400px)] w-screen py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex h-full items-center justify-center px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Samuel Gonzalez
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Programmer. Twitch Streamer. Tech Enthusiast.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#contact">
                  <Button>Contact Me</Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline">View Projects</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full bg-gray-100 py-12 dark:bg-primary-foreground md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="space-y-4 md:w-1/2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Hi, I&apos;m Samuel Gonzalez, a passionate programmer and
                  Twitch streamer. With 5 years of experience in full-stack
                  development, I love creating innovative solutions and sharing
                  my knowledge with the community through live coding sessions.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  My goal is to bridge the gap between coding and content
                  creation, making technology more accessible and engaging for
                  everyone.
                </p>
                {/* <p className="text-gray-500 dark:text-gray-400">
                  I also dabble a little into gaming, and some games I play are
                  <ul>
                    <li>- Genshin Impact</li>
                    <li>- Minecraft</li>
                    <li>- Roblox</li>
                    <li>- Gartic Phone</li>
                  </ul>
                </p> */}
              </div>
              <div className="mt-6 md:mt-0 md:w-1/3">
                <Avatar className="mx-auto h-48 w-48">
                  <AvatarImage
                    alt="John Doe"
                    src="/avatar.jpg"
                    className="object-cover"
                  />
                  <AvatarFallback>Samuel Gonzalez</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Python</Badge>
                    <Badge>SQL</Badge>
                    <Badge>Git</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Prisma</Badge>
                    <Badge>Sanity</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Communication</Badge>
                    <Badge variant="secondary">Problem Solving</Badge>
                    <Badge variant="secondary">Teamwork</Badge>
                    <Badge variant="secondary">Time Management</Badge>
                    <Badge variant="secondary">Adaptability</Badge>
                    <Badge variant="secondary">Creativity</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="w-full bg-gray-100 py-12 dark:bg-primary-foreground md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projects
            </h2>
            <div className="relative">
              <Projects />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto flex flex-col items-center px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Twitch Stream
            </h2>
            <div className="aspect-video w-full">
              <iframe
                src="https://player.twitch.tv/?channel=iampepepapi&parent=localhost"
                allowFullScreen
                className="overflow-visible rounded-xl"
                height="100%"
                width="100%"
              ></iframe>
            </div>
            <div className="mt-4">
              <Link href="https://www.twitch.tv/iampepepapi">
                <Button>
                  <FaTwitch className="mr-2 h-4 w-4" />
                  Follow on Twitch
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full bg-gray-100 py-12 dark:bg-primary-foreground md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Me
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Get in Touch</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Feel free to reach out for collaborations, questions, or just
                  to say hi!
                </p>
                <div className="flex space-x-4">
                  <Link href="https://github.com/yourusername">
                    <Button variant="outline" size="icon">
                      <FaGithub className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/yourusername">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com/yourusername">
                    <Button variant="outline" size="icon">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="mailto:your.email@example.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Send a Message</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
