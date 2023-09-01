import React from "react";

function Header({ title, subTitle }) {
  //truyen đối số props, props ~ content cua element
  return (
    <h1 className="title">
      {title}
      <span>{subTitle}</span>
    </h1>
  );
}

export default Header;
