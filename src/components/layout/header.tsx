export function Header() {
  return (
    <header className='sticky flex h-16 items-center justify-between bg-custom-olive px-4'>
      <h1
        className='text-2xl font-extrabold text-white'
        style={{ fontFamily: 'Impact, sans-serif' }}
      >
        <b>主観評価実験用フォーム</b>
      </h1>
      {/* <h1 className="justify-end text-whitefont-extrabold text-2xl">
            <a
                className="text-white font-bold"
                href="https://github.com/keufcp"
                target="_blank">
                <Image src="/github-mark-white.svg" alt="GitHub" width={24} height={24} color="white" />
            </a>
        </h1> */}
    </header>
  )
}
