import KarzounNinjaHero from '@/components/karzoun-ninja/KarzounNinjaHero';
import HighlightBanner from '@/components/karzoun-ninja/HighlightBanner';
import WhyWorkWithUs from '@/components/karzoun-ninja/WhyWorkWithUs';
import CustomerCare from '@/components/karzoun-ninja/CustomerCare';
import TeamIntroduction from '@/components/karzoun-ninja/TeamIntroduction';
import TeamBenefits from '@/components/karzoun-ninja/TeamBenefits';

export default function KarzounNinja() {
  return (
    <div className="min-h-screen">
      <KarzounNinjaHero />
      <TeamIntroduction />
      <HighlightBanner />
      <WhyWorkWithUs />
      <CustomerCare />
      <TeamBenefits />
    </div>
  );
}

