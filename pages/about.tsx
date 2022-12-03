import Image from "next/image";

export default function about() {
  return (
    <Image
      src="/images/neilranada.jpg" // Route of the image file
      layout="fill"
      objectFit="contain"
      sizes="10vh"
      // height={144} // Desired size with correct aspect ratio
      // width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );
}
