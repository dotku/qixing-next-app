import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardBody } from "@nextui-org/react";
import HelpFeedback from "./contact/page";
import TrailerVideo from "@/components/Marketing/TrailerVideo";
import HeroBanner from "@/components/Marketing/HeroBanner";

export default function Home() {
  return (
    <div>
      <section className="gap-2 grid grid-cols-12">
        <Card className="w-full col-span-12 ">
          <HeroBanner />
        </Card>
      </section>
      <section className="gap-2 grid grid-cols-12 mt-8">
        <Card className="w-full col-span-12 sm:col-span-6" shadow="none">
          <CardBody className="text-xl font-light">
            <div>
              <p className="pb-2">
                <span>
                  <strong>
                    <span className="font-medium text-amber-600">
                      QiXing AuPair
                    </span>{" "}
                  </strong>
                </span>
                <span>is an international agency based in Shenzh</span>
                <span>
                  en, China, committed to promoting cultural exchange between
                  China and the rest of the world.
                </span>
              </p>
              <p className="">
                <span>
                  <strong>
                    <span className="font-medium text-amber-600">
                      QiXing AuPair
                    </span>{" "}
                  </strong>
                  <span>
                    offers a variety of programs for foreign young people who
                    are hoping to come to China and experience Chinese
                    culture/language as an Au Pair or English teacher for
                    internship.{" "}
                  </span>
                  <span>
                    We also provide these programs to Chinese students who want
                    to go abroad to experience a different culture and
                    lifestyle.
                  </span>
                </span>
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="w-full col-span-12 sm:col-span-6" shadow="none">
          <CardBody className="flex items-center content-center">
            <TrailerVideo />
          </CardBody>
        </Card>
      </section>
      <HelpFeedback />
    </div>
  );
}
