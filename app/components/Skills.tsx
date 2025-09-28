import { skillCategories } from '../data/skills';
import SectionTemplate from './SectionTemplate';

interface SkillProps {
  name: string;
}

const Skill = ({ name }: SkillProps) => {
  return (
    <span className="inline-flex items-center px-3.5 py-1.5 text-white/80 rounded-xl mr-1.5 mb-1.5 text-[13px] border border-white/10">
      {name}
    </span>
  );
};

export default function Skills() {
  const visibleCategories = skillCategories.filter(category => category.visible);

  return (
    <SectionTemplate title="Skills">
      <div className="space-y-6">
        {visibleCategories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-lg font-medium text-white/90">{category.name}</h3>
            <div className="flex flex-wrap">
              {category.skills.map((skill, skillIndex) => (
                <Skill key={skillIndex} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
}
