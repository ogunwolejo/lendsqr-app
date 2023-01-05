import React from "react";

const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

const arr1: Array<number> = [1, 2, 3];

export const MainComponent: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <div className="card-main-page-header">{title}</div>
      <div className="mt-3 row gx-0 py-1">
        {arr.map((el: number) => (
          <div
            className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1"
            key={el}
          >
            <div className="component-label">full Name</div>
            <div className="component-result mt-1">Grace Effiom</div>
          </div>
        ))}
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export const SocialComponent: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <div className="card-main-page-header">{title}</div>
      <div className="mt-3 row gx-0 py-1">
        {arr1.map((el: number) => (
          <div
            className="col-4 col-md-4 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1"
            key={el}
          >
            <div className="component-label">full Name</div>
            <div className="component-result mt-1">Grace Effiom</div>
          </div>
        ))}
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export const FourthComponent: React.FC<{
  title: string;
  hideDivider?: boolean;
}> = ({ title, hideDivider = false }) => {
  return (
    <div>
      <div className="card-main-page-header">{title}</div>
      <div className="mt-3 row gx-0 py-1">
        {arr1.map((el: number) => (
          <div
            className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1"
            key={el}
          >
            <div className="component-label">full Name</div>
            <div className="component-result mt-1">Grace Effiom</div>
          </div>
        ))}
      </div>
      {!hideDivider && <hr className="mt-4" />}
    </div>
  );
};

const GeneralDetailsPage: React.FC = () => {
  return (
    <div className="card outlet-card p-2 p-md-3">
      <div className="card-body ">
        <MainComponent title="Personal Information" />
        <MainComponent title="Education and Employment" />
        <SocialComponent title="Socials" />
        <FourthComponent title="Guarantor" />
        <FourthComponent title="" hideDivider={true}/>
      </div>
    </div>
  );
};

export default GeneralDetailsPage;
