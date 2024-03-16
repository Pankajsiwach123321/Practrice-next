import React from "react";
import Image from "next/image";
import Link from "next/link";
const MyHello = () => {
  const data = [
    {
      img: "/image/image.jpg",
      id: 1,
      name: "Harish",
      profesion: "front-end-development",
    },
    {
      img: "/image/image.jpg",
      id: 2,
      name: "vikram",
      profesion: "UI/UX designer",
    },
    {
      img: "/image/image.jpg",
      id: 3,
      name: "Yogesh",
      profesion: "back-end-development",
    },
  ];

  return (
    <div>
      <Link
        className=" text-rose-600 p-3 bg-black border duration-300  ms-2 rounded-lg hover:bg-transparent hover:border-black  my-4 inline-block"
        href="/About"
      >
        About{" "}
      </Link>
      {data.map((obj, i) => (
        <div key={i} className=" p-5 bg-black border-[2px] max-w-[300px] mt-5">
          <Image src={obj.img} width={400} height={400} alt="hello" />
          <div className=" flex items-center gap-3">
            <p className=" text-white">{obj.id}</p>
            <p className=" text-white">{obj.name}</p>
          </div>
          <p className=" text-white">{obj.profesion}</p>
        </div>
      ))}
    </div>
  );
};

export default MyHello;
