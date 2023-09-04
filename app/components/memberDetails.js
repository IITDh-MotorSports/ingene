"use client";
import { teamMembers } from "../assets/teamMembers";
import TeamCard from "./teamCard";

// importing aos

export default function MemberDetails() {
  // const [categories, setCategories] = useState([]);
  const categories = new Set();
  teamMembers.forEach((member) => {
    categories.add(member.team);
  });
  const categoriesArray = Array.from(categories);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="h-screen w-screen p-6">
      <div className="bg-transparent h-screen">
        <div>
          {categoriesArray?.map((category) => {
            return (
              <div>
                <p className="team-gallery" style={{ fontSize: "2rem", color: "white" }}>
                  {capitalizeFirstLetter(category)}
                </p>

                {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 max-w-screen mx-auto"> */}
                <div className="team-member-gallery">
                
                  {teamMembers.map((member) => {
                   
                    return (
                      member.team === category && (

                        <div className="team-member-gallery-entry" >
          <TeamCard
            name={member.title}
            description={member.paragraph}
            link={member.image}
            alt={member.title}
          />
        </div>
                      )
                    );
                  
                  }  )}
                </div>
                <br />
                <br />
                <br />
                <br />
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
}
