import Image from "next/image"
import { useState, useEffect } from "react";
export const Loader = () => {
  const didYouKnowList = [
    "The circulatory system is more than 60,000 miles long.",
    "The bumblebee bat is the world’s smallest mammal.",
    "The world's largest desert is Antarctica.",
    "Sudan has more pyramids than any country in the world.",
    "The world’s oldest wooden wheel has been around for more than 5,000 years.",
    "Dead skin cells are a main ingredient in household dust.",
    "There are parts of Africa in all four hemispheres.",
    "The cornea is one of only two parts of the human body without blood vessels.",
    "The world’s first animated feature film was made in Argentina.",
    "The Philippines consists of 7,641 islands.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896; Zanzibar surrendered after 38 minutes.",
    "The first person processed at Ellis Island was a 15-year-old girl from Ireland.",
    "Fact: Lemons float, but limes sink.",
    "Koalas sleep for an average of 20 hours a day.",
    "A cow-bison hybrid is called a beefalo.",
    "The longest English word is 189,819 letters long.",
    "That tiny pocket in jeans was designed to store pocket watches.",
    "The man with the world’s deepest voice can make sounds humans can’t hear.",
    "There were active volcanoes on the moon when dinosaurs were alive.",
    "The # symbol isn’t officially called hashtag or pound.",
    "Giraffe tongues can be 20 inches long.",
    "The Eiffel Tower can grow more than six inches during the summer.",
    "Sloths have more neck bones than giraffes.",
    "The longest river in the world is the Yangtze River.",
    "Bees can fly higher than Mount Everest.",
    "Steve Jobs, Steve Wozniak, and Ron Wayne started Apple Inc. on April Fools’ Day.",
    "Penicillin was first called “mold juice.",
    "Neil Armstrong’s hair was sold in 2004 for $3,000.",
    "75% of the world’s diet is produced from just 12 plants and five different animal species.",
    "The British Pound is the world’s oldest currency still in use at 1,200 years old.",
    "Without saliva, humans are unable to taste food.",
    "Of the 70% of water covering the Earth, only 3% of it is fresh, and the other 97% of it is salted.",
    "The most expensive domain name ever sold was cars.com for $872.3 million.",
    "Australia is wider than the moon.",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
    "A single rainforest can produce 20% of the Earth's oxygen.",
    "Bananas are berries, but strawberries aren't.",
    "An ostrich's eye is bigger than its brain.",
    "The longest word in the English language without a vowel is 'rhythms'.",
    "The continent of Africa is in all four hemispheres.",
    "The world's oldest known recipe is for beer.",
    "The longest hiccuping spree lasted for 68 years.",
    "Honey never spoils; archaeologists found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "Hot water will turn into ice faster than cold water.",
    "The printing press, which revolutionized the sharing of information, was invented by Gutenberg around the year 1440.",
    "Egypt is classified as the oldest country in the world, dating back to 3100 BCE.",
    "It’s impossible to hum while holding your nose.",
    "An octopus has three hearts: two pump blood to the gills, and one pumps it to the rest of the body.",
    "Blue whale tongues can weigh as much as an elephant.",
    "An adult human is made up of approximately 7,000,000,000,000,000,000,000,000,000 (7 octillion) atoms.",
    "The world's largest desert is Antarctica.",
    "Honeybees can recognize human faces.",
  ];

  const initialRandomIndex = Math.floor(Math.random() * didYouKnowList.length);
  const [randomDidYouKnow, setRandomDidYouKnow] = useState<string>(
    didYouKnowList[initialRandomIndex]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * didYouKnowList.length);
      setRandomDidYouKnow(didYouKnowList[randomIndex]);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [didYouKnowList]);
  
  
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="Logo"
          src="/logo.png"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Renderfy is thinking...
      </p>
      <div className="w-96 text-sm text-muted-foreground p-6 rounded-md shadow-md transition duration-500 mx-auto text-center bg-gradient-to-br from-sky-600 to-emerald-200">
      <p className="text-black font-bold text-lg mb-2">Did you know?</p>
      <p className="text-gray-800">{randomDidYouKnow}</p>
    </div>
    </div>
  );
};
