import React, { useState } from "react";

const VisibilityHook = (component, visibility = false) => {
  const [visible, setVisibility] = useState(() => visibility);
  return [visible ? component : null, () => setVisibility((v) => !v)];
};

// const VisibilityHook = (component, visibility = false) => {
//   const [visible, setVisibility] = useState(() => visibility);
//   return [
//     visible ? component : null,
//     () => setVisibility(true),
//     () => setVisibility(false),
//   ];
// };

export default VisibilityHook;
