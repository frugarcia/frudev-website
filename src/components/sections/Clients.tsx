import { getTranslations } from "next-intl/server";
import { CLIENTS } from "@/config/clients";

export async function Clients() {
  const t = await getTranslations("clients");

  return (
    <section aria-label={t("label")} className="border-b border-border bg-surface/30">
      <div className="overflow-hidden mask-fade-x py-8">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 hover:[animation-play-state:paused]">
          {CLIENTS.map((client) => (
            <img
              key={client.src}
              src={client.src}
              alt={client.name}
              width={client.width}
              height={client.height}
              style={{ height: client.height }}
              className="w-auto opacity-70 transition-opacity hover:opacity-100"
            />
          ))}
          {CLIENTS.map((client) => (
            <img
              key={`${client.src}-copy`}
              src={client.src}
              alt=""
              aria-hidden
              width={client.width}
              height={client.height}
              style={{ height: client.height }}
              className="w-auto opacity-70 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
