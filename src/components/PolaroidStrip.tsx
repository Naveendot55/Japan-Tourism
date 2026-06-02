import PolaroidCard from './PolaroidCard';

const base = import.meta.env.BASE_URL;

const cards = [
  { videoSrc: `${base}videos/polaroid-pagoda.mp4`, caption: '3 cities in Japan', rotation: -2 },
  { videoSrc: `${base}videos/polaroid-rice.mp4`, caption: '10 days', rotation: 1.5 },
  { videoSrc: `${base}videos/polaroid-shrine.mp4`, caption: 'gigabytes of photos', rotation: -1 },
  { videoSrc: `${base}videos/polaroid-ramen.mp4`, caption: 'eat ramen', rotation: 2 },
  { videoSrc: `${base}videos/polaroid-shinjuku.mp4`, caption: 'enjoy the vibe', rotation: -1.5 },
];

export default function PolaroidStrip() {
  return (
    <div className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto sm:overflow-visible pb-4 snap-x snap-mandatory scrollbar-hide">
      {cards.map((card, i) => (
        <div key={i} className="snap-start flex-shrink-0">
          <PolaroidCard
            videoSrc={card.videoSrc}
            caption={card.caption}
            rotation={card.rotation}
          />
        </div>
      ))}
    </div>
  );
}
