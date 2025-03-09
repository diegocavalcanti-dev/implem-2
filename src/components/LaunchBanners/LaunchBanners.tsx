import { LaunchBannerCard } from "./LaunchBannerCard";

export function LaunchBanners() {
  return (
    <section className="flex gap-5 px-3.5 py-0 mt-10 max-sm:overflow-x-auto max-sm:flex-nowrap">
      <LaunchBannerCard image="https://cdn.builder.io/api/v1/image/assets/TEMP/87592207cdf539ffb51b90188392015def8aab6b" />
      <LaunchBannerCard image="https://cdn.builder.io/api/v1/image/assets/TEMP/5bd6951f1bcfb1767dd39f4fb3dd70a9f2db0e66" />
    </section>
  );
}
