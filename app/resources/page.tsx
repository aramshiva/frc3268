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
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
            {section.imageSrc && (
              <Image
                src={section.imageSrc}
                alt={section.imageAlt ?? ""}
                width={section.imageWidth ?? 120}
                height={section.imageHeight ?? 120}
                className="flex-shrink-0 object-contain"
              />
            )}
            <div className="text-center sm:text-left">
              <p className="font-semibold text-xl sm:text-3xl">{section.title}</p>
              {section.subtitle && <p className="text-sm sm:text-base">{section.subtitle}</p>}
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
      imageSrc: "/logos/logosquare.svg",
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
      <div className="p-6">
        <div className="p-6 md:px-20 md:pb-20 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full sm:w-1/2 items-center">
            <p className="text-5xl font-medium">
              Resources
            </p>
            <p className="text-2xl mb-5 mt-2">
              A list of resources for new prospects, current team members, and anyone else interested in learning more about FRC and robotics in general!
            </p>
          </div>
          <Image
              src="/photos/2.jpg"
              alt="Competition photo"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full sm:w-1/2"/>
        </div>
        <div className="p-6 sm:p-16 text-lg sm:text-2xl">
          <p className="pb-6 sm:pb-9">Here’s a (non-exclusive) list of resources we’ve made over the years:</p>
          <Resources sections={sections} />
        </div>
      </div>
    </>
  );
}
