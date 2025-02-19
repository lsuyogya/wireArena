import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-10 min-h-[300vh]">
      <h3>Welcome Home!</h3>
    </div>
  );
}
