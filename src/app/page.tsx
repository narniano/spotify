import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your library
            </a>
          </nav>

          <nav className="mt-10 pt-6 border-t border-zinc-1040 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-104">
              Common Grace
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-104">
              Mosaico Musical
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-104">
              En Español
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-104">
              Crente raiz
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-104">
              Uns rock aí
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-104">
              Reforma
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-104">
              Brasilidade
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-104">
              Kierkegaardiando
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4 hover:bg-white/10 transition-colors">
            <button className="rounded-full bg-black/20 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/20 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/Cover1.jpg"
                width={104}
                height={104}
                alt="Capa"
              ></Image>
              <strong>Where the light shines through</strong>
              <button className="flex rounded-full p-3 bg-green-400 w-12 h-12 text-black ml-auto mr-5 items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/Cover2.jpg"
                width={104}
                height={104}
                alt="Capa"
              ></Image>
              <strong>Fading West</strong>
              <button className="flex rounded-full p-3 bg-green-400 w-12 h-12 text-black ml-auto mr-5 items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/Cover3.jpg"
                width={104}
                height={104}
                alt="Capa"
              ></Image>
              <strong>Zion</strong>
              <button className="flex rounded-full p-3 bg-green-400 w-12 h-12 text-black ml-auto mr-5 items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/Cover4.jpg"
                width={104}
                height={104}
                alt="Capa"
              ></Image>
              <strong>United</strong>
              <button className="flex rounded-full p-3 bg-green-400 w-12 h-12 text-black ml-auto mr-5 items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/Cover5.jpg"
                width={104}
                height={104}
                alt="Capa"
              ></Image>
              <strong>Brand new eyes</strong>
              <button className="flex rounded-full p-3 bg-green-400 w-12 h-12 text-black ml-auto mr-5 items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/Cover6.jpg"
                width={104}
                height={104}
                alt="Capa"
              ></Image>
              <strong>After laughter</strong>
              <button className="flex rounded-full p-3 bg-green-400 w-12 h-12 text-black ml-auto mr-5 items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Margot Gosling
          </h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              {" "}
              <Image
                src="/Cover6.jpg"
                className="w-full mb-2"
                width={140}
                height={140}
                alt="Capa"
              ></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Paramore, Dua Lipa, Billie Eilish and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
            >
              {" "}
              <Image
                src="/Cover1.jpg"
                className="w-full mb-2"
                width={140}
                height={140}
                alt="Capa"
              ></Image>
              <strong>Daily Mix 2</strong>
              <span className="text-sm text-zinc-400">
                Paramore, Dua Lipa, Billie Eilish and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
            >
              {" "}
              <Image
                src="/Cover5.jpg"
                className="w-full mb-2"
                width={140}
                height={140}
                alt="Capa"
              ></Image>
              <strong>Daily Mix 3</strong>
              <span className="text-sm text-zinc-400">
                Paramore, Dua Lipa, Billie Eilish and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
            >
              {" "}
              <Image
                src="/Cover4.jpg"
                className="w-full mb-2"
                width={140}
                height={140}
                alt="Capa"
              ></Image>
              <strong>Daily Mix 4</strong>
              <span className="text-sm text-zinc-400">
                Paramore, Dua Lipa, Billie Eilish and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
            >
              {" "}
              <Image
                src="/Cover3.jpg"
                className="w-full mb-2"
                width={140}
                height={140}
                alt="Capa"
              ></Image>
              <strong>Daily Mix 5</strong>
              <span className="text-sm text-zinc-400">
                Paramore, Dua Lipa, Billie Eilish and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between sticky bottom-0">
        <div className="flex items-center gap-3">
          {" "}
          <Image src="/Cover6.jpg" width={60} height={60} alt="Capa"></Image>
          <div className="flex flex-col">
            <strong className="font-normal text-sm">Hard Times</strong>
            <span className="text-xs text-zinc-400">Paramore</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-6">
            <Shuffle size={18} />
            <SkipBack size={18} />
            <button className="flex rounded-full p-3 bg-white w-10 h-10 text-black items-center justify-center">
              <Play />
            </button>
            <SkipForward size={18} />
            <Repeat size={18} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 bg-zinc-200 w-40 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={13} />
          <LayoutList size={13} />
          <Laptop2 size={13} />
          <div className="flex items-center gap-2">
            <Volume size={13} />
            <div className="h-1 rounded-full w-20 bg-zinc-600">
              <div className="h-1 bg-zinc-200 w-16 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={13} />
        </div>
      </footer>
    </div>
  );
}
