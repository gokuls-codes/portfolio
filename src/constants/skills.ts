import CppIcon from "@/resources/icons/cpp.svg";
import CssIcon from "@/resources/icons/css.svg";
import DjangoIcon from "@/resources/icons/django.svg";
import FirebaseIcon from "@/resources/icons/firebase.svg";
import GoIcon from "@/resources/icons/go.svg";
import HtmlIcon from "@/resources/icons/html.svg";
import JavaIcon from "@/resources/icons/java.svg";
import JavascriptIcon from "@/resources/icons/js.svg";
import MongoIcon from "@/resources/icons/mongo.svg";
// import MysqlIcon from "@/resources/icons/mysql.svg";
import NextIcon from "@/resources/icons/next.svg";
// import PostgresIcon from "@/resources/icons/postgres.svg";
import PythonIcon from "@/resources/icons/python.svg";
import ReactIcon from "@/resources/icons/react.svg";
import SpringIcon from "@/resources/icons/spring.svg";
import TailwindIcon from "@/resources/icons/tailwind.svg";
import TypescriptIcon from "@/resources/icons/ts.svg";
import RaspberryIcon from "@/resources/icons/raspberry.svg";
import FigmaIcon from "@/resources/icons/figma.svg";
import VscodeIcon from "@/resources/icons/vscode.svg";
import AwsIcon from "@/resources/icons/aws.svg";
import LinuxIcon from "@/resources/icons/linux.svg";
import GitIcon from "@/resources/icons/git.svg";
import HtmxIcon from "@/resources/icons/htmx.svg";
// import ViteIcon from "@/resources/icons/vite.svg";
// import ReduxIcon from "@/resources/icons/redux.svg";
import ElectronIcon from "@/resources/icons/electron.svg";
import NodeIcon from "@/resources/icons/node.svg";
import { Database } from "lucide-react";

const SKILLS = [
  "Frontend Development",
  "Backend Development",
  "Problem Solving",
  "Data Structures",
  "Algorithms",
  "System Design",
  "Machine Learning",
  "UI/UX Design",
];

const LANGUAGES = [
  {
    name: "Golang",
    icon: GoIcon,
    url: "https://go.dev/",
  },
  {
    name: "JavaScript",
    icon: JavascriptIcon,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: TypescriptIcon,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    icon: PythonIcon,
    url: "https://www.python.org/",
  },
  {
    name: "SQL",
    icon: Database,
    url: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    name: "C++",
    icon: CppIcon,
    url: "https://isocpp.org/",
  },
  {
    name: "Java",
    icon: JavaIcon,
    url: "https://www.java.com/",
  },
  {
    name: "HTML",
    icon: HtmlIcon,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: CssIcon,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

const FRAMEWORKS = [
  {
    name: "Next JS",
    icon: NextIcon,
    url: "https://nextjs.org/",
  },
  {
    name: "React JS",
    icon: ReactIcon,
    url: "https://reactjs.org/",
  },
  {
    name: "Django",
    icon: DjangoIcon,
    url: "https://www.djangoproject.com/",
  },
  {
    name: "React Native",
    icon: ReactIcon,
    url: "https://reactnative.dev/",
  },
  {
    name: "Spring Boot",
    icon: SpringIcon,
    url: "https://spring.io/projects/spring-boot",
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Electron",
    icon: ElectronIcon,
    url: "https://www.electronjs.org/",
  },
  {
    name: "Node JS",
    icon: NodeIcon,
    url: "https://nodejs.org/",
  },
  {
    name: "HTMX",
    icon: HtmxIcon,
    url: "https://htmx.org/",
  },
];

const OTHERS = [
  {
    name: "Firebase",
    icon: FirebaseIcon,
    url: "https://firebase.google.com/",
  },
  {
    name: "Git",
    icon: GitIcon,
    url: "https://git-scm.com/",
  },
  {
    name: "VS Code",
    icon: VscodeIcon,
    url: "https://code.visualstudio.com/",
  },
  {
    name: "Mongo DB",
    icon: MongoIcon,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Linux",
    icon: LinuxIcon,
    url: "https://www.linux.org/",
  },
  {
    name: "AWS",
    icon: AwsIcon,
    url: "https://aws.amazon.com/",
  },
  {
    name: "Raspberry Pi",
    icon: RaspberryIcon,
    url: "https://www.raspberrypi.org/",
  },
  {
    name: "Figma",
    icon: FigmaIcon,
    url: "https://www.figma.com/",
  },
];

export { LANGUAGES, FRAMEWORKS, OTHERS, SKILLS };
