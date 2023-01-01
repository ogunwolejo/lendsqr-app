import DashboardHeader from "../../modules/widgets/dashboard.header";

const DashboardLayout:React.FC = () => {
    return (
        <div className="d-flex flex-row align-items-center justify-content-start">
            <DashboardHeader/>
        </div>
    )
}

export default DashboardLayout;