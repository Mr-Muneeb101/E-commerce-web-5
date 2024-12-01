import Image from "../Image/Image"
export default function Header(){

    return(
        <div className="sm:hidden flex justify-between items-center p-4 border-b-2 border-gray-600">
            <div className="flex items-center text-2xl font-bold gap-1">
            <Image src="/images/Frame 1.svg" alt="logo"/><h1>Ddsgnr</h1>
            </div>
            <Image src="/images/icon.svg" alt="" />
        </div>
    )
}