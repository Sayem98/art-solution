import Image from "next/image";

const ClientsSection: React.FC = () => {
  const clients = [
    { src: "/okx.jpg", twitter: "https://x.com/okx" },
    { src: "/U9nykgto.jpg", twitter: "https://x.com/SeedifyFund" },
    { src: "/JQhv0G7n_400x400.jpg", twitter: "https://x.com/CocaCola" },
    {
      src: "/hoiY8lw7_400x400.jpg",
      twitter: "https://x.com/DeadKingSociety/media",
    },
    { src: "/MApYDPxJ_400x400.jpg", twitter: "https://x.com/scopenft" },
    // Add more clients with their respective Twitter URLs
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-gray-800 mb-6">
          Thank You For Letting Us Be A Part Of Building Your Brand
        </h2>

        <p className="text-gray-500 mb-8">Projects We Have Worked With</p>
        <div className="flex  gap-4 items-center justify-center">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-16 w-32 hover:scale-105 transition-transform duration-200"
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
