import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <p className="pb-2 text-xl mt-8">
        <span>
          <strong>
            <span className="font-medium text-amber-600">QiXing AuPair</span>{" "}
          </strong>
        </span>
        <span>is an international agency based in Shenzh</span>
        <span>
          en, China, committed to promoting cultural exchange between China and
          the rest of the world.
        </span>
      </p>
    </div>
  );
}
