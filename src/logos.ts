import ExpressLogo from "./components/logos/ExpressLogo.astro";
import MySQLogo from "./components/logos/MySQLogo.astro";
import NestJSLogo from "./components/logos/NestJSLogo.astro";
import NextJSLogo from "./components/logos/NextJSLogo.astro";
import PostgreSQLogo from "./components/logos/PostgreSQLogo.astro";
import PrismaLogo from "./components/logos/PrismaLogo.astro";
import ReactLogo from "./components/logos/ReactLogo.astro";
import TailwindLogo from "./components/logos/TailwindLogo.astro";
import TypeScriptLogo from "./components/logos/TypeScriptLogo.astro";
import ViteLogo from "./components/logos/ViteLogo.astro";
import VueLogo from "./components/logos/VueLogo.astro";

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
    MYSQL: {
        name: "MySQL",
        icon: MySQLogo
    },
    NESTJS: {
        name: 'NestJS',
        icon: NestJSLogo
    },
    PRISMA: {
        name: 'PrismaORM',
        icon: PrismaLogo
    },
    NEXTJS: {
        name: 'NextJS',
        icon: NextJSLogo
    },
    VUE: {
        name: 'Vue',
        icon: VueLogo
    },
    POSTGRESQL: {
        name: 'PostgreSQL',
        icon: PostgreSQLogo
    }
}

export const logoList = [logos.REACT, logos.VUE, logos.VITE, logos.NEXTJS, logos.EXPRESS, logos.NESTJS, logos.TAILWIND, logos.TYPESCRIPT, logos.MYSQL, logos.POSTGRESQL];

export default logos;