import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CLIENTS } from "@/config/clients";

export async function Clients() {
  const t = await getTranslations("clients");

  return (
    <section aria-labelledby="clients-heading" className="border-b border-border bg-surface/30">
      <p id="clients-heading" className="px-4 pt-8 text-center text-sm font-medium text-muted">
        {t("heading")}
      </p>
      <div className="overflow-hidden mask-fade-x pt-6 pb-8">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 hover:[animation-play-state:paused]">
          {CLIENTS.map((client) => (
            <Image
              key={client.src}
              src={client.src}
              alt={client.name}
              width={client.width}
              height={client.height}
              style={{ height: client.height, width: "auto" }}
              className="opacity-70 transition-opacity hover:opacity-100"
            />
          ))}
          {CLIENTS.map((client) => (
            <Image
              key={`${client.src}-copy`}
              src={client.src}
              alt=""
              aria-hidden
              width={client.width}
              height={client.height}
              style={{ height: client.height, width: "auto" }}
              className="opacity-70 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
