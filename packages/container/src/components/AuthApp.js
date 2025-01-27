import { mount } from "auth/authBootstrap";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const AuthApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }, type) => {
        if (history.location.pathname === nextPathname) {
          return;
        }
        switch (type) {
          case "POP":
            history.go(-1);
            break;
          case "PUSH":
            history.push(nextPathname);
            break;
          case "REPLACE":
            history.replace(nextPathname);
            break;
        }
      },
      initialPath: history.location.pathname,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
