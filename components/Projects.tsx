import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const ProjectCard = [
  {
    title: "Dynamic Engineering",
    short_desc: "Official Website",
    img: "/dynamic_logo_color.jpeg",
    desc: "Built with Next.js, React, Node.js, shadcnui and Tailwindcss Features include article based cms, great layout and better design",
    demo: "https://dynamic-engineering.vercel.app/",
    github: "https://github.com/iampepepapi/dynamic-engineering",
  },
];

function Projects() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {ProjectCard.map((project, index) => (
        <Card key={index} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.short_desc}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="mb-4 aspect-square overflow-hidden rounded-3xl">
              <Image
                width={500}
                height={500}
                src={project.img}
                alt={project.title}
                className="h-full w-full overflow-hidden rounded-3xl object-cover"
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {project.desc}
            </p>
          </CardContent>
          <CardFooter className="mt-4 flex justify-between">
            <Link href={project.demo}>
              <Button variant="outline">Demo</Button>
            </Link>
            <Link href={project.github}>
              <Button>
                <FaGithub className="mr-2 h-4 w-4" />
                Code
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
