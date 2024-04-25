import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import HelpFeedback from "./contact/page";

export default function Home() {
  return (
    <div>
      <section className="gap-2 grid grid-cols-12">
        <Card className="w-full col-span-12 ">
          <Image
            removeWrapper
            src="https://aimg8.dlssyht.cn/u/1843036/ev_user_module_content_tmp/2019_06_20/tmp1561015550_1843036_s.jpg"
            className="z-0 w-full h-full object-cover h-80 sm:h-96"
            alt="qixing members"
          />
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
            <iframe
              style={{ border: 0 }}
              src="https://v.qq.com/txp/iframe/player.html?vid=q09259fybz7"
              className="w-full h-48 sm:h-80"
              allowFullScreen={true}
            ></iframe>
          </CardBody>
        </Card>
      </section>
      <HelpFeedback />
    </div>
  );
}
