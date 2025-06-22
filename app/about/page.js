import Reviews from '@/components/testimonials/Testimonials_1'
import { siteConfig } from '@/config/siteConfig'

export const metadata = siteConfig.metadata.about

export default function AboutPage() {
  const { heading, subheading, features } = siteConfig.about
  const textColor = siteConfig.brand.textDark.replace('text-', '') // e.g. '#1F1D1B'
  const bgColor = siteConfig.styles.bgLight.replace('bg-', '')     // e.g. '#FAF9F5'

  return (
    <main className={`py-24 px-6 md:px-12`} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: siteConfig.styles.textPrimary.replace('text-', '') }}>
          {heading}
        </h1>
        <p className="text-lg">{subheading}</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {features.map((feature, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: siteConfig.styles.textPrimary.replace('text-', '') }}>
              {feature.title}
            </h2>
            <p className="leading-relaxed">{feature.text}</p>
          </div>
        ))}
      </div>

      <Reviews />
    </main>
  )
}