import { NotFoundIcon } from "./Icons";


function NotFound() {
    return (
        <div className="pt-8 pb-4 w-full flex flex-col items-center">
            <NotFoundIcon />
            <h5 className="text-2xl mt-4 font-bold">No encontrado</h5>
        </div>
    );
}

export default NotFound;