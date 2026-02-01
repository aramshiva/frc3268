import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export type ResourceLink = {
  label: string;
  href: string;
};

export type ResourcesItem = {
  id: number;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  links: ResourceLink[];
};

type ResourcesProps = {
  sections?: ResourcesItem[];
};

export function Resources({ sections = [] }: ResourcesProps) {
  return (
    <div className="flex flex-col space-y-8">
      {sections.map((section) => (
        <div key={section.id}>
          <div className="flex items-start gap-5">
            {section.imageSrc && (
              <Image
                src={section.imageSrc}
                alt={section.imageAlt ?? ""}
                width={section.imageWidth ?? 120}
                height={section.imageHeight ?? 120}
              />
            )}
            <div>
              <p className="font-semibold text-3xl">{section.title}</p>
              {section.subtitle && <p>{section.subtitle}</p>}
            </div>
          </div>
          <ul className="mt-4 list-disc underline">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Resource() {
  const sections: ResourcesItem[] = [
    {
      id: 1,
      title: "Official FRC/vendor resources",
      subtitle: "Straight from the Source!",
      imageSrc: "/logos/first_logo.png",
      imageAlt: "FIRST Logo",
      imageWidth: 120,
      imageHeight: 120,
      links: [
        { label: "WPILib", href: "https://docs.wpilib.org/en/stable/" },
        { label: "WPILib Example Projects", href: "https://docs.wpilib.org/en/stable/docs/software/examples-tutorials/wpilib-examples.html/",},
        { label: "Wiring Guide", href: "https://firstfrc.blob.core.windows.net/frc2024/Manual/2024FRCGameManual.pdf" },
        { label: "AndyMark", href: "https://andymark.com/collections/first-robotics-competition" },
        { label: "REV Robotics", href: "https://www.revrobotics.com/" },
        { label: "CTRE Site", href: "https://store.ctr-electronics.com/" },
        { label: "Command-Based Programming Wiki", href: "https://docs.wpilib.org/en/stable/docs/software/commandbased/index.html" },
      ],
    },
    {
      id: 2,
      title: "Community",
      subtitle: "Mostly robotics-related forums",
      links: [
        { label: "The Blue Alliance", href: "https://www.thebluealliance.com/" },
        { label: "Chief Delphi", href: "https://www.chiefdelphi.com/",},
      ],
    },
    {
      id: 3,
      title: "Team Resources",
      subtitle: "Resources made by us! ",
      imageSrc: "/logos/logosquare.png",
      imageAlt: "Valhallabots Logo",
      imageWidth: 60,
      imageHeight: 60,
      links: [
        { label: "Links Slideshow", href: "https://docs.google.com/presentation/d/1uBUXaU0klhqrKfSVgvOhWwHHzq5rqm7AjAje5k9i2Tc/edit?usp=sharing" },
        { label: "ValhallaLib Repository", href: "https://github.com/frc3268/ValhallaLib"},
        { label: "ValhallaLib Swerve Module", href: "https://github.com/frc3268/ValhallaLib/blob/master/docs/swervemodule.md",},
      ],
    },
  ];

  return (
    <>
      <div className="">
        <div className="relative w-full h-100 text-white rounded-xl">
        <Image
          src="/photos/competitions/2.webp"
          alt="Inglemoor High School Robotics"
          fill
          priority
          unoptimized
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3C/svg%3E"
        />
          <div className="absolute inset-0 flex items-end mb-10">
            <div className="flex-1 flex flex-col pl-16">
              <Image
                  src="/logos/3268.svg"
                alt="Valhallabots Logo"
                width={300}
                height={120}
              />
              <p
                // this mess under here is a text shadow. it looks pretty good dont judge
                className={`${inter.className} pt-1 text-4xl font-medium [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]`}
              >
                Resources
              </p>
              <Link href="/" className="mt-2">
                <p
                  className={`${inter.className} [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] text-lg font-medium underline`}
                >
                  ← Back to Home
                </p>
              </Link>
            </div>
            <div className="flex-1" />
          </div>
        </div>
        <div className="p-16 text-2xl">
          <p className="pb-9">Here’s a (non-exclusive) list of resources we’ve made over the years:</p>
          <Resources sections={sections} />
        </div>
      </div>
    </>
  );
}
