import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";
import { DailyChallengePage } from "./pages/DailyChallengePage";
import { DashboardPage } from "./pages/DashboardPage";
import { EnglishMasteryPage } from "./pages/EnglishMasteryPage";
import { HomePage } from "./pages/HomePage";
import { MockTestPage } from "./pages/MockTestPage";
import { NotesPage } from "./pages/NotesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { QuizPage } from "./pages/QuizPage";
import { SubjectsPage } from "./pages/SubjectsPage";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const subjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/subjects",
  component: SubjectsPage,
});
const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: QuizPage,
});
const mockTestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mock-test",
  component: MockTestPage,
});
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardPage,
});
const notesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/notes",
  component: NotesPage,
});
const englishRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/english-mastery",
  component: EnglishMasteryPage,
});
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});
const dailyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/daily-challenge",
  component: DailyChallengePage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  subjectsRoute,
  quizRoute,
  mockTestRoute,
  dashboardRoute,
  notesRoute,
  englishRoute,
  profileRoute,
  dailyRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
