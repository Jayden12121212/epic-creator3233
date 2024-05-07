import svgs from "@/constants/svgs";

export interface Route {
  path: string;
  label: string;
  icon?: keyof typeof svgs;
  external?: boolean;
}

export type RouteConfigKeys =
  | "overview"
  | "news"
  | "dashboard"
  | "payout"
  | "settings"
  | "fortniteGames";

export type RouteConfigs = {
  [key in RouteConfigKeys]: Route;
};

export enum FortniteGamesTab {
  Insights = "insights",
  Performance = "performance",
  GameXp = "xp",
  Rewards = "rewards",
}

export const getRouteConfigs = (tab?: FortniteGamesTab) => {
  const activeTab = tab || FortniteGamesTab.Insights;

  const routeMap: RouteConfigs = {
    overview: {
      path: "/overview",
      label: "Overview",
    },
    news: {
      path: "/news",
      label: "News",
    },
    dashboard: {
      path: "/dashboard",
      label: "Dashboard",
    },
    payout: {
      path: "/payout",
      label: "Payout",
    },
    settings: {
      path: "/settings",
      label: "Settings",
    },
    fortniteGames: {
      path: `fortnite-games/${activeTab}`,
      label: "Fortnite Games",
      icon: "ANALYTICS",
    },
  };

  return {
    routeMap,
    routes: Object.values(routeMap),
  };
};

export default getRouteConfigs;
