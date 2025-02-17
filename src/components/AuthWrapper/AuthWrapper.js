import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export const AuthWrapper = ({ children }) => {
  const curOrganization = localStorage.getItem("organization_id");
  const options = {
    domain: "dev-xpa4ghv8.us.auth0.com",
    clientId: "aWYaHAbljpuOAg4t2dafPV8HYAtLisX6",
    redirectUri: window.location.origin,
    ...(curOrganization ? { organization: curOrganization } : null)
  };
  return <Auth0Provider {...options}>{children}</Auth0Provider>;
};
