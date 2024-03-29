import { StarIcon } from "@heroicons/react/24/solid";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function StarSkeleton({ w }: any) {
  return (
    <div className="flex">
      <div
        className={`${shimmer} relative flex overflow-hidden shadow-sm rounded-full`}
      >
        <StarIcon className={`w-${w} text-[#00000020]`} />
        <StarIcon className={`w-${w} text-[#00000020]`} />
        <StarIcon className={`w-${w} text-[#00000020]`} />
        <StarIcon className={`w-${w} text-[#00000020]`} />
        <StarIcon className={`w-${w} text-[#00000020]`} />
      </div>
    </div>
  );
}

export function ProductDetailsPage() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center">
      <div
        className={`${shimmer} relative w-[90%] h-[400px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-xl bg-[#ffffff15] p-4 shadow-sm`}
      >
        <div className="flex items-center w-[100%] h-[100%] justify-center truncate rounded-xl bg-[#00000008] lg:w-[100%] lg:h-[100%] p-4"></div>
      </div>
      <div
        className={`hidden lg:flex flex-col items-center w-[100%] h-[350px] lg:w-[500px] lg:h-[350px] p-4`}
      >
        <div
          className={`${shimmer} relative my-2 lg:w-[350px] overflow-hidden lg:h-[40px] bg-[#00000008] rounded-xl`}
        ></div>
        <div
          className={`${shimmer} relative my-2 lg:w-[200px] overflow-hidden lg:h-[30px] bg-[#00000008] rounded-xl`}
        ></div>
        <div
          className={`${shimmer} relative my-2 lg:w-[250px] overflow-hidden lg:h-[35px] bg-[#00000008] rounded-xl`}
        ></div>
        <div
          className={`${shimmer} relative my-2 lg:w-[250px] overflow-hidden lg:h-[150px] bg-[#00000008] rounded-xl`}
        ></div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-2xl bg-secondTheme p-2 shadow-sm w-[100%] h-[100%]`}
    >
      <div className="flex p-5">
        <div className="h-6 w-10 rounded-md bg-[#333]" />
        <div className="ml-2 h-6 w-24 rounded-md bg-[#333] text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-[#444] px-4 py-14">
        <div className="h-7 w-20 rounded-md bg-[#333]" />
      </div>
      <div className="flex p-4">
        <div className="h-6 w-10 rounded-md bg-[#333]" />
        <div className="ml-2 h-6 w-24 rounded-md bg-[#333] text-sm font-medium" />
      </div>
    </div>
  );
}

export function YomSkeleton() {
  return (
    <div
      className={`max-w-screen relative h-[70vh] bg-gradient-to-l from-pageTheme to-[#444] flex items-center overflow-x-hidden`}
    ></div>
  );
}

export function FavoriteSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative flex w-[100%] h-[200px] lg:w-[550px] lg:h-[200px] overflow-hidden rounded-xl bg-bodyTheme p-2 shadow-sm`}
      >
        <div className="flex items-center justify-center truncate rounded-xl bg-[#ffffff30] w-[50%] h-[100%]">
          <div className="h-7 w-20 rounded-md bg-[#00000010]" />
        </div>
        <div className="lg:flex flex-col flex-grow justify-center">
          <div className="flex px-4 py-2 mt-2">
            <div className="h-5 w-5 rounded-md bg-[#00000010]" />
            <div className="ml-2 h-6 w-[100%] rounded-md bg-[#00000010] text-sm font-medium" />
          </div>
          <div className="flex px-4 py-2">
            <div className="h-5 w-5 rounded-md bg-[#00000010]" />
            <div className="ml-2 h-6 w-[100%] rounded-md bg-[#00000010] text-sm font-medium" />
          </div>
          <div className="flex px-4 py-2">
            <div className="h-5 w-5 rounded-md bg-[#00000010]" />
            <div className="ml-2 h-6 w-[100%] rounded-md bg-[#00000010] text-sm font-medium" />
          </div>
        </div>
      </div>
    </>
  );
}

export function Product() {
  return (
    <>
      <div
        className={`${shimmer} relative w-[100%] lg:w-[350px] h-[475px] overflow-hidden rounded-xl bg-bodyTheme p-2 shadow-sm`}
      >
        <div className="flex items-center justify-center truncate rounded-xl bg-[#ffffff30] w-[100%] h-[70%]">
          <div className="h-7 w-20 rounded-md bg-[#00000010]" />
        </div>
        <div className="flex px-4 py-2 mt-2">
          <div className="h-5 w-5 rounded-md bg-[#00000010]" />
          <div className="ml-2 h-6 w-[100%] rounded-md bg-[#00000010] text-sm font-medium" />
        </div>
        <div className="flex px-4 py-2">
          <div className="h-5 w-5 rounded-md bg-[#00000010]" />
          <div className="ml-2 h-6 w-[100%] rounded-md bg-[#00000010] text-sm font-medium" />
        </div>
        <div className="flex px-4 py-2">
          <div className="h-5 w-5 rounded-md bg-[#00000010]" />
          <div className="ml-2 h-6 w-[100%] rounded-md bg-[#00000010] text-sm font-medium" />
        </div>
      </div>
    </>
  );
}

export function ProductSkeleton() {
  return (
    <div className="w-[100%] lg:w-[100%] lg:mr-20 mb-10 flex flex-col items-center">
      <div
        className={`w-[98%] px-2 py-4 border-y-[1px] border-[#ccc] mb-5 flex justify-between items-center`}
      >
        <div
          className={`lg:w-[100px] h-[20px] bg-[#00000010] rounded-xl`}
        ></div>
        <div className="flex gap-5">
          <div className="lg:w-[100px] h-[20px] bg-[#00000010] rounded-xl"></div>
          <div className="lg:w-[100px] h-[20px] bg-[#00000010] rounded-xl"></div>
        </div>
      </div>
      <div className="w-[85%] lg:w-auto flex flex-col lg:flex-row">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
