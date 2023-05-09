"use client";

export default function LikeButton({ increment }: { increment: any }) {
  return (
    <button
      onClick={async () => {
        await increment();
      }}
    >
      Like
    </button>
  );
}
