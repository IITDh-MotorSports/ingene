"use client";

import MemberDetails from "../components/memberDetails";
import TeamGallery from "../components/teamGallery";

export default function Team() {
  return (
    <div className="relative">
      <div className="overflow-hidden w-screen relative">
        <TeamGallery />
      </div>
      <MemberDetails />
    </div>
  );
}
