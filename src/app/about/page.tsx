export default function AboutPage() {
  return (
    <section className="mx-auto flex h-full max-w-xl flex-col items-center justify-center space-y-4 text-center">
      <p className="text-gray-700">
        프론트엔드 개발자 <span className="font-semibold">이상원</span>입니다.
        <br />
        페르세우스그룹에서 크리에이터와 광고주를 위한 솔루션을 개발하고
        있습니다.
      </p>
      <div className="flex justify-center gap-4 pt-4 text-sm">
        <a
          href="https://github.com/bisari31"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          GitHub
        </a>
        <span>•</span>
        <a href="mailto:bisari31@gmail.com" className="text-blue-600 underline">
          bisari31@gmail.com
        </a>
      </div>
    </section>
  );
}
