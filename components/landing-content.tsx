"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Evan",
    avatar: "E",
    title: "Web Developer",
    description: "This is the best application I've used!",
  },
  {
    name: "John",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best AI tool I've used!",
  },
  {
    name: "Emily",
    avatar: "E",
    title: "Designer",
    description: "This is one of the best AI tools if not the best.",
  },
  {
    name: "Daniel",
    avatar: "D",
    title: "Web Designer",
    description: "This is the best tool for my projects.",
  },
  {
    name: "Anna",
    avatar: "A",
    title: "Sale Representative",
    description: "This is the best application!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
