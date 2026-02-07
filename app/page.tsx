import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BadgeInfo, BookMarked, Mail } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="">
        <div className="relative w-full h-[28rem] md:h-160 text-white rounded-xl">
        <Image
          src="/photos/competitions/1.webp"
          alt="Inglemoor High School Robotics"
          className="object-cover"
          fill
          priority
        />
          <div className="absolute inset-0 flex items-center justify-center md:justify-start">
            <div className="hidden md:block md:flex-1" />
            <div className="flex-1 flex flex-col items-center md:items-start px-6 md:pl-[6rem] md:px-0">
              <Image
                src="/logos/3268.svg"
                alt="Valhallabots Logo"
                width={250}
                height={120}
              />
              <p
                // this mess under here is a text shadow. it looks pretty good dont judge
                className={`${inter.className} pt-1 text-3xl md:text-5xl font-medium [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] text-center md:text-left`}
              >
                Inglemoor High
                <br />
                School Robotics
              </p>
              <p
                className={`${inter.className} [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] text-base md:text-3xl mt-1 font-medium text-center md:text-left`}
              >
                FRC Team #3268 AKA “Valhalla Bots”
              </p>
              <div className="pt-5 flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
                {/* buttons */}
                <Link href="mailto:inglemoor.robotics@gmail.com">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black hover:cursor-pointer"
                  >
                    <Mail className="mr-1" />
                    Email Us
                  </Button>
                </Link>
                <Link href="/sponsor" target="_blank">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black hover:cursor-pointer"
                  >
                    <BadgeInfo className="mr-1" />
                    Sponsor Info
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button
                    size="lg"
                    className="text-black hover:cursor-pointer"
                    variant="outline"
                  >
                    <BookMarked className="mr-1" />
                    Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* under header */}
        <div className="text-xl md:text-2xl p-6 md:p-20 w-[65%] m-auto">
          <p>
            <span className="font-semibold">Hey there!</span>
            <br /> We{"'"}re the Inglemoor High School Robotics Team. Our goal
            is simple, to have fun building robots. We{"'"}re based in Kenmore,
            Washington (east of Seattle!).
          </p>
          <p className="mt-6 md:mt-9">
            We compete in FRC, the FIRST Robotics Competition. Which entails
            building a robot to complete a set challenge in only 6 weeks!
          </p>

          <div className="flex flex-col md:flex-row w-full">
            <p className="w-full md:w-4/8 pt-6 md:pt-9">
              Blink and you might miss it! We participate in two yearly
              competitions, which we attend on March 13th and 20th, where we
              showcase our robot, field it with and against teams across the
              PNW!
            </p>
            <div className="w-full md:w-4/8 relative h-60 md:h-80 mb-8 md:mb-16 mt-6 md:mt-0">
              <img
                src="/photos/frame1.webp"
                alt="Team photo 1"
                className="absolute -rotate-6 left-0 top-0 drop-shadow-lg hover:scale-102 transition-all w-48 md:w-80"
              />
              <img
                src="/photos/frame2.webp"
                alt="Team photo 2"
                className="absolute rotate-6 left-32 md:left-54 top-8 drop-shadow-lg hover:scale-102 transition-all w-48 md:w-80"
              />
            </div>
          </div>
          <div>
            <p className="font-semibold">NSD Student looking to join?</p>
            <p>
              We gladly accept new member who attend the Northshore School
              District (per school policy) to our team. We meet on Mondays,
              Wednesdays and Thursdays, after school, both during and outside
              the 6-week “build season” in room 301 (near the gym and art
              buildings)! We strongly recommend attending all meetings, as they
              help skill building and demonstrate commitment (something we value
              a lot)!
            </p>
            <div className="mt-5">
              <span>
                The 2026 FRC season theme is{" "}
                <Link href="https://www.firstinspires.org/programs/frc/game-and-season" className="inline-block align-middle">
                  <Image
                      className="inline-block"
                      src="/logos/rebuilt.png"
                      alt="rebuilt logo"
                      width={80}
                      height={20}
                  />
                </Link>.
              </span>
              <br/>
              Generally, we meet 4-5 days a week during the build season,
              due to the increased workload that it brings.
              You can learn more about this year’s theme on the Resources page.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
