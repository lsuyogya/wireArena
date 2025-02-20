import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const latestNews = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/4d00/7f60/35dda7e3a27aae68196ccd0e6703bdf7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=drIEAkyVmHGSFSEwSAi6KK0Vv-gtkdJk0gYAXcUhjsV0I-8tRW7Dj7JJVg3fwgsXi4sUJwKkkghJ8ttrreaeKxaqcPjJPrc8Lb~H67QwXxNwTF7J~CDFED9X0eXoLXM3-5JiG1MZQNQBxU9h4GmcXdiR4-Btg56vsoNO-msaf80RY49eGPN6b~K8emXGbF~8BfmUSbKWMXL1DRX-fw6hjts7ZzXPSnizB7ctkEG71Ciu5t2wsxJZbvoRzrVjnTSg~WpNItIf49hjkOWC8PNw0I0XisUGqfoX2D4akA8Oh80cCD3Ial9SZaejXoE87X3txBqPEDOEHDQ5wXopv8HREQ__',
      subTitle: 'Connected Car Tech',
      title: 'How to Wire Multiple Amps in Your Car',
      author: 'Brooklyn Simmons',
      date: '11 Jan 2024',
      readTime: '5 min read',
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/4d00/7f60/35dda7e3a27aae68196ccd0e6703bdf7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=drIEAkyVmHGSFSEwSAi6KK0Vv-gtkdJk0gYAXcUhjsV0I-8tRW7Dj7JJVg3fwgsXi4sUJwKkkghJ8ttrreaeKxaqcPjJPrc8Lb~H67QwXxNwTF7J~CDFED9X0eXoLXM3-5JiG1MZQNQBxU9h4GmcXdiR4-Btg56vsoNO-msaf80RY49eGPN6b~K8emXGbF~8BfmUSbKWMXL1DRX-fw6hjts7ZzXPSnizB7ctkEG71Ciu5t2wsxJZbvoRzrVjnTSg~WpNItIf49hjkOWC8PNw0I0XisUGqfoX2D4akA8Oh80cCD3Ial9SZaejXoE87X3txBqPEDOEHDQ5wXopv8HREQ__',
      subTitle: 'Connected Car Tech',
      title: 'How to Wire Multiple Amps in Your Car',
      author: 'Brooklyn Simmons',
      date: '11 Jan 2024',
      readTime: '5 min read',
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/4d00/7f60/35dda7e3a27aae68196ccd0e6703bdf7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=drIEAkyVmHGSFSEwSAi6KK0Vv-gtkdJk0gYAXcUhjsV0I-8tRW7Dj7JJVg3fwgsXi4sUJwKkkghJ8ttrreaeKxaqcPjJPrc8Lb~H67QwXxNwTF7J~CDFED9X0eXoLXM3-5JiG1MZQNQBxU9h4GmcXdiR4-Btg56vsoNO-msaf80RY49eGPN6b~K8emXGbF~8BfmUSbKWMXL1DRX-fw6hjts7ZzXPSnizB7ctkEG71Ciu5t2wsxJZbvoRzrVjnTSg~WpNItIf49hjkOWC8PNw0I0XisUGqfoX2D4akA8Oh80cCD3Ial9SZaejXoE87X3txBqPEDOEHDQ5wXopv8HREQ__',
      subTitle: 'Connected Car Tech',
      title: 'How to Wire Multiple Amps in Your Car',
      author: 'Brooklyn Simmons',
      date: '11 Jan 2024',
      readTime: '5 min read',
    },
  ];
  return (
    <>
      <section className="">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-4">
            <div className="txtContent content-center md:col-span-2">
              <small className="text-primary">Tech Deals</small>
              <h1 className="text-6xl font-bold">Holiday Tech Gifts Central</h1>
              <p className="my-8">
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

      <section className="bg-primary-light">
        <div className="container py-(--section-gap)">
          <div className="flex flex-wrap content-end justify-between">
            <div>
              <h1 className="text-4xl font-bold">Latest News</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className="btn-transparent">View All</button>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {latestNews.map((news, index) => (
              <div
                className="card grid grid-cols-2 gap-4"
                key={index + news.title}>
                <img
                  src={`${news.img}`}
                  alt=""
                  className="w-full"
                />
                <div className="flex flex-col place-content-center">
                  <small className="text-primary">{news.subTitle}</small>
                  <h2 className="my-4 line-clamp-3 font-bold text-3xl">
                    {news.title}
                  </h2>
                  <small>{news.author}</small>
                  <div className="flex gap-2 content-center">
                    <small>{news.date}</small>
                    <div className="dot"></div>
                    <small>{news.readTime}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
