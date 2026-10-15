import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1b1b1b] text-white p-6 text-center">
      <h1 className="text-6xl font-instrument italic mb-4">404</h1>
      <p className="text-neutral-400 mb-6 font-mono text-sm">
        Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-full bg-white text-black font-medium text-xs hover:bg-neutral-200 transition-colors"
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
}
