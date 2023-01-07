import "./styles/widget.scss";
import React, { useState, useEffect } from "react";

const SideBabrMenu: React.FC<{
  title: string;
  image: string;
  currentPath:string;
  route:string;
  isActive?: boolean;
}> = ({ title, image, currentPath, route, isActive = false }) => {
  let [isCurrentPath, setCurrentPath] = useState<boolean>(false);
  //console.log(window.location.pathname, isActive);

  //let isCurrent:boolean = route === currentPath ? true : false;

  useEffect(() => {
    route === currentPath ? setCurrentPath(true) : setCurrentPath(false);
  }, [route,currentPath ])

  return (
    <div className="py-2 px-1 pt-md-2 ps-md-2 ps-lg-4 pb-md-2 d-flex flex-row justify-content-start align-items-center gap-md-1 gap-lg-2">
      <img src={image} alt="dashboard" className="side-bar-menu-img" />
      <div
        className={`${
          isCurrentPath
            ? "side-bar-menu-title-active"
            : "side-bar-menu-title-inactive"
        }`}
      >
        {title}
      </div>
    </div>
  );
};

export default SideBabrMenu;
