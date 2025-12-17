import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("blog-post/:id", "routes/blog-post.$id.tsx"),
  route("user/:id", "routes/user.$id.tsx"),
] satisfies RouteConfig;
