"use client";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

// @todo fix the color gen issue
function CustomizedAvatar({ name, idx }: { name: string; idx: string }) {
  console.log("idx", idx);
  return (
    <Avatar
      name={name}
      classNames={{
        base: `bg-gradient-to-br from-[#FFB157] to-[#FF705B]`,
        icon: "text-black/80",
      }}
    />
  );
}

export default function HelpFeedback() {
  return (
    <div>
      <h1 className={title()}>Contact</h1>
      <div>
        {siteConfig.contacts.map((item, idx) => (
          <Card key={idx} shadow="none">
            <CardHeader className="flex gap-3">
              <CustomizedAvatar name={item.name[0]} idx={idx.toString()} />
              <div className="text-left">
                <div>{item.name}</div>
                <div>+86 {item.phone}</div>
                <div>
                  <Link href={`mailto:${item.email}`}>{item.email}</Link>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
        <Card shadow="none">
          <CardBody>Beijing Time: 9 am - 6 am</CardBody>
        </Card>
      </div>
    </div>
  );
}
