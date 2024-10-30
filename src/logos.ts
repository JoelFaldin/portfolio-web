import ReactLogo from "./components/logos/React.astro"
import TypeScriptLogo from "./components/logos/TS.astro"
import TailwindLogo from "./components/logos/Tailwind.astro"
import ViteLogo from "./components/logos/Vite.astro"
import ExpressLogo from "./components/logos/Express.astro"
import MongoLogo from "./components/logos/Mongo.astro"
import MySQLogo from "./components/logos/MySQL.astro"
import NestJS from "./components/logos/NestJS.astro"
import Prisma from "./components/logos/Prisma.astro"

const logos = {
  REACT: {
    name: "React",
    icon: ReactLogo
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypeScriptLogo
  },
  TAILWIND: {
    name: "Tailwind",
    icon: TailwindLogo
  },
  VITE: {
    name: "ViteJS",
    icon: ViteLogo
  },
  EXPRESS: {
    name: "ExpressJS",
    icon: ExpressLogo
  },
  MONGO: {
    name: "MongoDB",
    icon: MongoLogo
  },
  MYSQL: {
    name: "MySQL",
    icon: MySQLogo
  },
  NestJS: {
    name: 'NestJS',
    icon: NestJS
  },
  Prisma: {
    name: 'PrismaORM',
    icon: Prisma
  }
}

export default logos