import ReactLogo from "./components/logos/React.astro"
import TailwindLogo from "./components/logos/Tailwind.astro"
import ViteLogo from "./components/logos/Vite.astro"
import ExpressLogo from "./components/logos/Express.astro"
import MongoLogo from "./components/logos/Mongo.astro"
import MySQLogo from "./components/logos/MySQL.astro"

const logos = {
  REACT: {
    name: "React",
    icon: ReactLogo
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
  }
}

export default logos