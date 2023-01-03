// this is the page for the various routes
import "../../styles/style.scss";

const OtherPages:React.FC = () => {
    const path:string = window.location.pathname;
    const pageName:Array<string> = path.split("/");
    console.log(pageName[1]);
    
    return (
        <div className="d-flex flex-column ms-md-5 mt-md-5 ms-3 mt-3 justify-content-start p-1 ">
            <div className="page-name">{pageName[1]}</div>
        </div>
    );
}


export default OtherPages;