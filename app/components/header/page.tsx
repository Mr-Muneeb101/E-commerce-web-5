export default function Header(){
    return(
        <div className="sm:hidden flex justify-between items-center p-4 border-b-2 border-gray-600">
            <div className="flex items-center text-2xl font-bold gap-1">
            <img src="/images/Frame 1.svg" alt="logo" /><h1>Ddsgnr</h1>
            </div>
            <img src="/images/icon.svg" alt="" />
        </div>
    )
}