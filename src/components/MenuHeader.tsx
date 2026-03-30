// src/components/CommentsSection.tsx
import Text from "./Text";

export default function MenuHeader() {
  return (
    <section className="flex flex-col w-fit gap-3">
        <Text text="Menú:" className="font-semibold text-3xl" />
        <div className="bg-primary-yellow h-0.5" />
    </section>
  );
}
