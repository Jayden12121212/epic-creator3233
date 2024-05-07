import { createClient } from "contentful";

interface ContentfulClientConfig {
  space: string;
  accessToken: string;
}

const config: ContentfulClientConfig = {
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
};

const createContentfulClient = () => {
  return createClient({
    space: config.space,
    accessToken: config.accessToken,
  });
};

export { createContentfulClient };
