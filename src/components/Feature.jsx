import {
  BookText,
  FileBadge,
  GraduationCap,
  BriefcaseBusiness,
  Clock,
  UserCheck,
  ShieldCheck,
  Medal,
  Award,
  HandCoins
} from 'lucide-react';

export default function WhyUs() {
  const features = [
  {
    title: "RJC CERTIFIED MEMBER",
    desc: "Committed to responsible business practices and ethical sourcing",
    icon:<ShieldCheck className="w-16 h-16 text-gray-700" strokeWidth={1.25} />,
  },
  {
    title: "Quality Assurance",
    desc: "Every diamond certified by internationally recognized laboratories",
    icon: <Award className="w-16 h-16 text-gray-700" strokeWidth={1.25} />,
  },
  {
    title: "Transparent Pricing",
    desc: "Fair pricing with complete transparency in all transactions",
    icon: <HandCoins className="w-16 h-16 text-gray-700" strokeWidth={1.25} />,
  },
];

  
  return (
    <section className=" px-4 md:px-20">
      <div className="max-w-7xl">
       <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-l-2 border-[#155793]">
  {features.map((feature, index) => (
    <div
      key={index}
      className="border-r-2 border-b-2 border-[#155793] p-6 md:p-8 flex flex-col items-center text-center"
    >
      <div className="mb-4">{feature.icon}</div>
      <h4 className="text-lg md:text-2xl tracking-tighter font-semibold text-gray-900 mb-2">
        {feature.title}
      </h4>
      <p className="text-sm text-gray-700 font-semibold">{feature.desc}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}