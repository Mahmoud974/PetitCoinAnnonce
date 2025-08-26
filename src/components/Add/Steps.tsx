import Image from "next/image";
import Link from "next/link";

export default function Steps() {
  const solutions = [
    {
      title: "1",
      image: "/1.jpg",
      link: "/pompes-a-chaleur",
      description:
        "Choisissez la catégorie qui correspond à votre annonce puis cliquez sur 'Déposer mon annonce'.",
    },
    {
      title: "2",
      image: "/2.jpg",
      link: "/chauffage",
      description:
        "Ajoutez tous les détails de votre annonce : titre accrocheur, prix, description, photos et votre localisation.",
    },
    {
      title: "3",
      image: "/3.jpg",
      link: "/climatisation",
      description:
        "Indiquez vos coordonnées : votre nom, numéro de téléphone (vous avez l'option de le cacher si nécessaire).",
    },
    {
      title: "4",
      image: "/4.jpg",
      link: "/plomberie",
      description:
        "Validez et publiez votre annonce, elle est maintenant en ligne !",
    },
  ];

  return (
    <div className="container mx-auto mt-24 max-w-7xl">
      <div className="flex">
        <div className="w-2 bg-red-600 h-auto mr-3"></div>
        <div>
          <h1 className="text-2xl font-bold">
            Vends tes articles gratuite en 4 étapes !
          </h1>
          <p>
            Publier une annonce sur ParuVendu.fr est rapide et facile. Suivez
            ces 4 étapes simples pour vendre ou acheter.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="max-w-7xl cursor-pointer mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Link href={solution.link}>
                <Image
                  src={solution.image}
                  alt={"image de " + solution.title}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl bg-red-600 w-full text-center font-bold">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-center">{solution.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
