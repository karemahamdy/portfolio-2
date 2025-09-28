import { contentItems } from '../data/content';
import ContentItem from './ContentItem';
import SectionTemplate from './SectionTemplate';

export default function Content() {
  const visibleContentItems = contentItems.filter(item => item.visible);

  return (
    <SectionTemplate title="Content">
      <div className="flex flex-col">
        {visibleContentItems.map((item, index) => (
          <ContentItem key={index} item={item} />
        ))}
      </div>
    </SectionTemplate>
  );
}
