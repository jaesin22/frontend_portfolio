
import { GithubFilled, MailFilled, InstagramFilled } from '@ant-design/icons';
function SocialIconGroup() {
    return (
        <div className='flex text-xl justify-center mt-10'>
            <a href="https://github.com/Jaesin22">
            <GithubFilled className='text-[#808080] p-3 hover:bg-gray-100 rounded-full' />
            </a>
            <a href="mailto:jaesin22@naver.com">
            <MailFilled className='text-[#808080] p-3 hover:bg-gray-100 rounded-full' />
            </a>
            <a href="https://www.instagram.com/jaesin22/">
            <InstagramFilled className='text-[#808080] p-3 hover:bg-gray-100 rounded-full' />
            </a>
        </div>
    )

}

export default SocialIconGroup;