"use client";

import dynamic from "next/dynamic";

// Client-side only import
const CV = dynamic(() => import("../../components/CV"), { ssr: false });

export default function ResumePage() {
  return <CV />;
}
