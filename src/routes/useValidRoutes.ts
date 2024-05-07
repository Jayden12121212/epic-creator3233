import { useMemo } from "react";
import { getRouteConfigs } from "@/routes/getRouteConfigs";

export const useValidRoutes = () => {
  const { routes, routeMap } = useMemo(() => getRouteConfigs(), []);
  return { routes, routeMap };
};
