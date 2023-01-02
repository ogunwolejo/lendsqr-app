// this is the page for the various routes

const OtherPages:React.FC = () => {
    const path:string = window.location.pathname;
    const pageName:Array<string> = path.split("/");
    console.log(pageName[1]);
    
    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            {pageName[1]}
        </div>
    );
}


export default OtherPages;