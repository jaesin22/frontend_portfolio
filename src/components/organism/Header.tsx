import Button from '../atom/button/Button';

const Header = () => {
  const styles = 'hover:text-[#2D36CE] border-b-[#2D36CE] font-bold';

  return (
    <header>
      <div className='w-screen bg-white border-b flex justify-between h-12'>
        <div className='w-3/5 flex justify-between mx-auto'>
          <a
            href='https://career.programmers.co.kr/pr/244525_6615'
            target='_blank'
            className={` ${styles} flex justify-center items-center`}
            rel='noreferrer'
          >
            <Button label='Resume' renderHoverContent>
              <span className='sr-only'>text</span>
            </Button>
          </a>

          <Button
            label='Portfolio'
            className={` ${styles}`}
            renderHoverContent
          />
          <a
            href='https://github.com/Jaesin22'
            target='_blank'
            className={` ${styles} flex justify-center items-center`}
            rel='noreferrer'
          >
            <Button label='Github' renderHoverContent>
              <span className='sr-only'>text</span>
            </Button>
          </a>
          <a
            href='https://webdiv-diary.tistory.com/'
            target='_blank'
            className={` ${styles} flex justify-center items-center`}
            rel='noreferrer'
          >
            <Button label='Blog' renderHoverContent>
              <span className='sr-only'>text</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
