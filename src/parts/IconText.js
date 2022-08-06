import Button from "elements/Button";
import React from "react";

export default function IconText(props) {
  const className = ["brand-text-icon", props.className];
  return (
    <Button className={className.join(" ")} href="" type="link">
      One<span className="text-gray-900">Staycation.</span>
    </Button>
  );
}
