"use client";

import { QRCode } from "react-qrcode-logo";
import { Card } from "@nextui-org/react";
import Link from "next/link";

export default function WhatsAppQRCodeCard({ phone }: { phone: string }) {
  const url = `https://wa.me/${phone.replace(" ", "")}`;
  return (
    <div>
      <Card shadow="none">
        <div className="flex flex-col items-center">
          <Link href={url}>
            <QRCode
              value={url}
              logoHeight={40}
              logoWidth={50}
              logoImage={"/pngegg.png"}
            ></QRCode>
          </Link>
          <div className="text-sm text-gray-500">Click the QR code to call</div>
        </div>
      </Card>
    </div>
  );
}
