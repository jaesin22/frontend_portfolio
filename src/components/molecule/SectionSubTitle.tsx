import Typography from "../atom/typgography/Typography";

interface workProps {
    title: string;
}

function Work ({title} : workProps) {
    return (
        <div className="mt-20">
            <Typography text={title} className="font-bold justify-start flex text-4xl text-left m-0" />
            <hr className="w-[9%] h-1 mt-8 mb-12 bg-black" />
        </div>
    )

}

export default Work;