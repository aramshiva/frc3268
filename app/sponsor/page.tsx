import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BadgeDollarSign,
  Cpu,
  HeartHandshake,
  Mail,
  PiggyBank,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const sponsors = [
  {
    src: "/logos/marquee/boeing.png",
    alt: "Boeing",
    href: "https://www.boeing.com",
  },
  {
    src: "/logos/marquee/firstwa.png",
    alt: "FIRST Washington",
    href: "https://firstwa.org",
  },
  {
    src: "/logos/marquee/nsd.png",
    alt: "Northshore School District",
    href: "https://www.nsd.org",
  },
  {
    src: "/logos/marquee/ospi.png",
    alt: "OSPI",
    href: "https://ospi.k12.wa.us",
  },
  {
    src: "/logos/marquee/inglemoor.png",
    alt: "Inglemoor High School",
    href: "https://inglemoor.nsd.org",
  },
];

export default function Donate() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-16">
        <div className="w-full sm:w-1/2 items-center">
          <Image
            src="/logos/logosquare.svg"
            alt="Valhallabots Logo"
            width={100}
            height={100}
            className="pb-1"
          />
          <p className="text-5xl font-medium">
            Sponsor the next generation of tech.
          </p>
          <p className="text-2xl mb-5">
            Support Inglemoor High School team robotics team,{' "'}Valhalla Bots
            {'"'}. Sponsoring is a great way for your company to provide support
            for students interested in STEM, CAD, programming, electrical, 3D
            design and more!
          </p>{" "}
          <Link href="mailto:inglemoor.robotics@gmail.com">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black hover:cursor-pointer"
            >
              <Mail className="mr-1" />
              Email Us
            </Button>
          </Link>
        </div>
        <Image
          src="/photos/competitions/3.jpg"
          alt="Competition photo"
          width={600}
          height={400}
          className="rounded-xl object-cover w-full sm:w-1/2"
        />
      </div>
      <div>
        <Marquee pauseOnHover autoFill>
          {sponsors.map((sponsor) => (
            <div key={sponsor.alt} className="mx-7">
              <Link href={sponsor.href}>
                <Image
                  src={sponsor.src}
                  width={125}
                  height={100}
                  alt={sponsor.alt}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 p-6 sm:p-16">
        <Card className="sm:w-full w-72 bg-[#FBFDF8]">
          <div className="flex flex-row items-center gap-2 font-medium pl-5">
            <BadgeDollarSign />
            <p>Tax Deductible</p>
          </div>
          <CardContent>
            <p>
              Your sponsorship is tax deductible as we are a school organization
              operating under Inglemoor High School{"'"}s Associated Student
              Body
            </p>
          </CardContent>
        </Card>
        <Card className="sm:w-full w-72 bg-[#FBFDF8]">
            <div className="flex flex-row items-center gap-2 font-medium pl-5">
            <Cpu />
            <p>Support STEM-focused students</p>
          </div>
          <CardContent>
            <p>
              Your sponsorship directly supports students interested in STEM,
              mechanical engineering, programming, electrical engineering, 3D
              design, and more!
            </p>
          </CardContent>
        </Card>
                <Card className="sm:w-full w-72 bg-[#FBFDF8]">
            <div className="flex flex-row items-center gap-2 font-medium pl-5">
            <HeartHandshake />
            <p>Local Community</p>
            </div>
          <CardContent>
            <p>
              We are a small local FRC team based in Kenmore, WA (just up the
              lake from Seattle), and your sponsorship is a great way to give
              back to your community
            </p>
          </CardContent>
        </Card>
                        <Card className="sm:w-full w-72 bg-[#FBFDF8]">
            <div className="flex flex-row items-center gap-2 font-medium pl-5">
            <PiggyBank />
            <p>Future Growth</p>
            </div>
          <CardContent>
            <p>
              Investing in today{"'"}s students helps invest in tomorrow{"'"}s
              leaders and innovators, with your support, you are directly
              contributing to the leaders of tomorrow.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
