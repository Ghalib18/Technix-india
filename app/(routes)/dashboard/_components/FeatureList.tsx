import Image from "next/image";
import Link from "next/link";
import React from "react";

const Features = [
  {
    id: 1,
    title: 'AI Thumbnail Generator',
    image: "/feature1.png",
    path: "ai-thumbnail-generator"
  },
  {
    id: 2,
    title: "AI Thumbnail Search",
    image: "/feature2.png",
    path: "ai-thumbnail-search"
  },
  {
    id: 3,
    title: "Outlier",
    image: "/feature3.png",
    path: "outlier"
  },
  {
    id: 4,
    title: "Content Generator",
    image: "/feature4.png",
    path: "content-generator",
    
  },
  {
    id: 5,
    title: "Trending Keywords",
    image: "/feature5.png",
    path: "trending-keywords",
  },
  {
    id: 6,
    title: "Optimise Video",
    image: "/feature6.png",
    path: "optimise-video",
  }
]

const FeatureList = () => {
  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl mb-4">AI Tools</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {Features.map((feature, index) => (
          <Link href={feature.path} key={index}>
            <Image
              src={feature.image}
              alt={feature.title}
              width={200}
              height={200}
              className="w-full object-cover aspect-video rounded-xl hover:scale-105 transition-all cursor-pointer"

            />
          </Link>
        ))}
      </div>
      
    </div>
  )
};

export default FeatureList;

