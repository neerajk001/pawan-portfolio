import Image from 'next/image'

export default function Heading() {
  return (
   <div className="flex justify-center">
  <div className="w-full lg:w-[70%] max-w-[500px]">
    <Image
      src="/heading.png"
      alt="Example"
      width={500}
      height={300}
      className="w-full h-auto object-contain p-6"
    />
  </div>
</div>


  )
}
