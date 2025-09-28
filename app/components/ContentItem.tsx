import { ContentItem as ContentItemType } from '../data/content';

interface ContentItemProps {
  item: ContentItemType;
}

export default function ContentItem({ item }: ContentItemProps) {
  return (
    <div>
      <div className="border-t border-gray-800 my-2"></div>
      <a
        href={item.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center py-2 hover:bg-gray-900/30 transition-colors group"
      >
        <div className="flex-1 text-white font-medium group-hover:underline text-sm sm:text-base">{item.title}</div>
        <div className="flex gap-3 sm:gap-6">
          <div className="text-gray-500 text-xs sm:text-sm text-right min-w-16">
            {item.type === 'blog' ? 'Blog' : item.type === 'video' ? 'Video' : 'Repo'}
          </div>
          <div className="text-gray-500 text-xs sm:text-sm text-right min-w-16">
            {item.date.split(' ')[0].slice(0, 3)} '{item.year.slice(2)}
          </div>
        </div>
      </a>
    </div>
  );
}
