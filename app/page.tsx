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
        <div className="relative w-full h-160 text-white rounded-xl">
          <Image
            src="/photos/competitions/1.webp"
            alt="Inglemoor High School Robotics"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="flex-1" />
            <div className="flex-1 flex flex-col pl-[6rem]">
              <Image
                src="/logos/3268.png"
                alt="Valhallabots Logo"
                width={300}
                height={120}
              />
              <p
                // this mess under here is a text shadow. it looks pretty good dont judge
                className={`${inter.className} pt-1 text-5xl font-medium [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]`}
              >
                Inglemoor High
                <br />
                School Robotics
              </p>
              <p
                className={`${inter.className} [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] text-2xl mt-1 font-medium`}
              >
                FRC Team #3268 AKA “Valhalla Bots”
              </p>
              <div className="pt-5 space-x-4">
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
                <Link href="/donate">
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
        <div className="text-4xl p-20">
          <p>
            <span className="font-semibold">Hey there!</span>
            <br /> We{"'"}re the Inglemoor High School Robotics Team. Our goal
            is simple, to have fun building robots. We{"'"}re based in Kenmore,
            Washington (east of Seattle!).
          </p>
          <p className="mt-9">
            We compete in FRC, the FIRST Robotics Competition. Which entails
            building a robot to complete a set challenge in only 6 weeks!
          </p>

          <div className="flex w-full">
            <p className="w-4/8 pt-9">
              Blink and you might miss it! We participate in two yearly
              competitions, which we attend on March 13th and 20th, where we
              showcase our robot, field it with and against teams across the
              PNW!
            </p>
            <div className="w-4/8 relative h-80 mb-16">
              <img
                src="/photos/frame1.webp"
                alt="Team photo 1"
                width={320}
                height={360}
                className="absolute -rotate-6 left-0 top-0 drop-shadow-lg hover:scale-102 transition-all"
              />
              <img
                src="/photos/frame2.webp"
                alt="Team photo 2"
                width={320}
                height={360}
                className="absolute rotate-6 left-54 top-8 drop-shadow-lg hover:scale-102 transition-all"
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
              <div className="flex items-center gap-5">
                <span>The 2026 FRC season theme is</span>
                <Link href="https://www.firstinspires.org/programs/frc/game-and-season">
                  <Image
                      className="inline-block"
                      src="/logos/rebuilt.png"
                      alt="rebuilt logo"
                      width={100}
                      height={100}
                  />
                </Link>
                </div>
              Generally, we meet 4-5 days a week during the season,
              due to the increased workload that the build season brings.
              You can learn more about this year’s theme on the Resources page.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
