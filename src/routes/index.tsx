import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <section className="min-h-[300vh]">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="txtContent content-center md:col-span-2">
            <small className="text-primary">Tech Deals</small>
            <h1 className="text-6xl font-bold">Holiday Tech Gifts Central</h1>
            <p>
              Looking for a cool tech gift? We've tested all kinds of devices
              and gadgets so you don't have to guess: Our suggestions for the
              best tech gifts of all kinds, from phones to laptops and
              everything in between.
            </p>
            <small>Jerome Bell</small>
            <div className="flex gap-2">
              <time>11 Jan 2024</time>
              <div className="dot"></div>
              <span>5 min read</span>
            </div>
          </div>
          <div className="imgContent md:col-span-3">
            <img
              src="images/banner.png"
              className="object-cover h-full w-full"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
