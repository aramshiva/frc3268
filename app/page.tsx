import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BadgeInfo, BookMarked, Mail } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="px-6">
        <div className="px-6 md:px-20 pb-6 pt-20 md:pt-0 flex flex-col sm:flex-row items-center gap-6">
          <div>
          <div className="w-full sm:w-1/2 items-center">
            <Image
                src="/logos/3268orange.png"
                alt="Valhallabots Logo"
                width={250}
                height={120}
            />
            <p className="text-5xl font-medium">
              Inglemoor High School Robotics
            </p>
            <p className="text-2xl mb-5 mt-2">
              FRC Team #3268 AKA “Valhalla Bots”
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
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
            <Link href="/sponsor">
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
          <Image
              src="/photos/competitions/1.webp"
              alt="Competition photo"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full sm:w-1/2"/>
        </div>
        {/* under header */}
        <div className="text-xl md:text-2xl w-full md:w-[75%] m-auto justify-center p-16">
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

          <div className="flex flex-col md:flex-row justify-between gap-5">
            <p className="overflow-auto pt-6 md:pt-9 md:w-100 hometext">
              Blink and you might miss it! We participate in two yearly
              competitions, which we attend on March 13th and 20th, where we
              showcase our robot, field it with and against teams across the
              PNW!
            </p>
            <div className="w-full relative h-60 md:h-80 mb-8 md:mb-16 mt-6 md:mt-0">
              <img
                src="/photos/frame1.webp"
                alt="Team photo 1"
                className="absolute -rotate-6 left-0 top-0 drop-shadow-lg hover:scale-102 transition-all w-48 md:w-80"
              />
              <img
                src="/photos/frame2.webp"
                alt="Team photo 2"
                className="absolute rotate-6 left-16 md:left-54 top-8 drop-shadow-lg hover:scale-102 transition-all w-48 md:w-80"
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
