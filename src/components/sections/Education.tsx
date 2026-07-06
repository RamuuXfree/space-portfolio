import SectionHeader from '../ui/SectionHeader';
import { educationEntries } from '../../data/education';
import { EDUCATION_JOURNEY_PATH, milestoneLayouts } from '../../data/educationJourney';
import EducationJourney from './EducationJourney';

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          label="Education"
          title="Academic journey"
          description="Follow the orbital path through milestones — from foundation to specialization."
        />
      </div>

      <div className="w-full max-w-[80rem] mx-auto px-5 sm:px-6 lg:px-8">
      <EducationJourney
        entries={educationEntries}
        layouts={milestoneLayouts}
        pathD={EDUCATION_JOURNEY_PATH}
      />
      </div>
    </section>
  );
}
