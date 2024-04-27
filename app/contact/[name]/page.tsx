"use client";

import WhatsAppQRCodeCard from "@/components/WhatsApp/WhatsAppQRCodeCard";
import { siteConfig } from "@/config/site";
import { Card, CardBody, CardHeader, Divider, User } from "@nextui-org/react";
import Link from "next/link";

const Email = ({ email }: { email: string }) => (
  <div>
    <div className="text-gray-300">Email</div>
    <div className="ms-4">
      <Link href={`mailto:${email}`}>{email}</Link>
    </div>
  </div>
);

const Phone = ({ phone }: { phone: string }) => (
  <div>
    <div className="text-gray-300">Phone</div>
    <div className="ms-4">
      <Link href={`tel:${phone}`}>{phone}</Link>
    </div>
  </div>
);

export default function ContactName({ params }: { params: { name: string } }) {
  const name = decodeURI(params.name);
  const contact = siteConfig.contacts.find((item) =>
    item.name.toLowerCase().includes(name)
  );

  return contact ? (
    <div>
      <Card className="w-80 pb-4">
        <CardHeader>
          <User
            name={contact.name}
            description={contact.title}
            avatarProps={{ src: contact.avatar }}
          />
        </CardHeader>
        <CardBody>
          {contact.wa ? (
            <>
              <WhatsAppQRCodeCard phone={contact.wa} />
              <Divider className="my-4" />
            </>
          ) : null}

          {contact.phone ? <Phone phone={contact.phone} /> : null}
          {contact.email ? <Email email={contact.email} /> : null}
        </CardBody>
      </Card>
    </div>
  ) : (
    <div>Contact {name} not found</div>
  );
}
