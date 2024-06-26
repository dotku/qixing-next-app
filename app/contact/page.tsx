"use client";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

// @todo fix the color gen issue
function CustomizedAvatar({
  name,
  avatar,
  idx,
}: {
  name: string;
  avatar: string;
  idx: string;
}) {
  const base = `bg-gradient-to-br from-[#FFB157] to-[#FF705B]`;
  console.log("base", base);
  return (
    <Avatar
      name={name}
      src={avatar}
      classNames={{
        base,
        icon: "text-black/80",
      }}
    />
  );
}

export default function HelpFeedback() {
  return (
    <div>
      <div className="mb-8">
        <h1 className={title()}>Contact</h1>
      </div>
      <div className="gap-2 grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6">
          <h2 className="text-3xl">Address</h2>
          <Card shadow="none">
            <CardBody>
              <div>202 Shangmei Science and Technology</div>
              <div>2009 Shahexi Road</div>
              <div>Shenzhen City</div>
              <div>Guangdong Province</div>
              <div>China</div>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <h2 className="text-3xl ">Team</h2>
          {siteConfig.contacts.map((item, idx) => (
            <Card key={idx} shadow="none">
              <CardHeader className="flex gap-3">
                <Link href={`/contact/${item.name.toLowerCase()}`}>
                  <CustomizedAvatar
                    name={item.name[0]}
                    idx={idx.toString()}
                    avatar={item.avatar || ""}
                  />
                </Link>
                <div className="text-left">
                  <div>{item.name}</div>
                  <div>{item.phone}</div>
                  <div>
                    <Link href={`mailto:${item.email}`}>{item.email}</Link>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
