import Image from "next/image";

const ClientsSection: React.FC = () => {
  const clients = [
    { src: "/images/okx.jpg", twitter: "https://x.com/okx" },
    { src: "/images/U9nykgto.jpg", twitter: "https://x.com/SeedifyFund" },
    { src: "/images/JQhv0G7n_400x400.jpg", twitter: "https://x.com/CocaCola" },
    {
      src: "/images/hoiY8lw7_400x400.jpg",
      twitter: "https://x.com/DeadKingSociety/media",
    },
    { src: "/images/MApYDPxJ_400x400.jpg", twitter: "https://x.com/scopenft" },
    {
      src: "/images/zMO_5G7i_400x400.jpg",
      twitter: "https://x.com/CostaCoffee",
    },
    {
      src: "/images/cjab8YLf_400x400.jpg",
      twitter: "https://x.com/aika_verse",
    },
    {
      src: "/images/client1.jpg",
      twitter: "https://x.com/FoxKidsNetwork",
    },
    {
      src: "/images/Ng-mnbQ0_400x400.jpg",
      twitter: "https://x.com/Hawksnest_sol",
    },
    {
      src: "/images/FBQWKnR4_400x400.jpg",
      twitter: "https://x.com/EclipseFND",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-gray-800 mb-6">
          Thank You For Letting Us Be A Part Of Building Your Brand
        </h2>

        <p className="text-gray-500 mb-8">Projects We Have Worked With</p>

        {/* Grid layout for responsiveness */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-36 w-36 sm:h-40 sm:w-40 mx-auto hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={client.src}
                alt="Client Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
