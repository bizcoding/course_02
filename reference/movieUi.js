export default () => (
    <div className='flex flex-col items-center p-2'>
        <div className='flex w-full rounded-full my-4 px-4 py-2 bg-slate-200 max-w-md flex flex-row items-center gap-2'>
            <span>영화명 검색</span>
            <input className='grow border-b p-1' type='text' />
            <FontAwesomeIcon icon={faEye} size='sm' />
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2'>
            <div className='flex flex-col gap-1'>
                <img
                    clasName='grow rounded-lg'
                    src='https://image.tmdb.org/t/p/original/aVLYKc8PeHmMqLF9g7Ywej3Pe2M.jpg'
                />
                <div className='flex-none flex flex-row'>
                    <span className='grow text-sm font-semibold truncate'>아이를 위한 아이</span>
                    <span className='flex-none text-slate-500 font-normal'>기타</span>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <img
                    clasName='grow rounded-lg'
                    src='https://image.tmdb.org/t/p/original/mahoRwcpJRx8TAuE6lKrYqCv8io.jpg'
                />
                <div className='flex-none flex flex-row'>
                    <span className='grow text-sm font-semibold truncate'>이공삼칠</span>
                    <span className='flex-none text-slate-500 font-normal'>가족</span>
                </div>
            </div>
        </div>
    </div>
)
